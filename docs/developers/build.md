---
sidebar_position: 2
---

# Build

You can build ProtonAOSP yourself, whether it's for adding changes to an officially-supported device or porting it to a new device.

## Requirements

You'll need a reasonably capable computer to avoid running into issues:

- 16+ GB of RAM
- 200+ GB of free SSD storage

## Prepare your system

Follow [Google's environment setup instructions](https://source.android.com/setup/build/initializing#setting-up-a-linux-build-environment) to prepare your Linux build environment for building Android.

You can only build on Linux. If you're on Windows or macOS, create a Linux virtual machine before proceeding.

Keep in mind that Android's shell setup script only supports `bash`. `zsh`, while somewhat similar, is not compatible.

## Download the source code

If you don't have the source code already, see [Download](./download) to get a copy before building.

## Create a device tree

If your device isn't officially supported by ProtonAOSP, you'll need to create a device tree that works with AOSP.

This is out-of-scope for our documentation, so you will need to seek other resources for help. Good luck!

### Qualcomm devices

On devices with a Qualcomm SoC, most device trees for other custom ROMs won't work with ProtonAOSP because they depend on open-source code from Qualcomm (CAF) that isn't part of AOSP. ProtonAOSP doesn't include most of the infrastructure necessary to build CAF parts, so you will need to adapt the device tree to work with pure AOSP.

### Google Pixel devices

Pixel devices are a special case because Google provides AOSP device trees that mostly work out-of-the-box. However, you still need to make some changes in order to get a satisfactory result. The ideal changes are device-specific, but you can use the [official device trees](./official-device-trees) as reference material for adapting other Pixel trees.

You can generally test Google's device trees with no modifications if you remove `json-c` from it, but your mileage may vary. Keep in mind that you need to prefix the device codename with `aosp_` when building with unmodified AOSP trees, e.g. `lunch aosp_coral-eng`.

## Build the OS

To compile a development (`eng`) build for debugging:

```bash
# Load shell helpers
source build/envsetup.sh
# Replace $DEVICE with your device's codename
lunch $DEVICE-eng
# Start the actual build
m
```

Once you're ready to use the build yourself or ship it to users, you can do a production (`user`) build:

```bash
lunch $DEVICE-user
m
```

### Google services

Run this command before building if you want to include Google services:

```bash
export WITH_GMS=true
```

## Flash the build

For quick testing, we recommend simply flashing the built images directly with fastboot. For example, on a device with dynamic partitions and boot image v3:

```bash
# Flash boot-critical partitions first
fastboot flash boot out/target/product/$DEVICE/boot.img
fastboot flash dtbo out/target/product/$DEVICE/dtbo.img
fastboot flash vendor_boot out/target/product/$DEVICE/vendor_boot.img
fastboot flash --disable-verity --disable-verification vbmeta out/target/product/$DEVICE/vbmeta.img

# Reboot to userspace fastbootd
fastboot reboot fastboot

# Flash the rest of the system
fastboot flash system out/target/product/$DEVICE/system.img
fastboot flash system_ext out/target/product/$DEVICE/system_ext.img
fastboot flash product out/target/product/$DEVICE/product.img
fastboot flash vendor out/target/product/$DEVICE/vendor.img
```

Make sure you wipe data before booting ProtonAOSP for the first time:

```bash
fastboot -w
```

## Packaging for release

Flashing the built images directly works for testing, but it's not very convenient for end users. You'll want to package them in a format that users can flash before releasing the build.

### Factory images

For Pixel devices, the most natural packaging format is factory images. This is how Google primarily distributes the stock OS. To build a package of factory images:

```bash
# Build target files package
m target-files-package
# Build packaging tools
m otatools-package
# Convert target files to images zip
python2 out/soong/host/linux-x86/bin/img_from_target_files \
    out/target/product/$DEVICE/obj/PACKAGING/target_files_intermediates/$DEVICE-target_files-eng.$USER.zip \
    out/target/product/$DEVICE/obj/PACKAGING/target_files_intermediates/$DEVICE-img-eng.$USER.zip
# Convert images zip to factory images
cd device/google/$DEVICE/factory-images
./generate-factory-images-package.sh
```

The factory images package can be found in `device/google/$DEVICE/factory-images`.

:::note

Some devices, such as the Pixel 4 series (coral and flame), name their factory images directory differently. For example:

```bash
cd device/google/coral/factory-images_flame
```

:::

### Full OTAs

The most common way to package custom ROMs is to build full OTA packages:

```bash
m otapackage
```

The flashable OTA package can be found in `out/target/product/$DEVICE`.
