---
sidebar_position: 40
---

# Wallpapers

ProtonAOSP bundles wallpapers in the "Styles & wallpapers" app. Unlike most custom ROMs, however, we bundle wallpapers with category grouping, titles, attribution, and links to the sources -- just like Google's Pixel OS. See [Screenshots](discover/screenshots.mdx#wallpapers) for details.

Instead of adding system-static wallpapers as files, our [wallpaper stub package](https://github.com/ProtonAOSP/android_packages_apps_ProtonWallpaperStub) makes this rich metadata possible.

## Integration commits

### WallpaperPicker2

- [WallpaperPicker2: Don't publish placeholder categories](https://github.com/ProtonAOSP/android_packages_apps_ProtonWallpaperStub/commit/29d7d02)
- [WallpaperPicker2: Fix race condition for fast-loading wallpapers](https://github.com/ProtonAOSP/android_packages_apps_ProtonWallpaperStub/commit/6fc7268)
- [WallpaperPicker2: Merge code review updates for race condition fix](https://github.com/ProtonAOSP/android_packages_apps_ProtonWallpaperStub/commit/822cdbb)

## Vendor

- [apps: Build custom wallpaper stub](https://github.com/ProtonAOSP/android_vendor_proton/commit/e612f4e)
