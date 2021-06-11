---
sidebar_position: 30
---

# SafetyNet

ProtonAOSP uses a variety of workarounds to pass Google's SafetyNet attestation checks without breaking any parts of the system.

Please note that these workarounds may break at any time, and custom ROMs will not be able to pass SafetyNet forever. They are a temporary solution at best.

## Verified boot state

SafetyNet checks some system properties passed by the bootloader (via the kernel command line) to determine whether the bootloader is unlocked, and if so, fails the basic integrity check.

ProtonAOSP sets fake values for these properties at boot. These values override the ones from the kernel command line, so Google Play Services is made unaware of the unlocked bootloader.

Commit: [init: Set properties to make SafetyNet pass](https://github.com/ProtonAOSP/android_system_core/commit/fa18a5862)

## Build fingerprint

SafetyNet's CTS profile check verifies the build profile against Google's database of CTS-certified builds. It passes if the following properties match a known certified build:

- Device codename
- System & vendor security patch levels
- Build fingerprint

Spoofing the build fingerprint is the intuitive solution, but it causes issues because Android uses build fingerprint changes as a signal to clear and rebuild several caches. If the build fingerprint always stays the same (or only changes once per month), system updates that change resource IDs or native libraries embedded in APKs can cause strange issues. This forces users to wipe data on every update and results in poor UX.

Instead of overriding the system fingerprint for all builds, ProtonAOSP only reports the spoofed fingerprint to Google Play Services. This helps make SafetyNet pass without causing issues with the system itself.

Commits: [Spoof build fingerprint for Google Play Services](https://github.com/ProtonAOSP/android_frameworks_base/commit/b8adfb5d711c), [core: Make build property spoofing more reliable](https://github.com/ProtonAOSP/android_frameworks_base/commit/4e37c5884262), and [Only use stock build fingerprint for Google Play Services](https://github.com/ProtonAOSP/android_vendor_proton/commit/29a394f).

## Security patch level

As described above, SafetyNet also checks the system and vendor security patch levels. This means that older devices no longer updated by their manufacturer will need to spoof the security patch level reported to SafetyNet. This can be done by overriding the security patch property, which SafetyNet reads directly, and adding a new one that the framework reads for the real security patch level.

Devices that are still receiving official updates should **not** do this.

Commits: [build: Add support for faking platform security patch level](https://github.com/ProtonAOSP/android_build_make/commit/e527380af1), [build: Swap fake and real platform security patch levels](https://github.com/ProtonAOSP/android_build_make/commit/8659fa7427), [core: Use real security patch level property](https://github.com/ProtonAOSP/android_frameworks_base/commit/7b298d52fb2f), and [floral: Override product info from stock RQ2A.210405.005](https://github.com/ProtonAOSP/android_device_google_coral/commit/2fc9d775a613aabd51710af23f6e6bf58811de78)

## Device codename

As described above, SafetyNet also checks the device codename as part of the CTS profile. This means that prefixes such as `aosp_` and `lineage_` should be removed from the device tree's product information. The device name should match that of the stock ROM.

Commit: [device: Update product info from stock](https://github.com/ProtonAOSP/android_device_google_coral/commit/a70c0e4a37bc790f2e00e5550a603b28a49292ca)

## Hardware-backed attestation

On January 12, 2021, Google rolled out an update to make SafetyNet opportunistically use [hardware-backed cryptographic attestation](https://developer.android.com/training/articles/security-key-attestation) if the device supports it. The signed attestation payloads cannot be forged without an exploit, but we can take advantage of the fact that the use of hardware-backed attestation is optimistic and prevent Google Play Services from using it.

[Universal SafetyNet Fix](https://github.com/kdrag0n/safetynet-fix) is the portable version of this workaround for all ROMs.

Commit: [KeyStore: Block key attestation for Google Play Services](https://github.com/ProtonAOSP/android_frameworks_base/commit/3f6dfe6f5745)
