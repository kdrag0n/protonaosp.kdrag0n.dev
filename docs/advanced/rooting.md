---
sidebar_position: 1
slug: /root
---

# Rooting

ProtonAOSP is designed for a good user experience out-of-the-box, without requiring modifications or any other changes. We do not officially support rooting or any other modifications to the system because they are prone to breakage and tend to cause issues. Rooting, in particular, weakens the security of your device and is often the source of many issues. However, we recognize that many of our users will root their devices regardless of this, so we've written this guide for rooting with [Magisk](https://github.com/topjohnwu/Magisk).

If you have trouble rooting, you can try asking the [community](../community.md), but no support is guaranteed.

:::danger Data loss on newer devices

On the Pixel 4a 5G and newer devices, rooting requires disabling system verification, which will cause **data loss** if you have not already done so. Make sure you have a backup if you're planning to root for the first time.

:::

## Installing Magisk

Patching the boot and vbmeta images is the recommend way to root with Magisk.

### Download the boot and vbmeta images

The boot and vbmeta images are different for every device we support, so it's important that you download the correct ones:

- Early access releases: Individual images can be found on [early access release pages](https://protonaosp.kdrag0n.dev/versions/12.1.0#boot-and-vbmeta-images).
- Public releases: [Download the factory images](../getting-started/download.md#factory-images) and extract the inner images (e.g. `image-redfin-spp3.210325.010.zip`) to get `boot.img` and `vbmeta.img`.

Some devices also have a `vendor_boot.img` image. If you see this file, ignore it; `boot.img` is the only one you need for rooting.

### Install the Magisk app

Download and install the latest stable version of the Magisk app from [GitHub](https://github.com/topjohnwu/Magisk/releases).

If you have a Pixel 6 or 6 Pro, you will need to download and install the latest version of [Magisk Canary](https://github.com/topjohnwu/magisk-files/raw/canary/app-debug.apk) as the stable version doesn't support the Pixel 6 series yet.

### Patch the boot image

Follow the [official Magisk instructions](https://topjohnwu.github.io/Magisk/install.html#patching-images) to patch and flash the boot image.

### Disable verification

On the Pixel 4a 5G and newer devices, you also need to disable system integrity verification in order for the rooted boot image to work:

```bash
fastboot flash --disable-verity --disable-verification vbmeta vbmeta.img
```

If you see a "Cannot load Android system. Your data may be corrupt" error, make sure you didn't miss this step.

## Passing SafetyNet

ProtonAOSP passes SafetyNet out-of-the-box, but rooting will cause SafetyNet to fail again. To fix this, enable MagiskHide in the Magisk settings and add "Google Play Services" (specifically the `com.google.android.gms.unstable` process) to the list of hidden apps.

With Magisk Canary, the process is similar, but not identical. Instead, enable Zygisk and DenyList in the Magisk settings and restart your device. You can then use the following command to add Google Play Services to the DenyList:

```bash
adb shell magisk --denylist add com.google.android.gms com.google.android.gms.unstable
```
