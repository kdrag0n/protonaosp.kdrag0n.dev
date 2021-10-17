---
sidebar_position: 30
---

# SafetyNet

ProtonAOSP uses a variety of workarounds to pass Google's SafetyNet attestation checks without breaking any parts of the system.

Please note that these workarounds may break at any time, and custom ROMs will not be able to pass SafetyNet forever. They are a temporary solution at best.

## Verified boot state

SafetyNet checks some system properties passed by the bootloader (via the kernel command line) to determine whether the bootloader is unlocked, and if so, fails the basic integrity check.

ProtonAOSP sets fake values for these properties at boot. These values override the ones from the kernel command line, so Google Play Services is made unaware of the unlocked bootloader.

Commits:

- [init: Set properties to make SafetyNet pass](https://github.com/ProtonAOSP/android_system_core/commit/3102e9e8c)
- [fastboot: Revert to Android 11 method of checking lock status](https://github.com/ProtonAOSP/android_system_core/commit/497ada563)

## Build fingerprint

SafetyNet's CTS profile check verifies the build profile against Google's database of CTS-certified builds. It passes if the following properties match a known certified build:

- Device codename
- System & vendor security patch levels
- Build fingerprint

Spoofing the build fingerprint is the intuitive solution, but it causes issues because Android uses build fingerprint changes as a signal to clear and rebuild several caches. If the build fingerprint always stays the same (or only changes once per month), system updates that change resource IDs or native libraries embedded in APKs can cause strange issues. This forces users to wipe data on every update and results in poor UX.

Instead of overriding the system fingerprint for all builds, ProtonAOSP only reports the spoofed fingerprint to Google Play Services. This helps make SafetyNet pass without causing issues with the system itself.

Commits:

- [Spoof build fingerprint for Google Play Services](https://github.com/ProtonAOSP/android_frameworks_base/commit/14cadef1690f)
- [Only use stock build fingerprint for Google Play Services](https://github.com/ProtonAOSP/android_vendor_proton/commit/29a394f)

## Device codename

As described above, SafetyNet also checks the device codename as part of the CTS profile. This means that prefixes such as `aosp_` and `lineage_` should be removed from the device tree's product information. The device name should match that of the stock ROM.

Commits:

- [Update product info from stock](https://github.com/ProtonAOSP/android_device_google_coral/commit/8df17a36)

## Hardware-backed attestation

On January 12, 2021, Google rolled out an update to make SafetyNet opportunistically use [hardware-backed cryptographic attestation](https://developer.android.com/training/articles/security-key-attestation) if the device supports it. The signed attestation payloads cannot be forged without an exploit, but we can take advantage of the fact that the use of hardware-backed attestation is optimistic and prevent Google Play Services from using it.

On September 2, 2021, Google started enforcing hardware-backed attestation based on device information. ProtonAOSP circumvents this by altering the device model name.

[Universal SafetyNet Fix](https://github.com/kdrag0n/safetynet-fix) is the portable version of this workaround for all ROMs.

Commits:

- [keystore: Block key attestation for SafetyNet](https://github.com/ProtonAOSP/android_frameworks_base/commit/13dc7d28c12d)
- [Alter model name to avoid SafetyNet HW attestation enforcement](https://github.com/ProtonAOSP/android_frameworks_base/commit/a99ac1b48a9b)
