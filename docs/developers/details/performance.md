---
sidebar_position: 20
slug: /performance
---

# Performance

ProtonAOSP features a number of performance improvements that make the overall system performance significantly better:

- Up to 18% faster app/menu/screen opening
- 16% faster screenshot capturing
- Up to 4x faster low-level memory management
- Faster image loading and saving (JPEG and PNG)

[Benchmark results](#benchmarks) are available to quantify these performance improvements. Most of them are the result of empirically profiling for bottlenecks and optimizing accordingly.

The sections below describe the technical details of our optimizations. All pre-optimization profiling percentages were sourced from a Pixel 5 running ProtonAOSP 11.3.1, unless otherwise stated. "The Settings test" refers to opening and closing activities in Settings, specifically Developer Options because of the amount of preferences it contains.

## Native code

Most of ProtonAOSP's performance improvements are in native components, which comprise much of the system's performance-critical code.

### Memory allocation

Android 11 switched to the [Scudo memory allocator](https://source.android.com/devices/tech/debug/scudo) for security hardening, but this comes at the expense of performance. We trade the ability to detect memory usage bugs for performance instead by using the latest stable version of [jemalloc](https://github.com/jemalloc/jemalloc), updated from the official repository.

In Bionic libc's semi-realistic [memory trace replay tests](https://android.googlesource.com/platform/system/extras/+/refs/heads/master/memory_replay), jemalloc performed up to [4x better than Scudo](https://docs.google.com/spreadsheets/d/1LG_kxaK5cI14gGtnyM-nNNmfpMdV9Vh-LtYoq7H5J4s/edit) while using nearly the same amount of memory.

### Optimized zlib

We use an optimized fork of the ubiquitous zlib data compression library, [zlib-ng](https://github.com/ProtonAOSP/android_external_zlib-ng), to improve compression and decompression performance for many use cases:

- HTTP gzip compression
- PNG compression (e.g. screenshot saving and image editing)
- Android resource loading
- ZIP archives

Combined with other improvements, this speeds up screenshot saving by 16% on the Pixel 5 and likely contributes to the faster cold app launches as well.

### Bionic libc

Bionic libc includes string and memory routines used by nearly every process on Android. We use more optimized versions of these commonly-used functions by porting them from Arm's [arm-optimized-routines](https://github.com/ProtonAOSP/android_bionic/commit/61f715c4f) project.

### Global ThinLTO

The LLVM/Clang compiler includes support for [ThinLTO](https://clang.llvm.org/docs/ThinLTO.html), a DSO-wide (i.e. program-wide or library-wide) optimization that can improve performance significantly in many cases because it improves the compiler's ability to inline code.

We added Android 12's [experimental mode to enable ThinLTO globally](https://github.com/ProtonAOSP/android_build_soong/commit/0e7484b6f9ed126f702eca0372251e024e42a151) for most components in the system and [enabled it by default](https://github.com/ProtonAOSP/android_vendor_proton/commit/5be87fda2612d7e45e0d713aa236be7054654d25), which improves app launch performance by ~2% in addition to the individual components we already enabled ThinLTO for before this.

### SIMD

On modern CPUs, leveraging SIMD is key to maximizing performance in compute-heavy workloads such as image and data compression.

We have either updated or switched to accelerated forks of the following libraries in order to take (more) advantage of NEON SIMD and/or other ARMv8.2-A extensions (e.g. CRC32 and polynomial multiplication):

- [libjpeg-turbo](https://github.com/ProtonAOSP/android_external_libjpeg-turbo)
- [zlib-ng](https://github.com/ProtonAOSP/android_external_zlib-ng)

### Reduced debugging

We've disabled the [statsd](https://github.com/ProtonAOSP/android_system_core/commit/4c6eb4bfb) daemon, which collects diagnostic statistics that are normally unused on ProtonAOSP. In our testing, statsd itself accounted for 0.04% of CPU time in the Settings test, with more overhead (over 0.02%) from clients serializing and sending stats for collection.

Similarly, we [disabled debug tracing in ART](https://github.com/ProtonAOSP/android_art/commit/9843b4182a27c82ab6a0513c39f893bb18eafcb9) to save 33% of the 0.1% CPU time spent checking whether specific trace tags are enabled.

### Compiler optimizations

Google enabled additional compiler optimizations (`-O3`) for some components in Android 12. While this can cause breakage in some cases, we followed suit with the components that Google deemed safe to optimize:

- [libpng](https://github.com/ProtonAOSP/android_external_libpng/commit/95c9e96d0c7e9f5375c3c50596fffb5991205f10)

### Compiler update

We use a newer version of the Clang compiler from Android 12: Clang 12.0.4. This does not make much of a difference by itself, but it helps [global ThinLTO](#global-thinlto) work better by avoiding compiler bugs and taking advantage of newer LLVM optimizations.

### Miscellaneous

Some other miscellaneous optimizations in native libraries have been ported from Android 12:

- [libbinder - avoid pthread_cond_broadcast per call](https://github.com/ProtonAOSP/android_frameworks_native/commit/24112cc81)
- [libbinder: avoid global mutex every binder call](https://github.com/ProtonAOSP/android_frameworks_native/commit/6691ac1a8)

## Java code

While we have more optimizations focused on native code, higher-level Java code has also been optimized according to simpleperf profiles.

Percentages in the following sections refer to global CPU time in the Settings test. In indented sections, the percentage is a fraction of the parent items.

### Framework & core services

- Reduce reflection overhead (12% of 0.39% ART JNI trampolines)
  - [LayoutInflater: Opportunistically create views directly for performance](https://github.com/ProtonAOSP/android_frameworks_base/commit/9b532b353fb6) (88%)
- Replace ArrayMap with HashMap for performance (0.12%)
  - [SystemServiceRegistry](https://github.com/ProtonAOSP/android_frameworks_base/commit/9d18a2ba4b75) (5%)
  - [PackageManagerService](https://github.com/ProtonAOSP/android_frameworks_base/commit/874b64319302) (22%)
  - [InsetsStateController](https://github.com/ProtonAOSP/android_frameworks_base/commit/7965a433d2f7) (7%)
  - [LocalServices](https://github.com/ProtonAOSP/android_frameworks_base/commit/f08c65a7267c) (6%)
  - [ThemedResourceCache](https://github.com/ProtonAOSP/android_frameworks_base/commit/7d73bd479351) (10%)
- Reduce debugging overhead
  - [Trace: Disable debug tracing in production builds](https://github.com/ProtonAOSP/android_frameworks_base/commit/4caddd350b87) (2% of 0.12% trace tags)
  - [statsd: Disable native stats collection service](https://github.com/ProtonAOSP/android_frameworks_base/commit/d3319b8762e6) (0.06%)
- Reduce interface method trampoline overhead (0.32%)
  - [PackageInfo: Optimize ApplicationInfo creation](https://github.com/ProtonAOSP/android_frameworks_base/commit/7ae0e4d46f44) (5%)

### UI services

- Reduce unnecessary CPU-rendered screenshot captures (over 2%)
  - [Revert "Pre-emptively take a snapshot when finishing an activity before changing visibility"](https://github.com/ProtonAOSP/android_frameworks_base/commit/632a5d16dff2)

### Native bindings

- More efficient app process forking
  - [Add zygote native fork loop](https://github.com/ProtonAOSP/android_frameworks_base/commit/704a6191a9ba) (ported from Android 12)

## Benchmarks

Raw benchmark results and analysis spreadsheets can be found in the [Google Drive folder](https://drive.google.com/drive/folders/1qORVRrTQ71vv4bjqJlhq4MR8kr5P1NT_). Most of the results are from a Pixel 5.
