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

Apart from optimized algorithms, zlib-ng makes more use of NEON SIMD and other ARMv8.2 extensions such as CRC32 for performance.

### Reduced debugging

We've [disabled debug tracing in ART](https://github.com/ProtonAOSP/android_art/commit/9843b4182a27c82ab6a0513c39f893bb18eafcb9) to save 33% of the 0.1% CPU time spent checking whether specific trace tags are enabled.

## Java code

While we have more optimizations focused on native code, higher-level Java code has also been optimized according to simpleperf profiles.

Percentages in the following sections refer to global CPU time in the Settings test. In indented sections, the percentage is a fraction of the parent items.

### Framework & core services

- Reduce reflection overhead (12% of 0.39% ART JNI trampolines)
  - [LayoutInflater: Opportunistically create views directly for performance](https://github.com/ProtonAOSP/android_frameworks_base/commit/47c2c1b0ecd0) (88%)
- Replace ArrayMap with HashMap for performance (0.12%)
  - [SystemServiceRegistry](https://github.com/ProtonAOSP/android_frameworks_base/commit/1fa2663ab065) (5%)
  - [InsetsStateController](https://github.com/ProtonAOSP/android_frameworks_base/commit/0d61dca61d45) (7%)
  - [LocalServices](https://github.com/ProtonAOSP/android_frameworks_base/commit/5474e805e51f) (6%)
  - [ThemedResourceCache](https://github.com/ProtonAOSP/android_frameworks_base/commit/a5e881cab16e) (10%)
- Reduce debugging overhead
  - [Trace: Disable debug tracing in production builds](https://github.com/ProtonAOSP/android_frameworks_base/commit/ead7c073729e) (2% of 0.12% trace tags)
- Reduce interface method trampoline overhead (0.32%)
  - [PackageInfo: Optimize ApplicationInfo creation](https://github.com/ProtonAOSP/android_frameworks_base/commit/1d316bf45654) (5%)

### UI services

- Reduce unnecessary CPU-rendered screenshot captures (over 2%)
  - [Revert "Pre-emptively take a snapshot when finishing an activity before changing visibility"](https://github.com/ProtonAOSP/android_frameworks_base/commit/30c7314d9af5)

## Benchmarks

Raw benchmark results and analysis spreadsheets can be found in the [Google Drive folder](https://drive.google.com/drive/folders/1qORVRrTQ71vv4bjqJlhq4MR8kr5P1NT_). Most of the results are from a Pixel 5 running Android 11.
