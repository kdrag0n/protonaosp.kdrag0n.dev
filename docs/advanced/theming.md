---
slug: /advanced/theme
sidebar_position: 5
---

# Theming

ProtonAOSP includes a dynamic wallpaper-based theme engine, different from Google's implementation for Pixel devices. It works automatically in the background and themes the system to match your wallpaper, but you can also customize it to make everything look the way you want it to.

While theming options have not been added to the Settings or Wallpaper & style apps yet, you can use the following commands to change the hidden settings manually:

- Colorfulness: `adb shell settings put secure monet_engine_chroma_factor 1.5` (default: 1.0)
- Inaccurate shades: `adb shell settings put secure monet_engine_accurate_shades 0` (default: 1)
- Color override: `adb shell settings put secure monet_engine_color_override ff0000` (remove the `#` from your color code)

Advanced settings:

- Enable custom brightness scale: `adb shell settings put secure monet_engine_linear_lightness 1` (default: 0)
- Set custom brightness: `adb shell settings put secure monet_engine_white_luminance_user 500` (default: 425, range: 0 to 1000)

To reset the color override and revert to wallpaper colors:

```bash
adb shell settings delete secure monet_engine_color_override
```

Restart your device to apply changes to the theme engine settings. If you're rooted, you can also reload changes immediately by running the following command:

```bash
adb shell su -c am crash com.android.systemui
```
