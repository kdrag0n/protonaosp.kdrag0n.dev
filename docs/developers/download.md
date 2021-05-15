---
sidebar_position: 1
---

# Download

ProtonAOSP is fully open-source [on GitHub](https://github.com/ProtonAOSP). You can download the source code using Google's [`repo`](https://source.android.com/setup/develop#installing-repo) tool. First, create a new folder:

```bash
mkdir protonaosp
cd protonaosp
```

Then initialize the folder and sync the source code:

```bash
repo init -u https://github.com/ProtonAOSP/android_manifest -b rvc
repo sync
```

This is a large download that will take approximately 100 GB of disk space, so plan accordingly.

If it's too slow and you have a fast internet connection, you can try downloading with multiple connections in parallel:

```bash
repo sync -j8
```

## Branches

- `rvc`: Android 11 (Red Velvet Cake)

## Building

See [Build](./build) for instructions to build the downloaded source code.
