---
sidebar_position: 1
slug: /root
---

# Rooting

ProtonAOSP is designed for a good user experience out-of-the-box, without requiring modifications or any other changes. We do not officially support rooting or any modifications to the system because they are prone to breakage and tend to cause issues. Rooting, in particular, weakens the security of your device and is often the source of many issues. However, we recognize that many of our users will root their devices regardless of this, so we've put together a guide for rooting with [Magisk](https://github.com/topjohnwu/Magisk).

If you have trouble rooting, you can try asking the [community](../community.md), but no support is guaranteed.

## Boot image (recommended)

Patching the boot image is the recommend way to root with Magisk.

### Download the boot image

The boot image is different for every device we support, so it's important that you download the correct one. You can get the boot image (`boot.img`) by [downloading factory images](../getting-started/download.md#factory-images) and extracting the inner images (e.g. `image-redfin-spp3.210325.010.zip`).

Some devices also have a `vendor_boot.img` image. If you see this file, ignore it; `boot.img` is always the correct one to use.

### Patch the boot image

Follow the [official Magisk instructions](https://topjohnwu.github.io/Magisk/install.html#patching-images) to patch and flash the boot image.

## Custom recovery

On devices with a custom recovery that works well, such as [TWRP](https://twrp.me) for the Pixel 2 series, it can be easier to install Magisk by flashing it in the custom recovery:

1. [Download and boot a custom recovery](../getting-started/install/manual.mdx#download-a-custom-recovery)
2. [Download the latest version of Magisk](https://github.com/topjohnwu/Magisk/releases)
3. `adb sideload Magisk-v23.0.apk`
