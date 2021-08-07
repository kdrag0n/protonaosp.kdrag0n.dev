---
sidebar_position: 20
slug: /features
---

# Features

ProtonAOSP offers many improvements on the stock Android experience:

- Better performance
- Clean UI design
- Improved memory management
- Under-the-hood tweaks
- Privacy
- Convenience
- Customization
- Default experience

It also keeps what you're used to on stock:

- SafetyNet passing out-of-the-box without root
- Some Pixel-exclusive features

## Better performance {#performance}

ProtonAOSP is more smooth (i.e. less jank) and responds faster than stock. The performance improvements can be attributed to:

- Vulkan UI rendering
- Reduced APEX overhead
- Deep, low-level system optimizations throughout the system

The performance improvements have been empirically proven on a Pixel 5:

- Up to 18% faster app/menu/screen opening
- 16% faster screenshot capturing
- Up to 4x faster low-level memory management
- Faster image loading and saving (JPEG and PNG)

See [Performance](../developers/details/performance.md) for technical details.

## Clean UI design {#ui}

We pay attention to details in the user interface:

- Easy-to-read typography with [Inter](https://rsms.me/inter/), [Source Serif Pro](https://github.com/adobe-fonts/source-serif), and [Fira Code](https://github.com/tonsky/FiraCode)
- Light and dark colors derived from the [Primer Design System](https://primer.style/) and modified in a perceptual color space
- Frosted glass blur with state-of-the-art rendering techniques
- Fewer distractions in the system
- [Higher-quality Night Light](screenshots.mdx#night-light-improvements) and Ambient EQ using modern color science
- Gradual, less jarring transitions when turning Night Light on/off
- Builtin wallpapers designed by Infinitum

See [Theme](../developers/details/theme.md) for more details about the color scheme.

## Improved memory management {#memory}

You can keep more apps in memory, thanks to several memory management tweaks:

- Optimized memory pinning
- ART heap compaction
- Higher background app limit (helps devices with 8+ GB of RAM)

## Under-the-hood tweaks {#tweaks}

We've fixed some minor bugs from Google's stock OS:

- Better 5 GHz Wi-Fi signal retention
- High-resolution recents overview
- Fixes for some AOSP bugs
- Latest Chromium WebView

## Privacy

ProtonAOSP is not specifically dedicated to improving privacy or security, but it still has some features to help keep your data private:

- [Support for microG and sandboxed Google Play Services](../advanced/google-services.md)
- Secure quick settings
- Internet & sensor permissions
- Camera and microphone usage indicators
- Permission usage dashboard
- Minor hardening from GrapheneOS

## Convenience

We also have a few assorted features for your convenience:

- Clear battery usage stats on demand
- Call recording (where legal with one-party consent)
- AI-powered back gesture
- Adaptive brightness toggle in quick settings
- Memory usage in Settings
- Advanced settings expanded by default
- Command-line tools for developers

## Customization

While ProtonAOSP isn't focused on customization, it still offers more choices than stock:

- Status bar icon and clock settings
- System-wide font styles (also affects third-party apps)
- Display color balance adjustment (red, green, and blue)

Check the [screenshots](screenshots.mdx#customization) for more details.

## Default experience {#defaults}

The out-of-the-box experience is made to fit your needs:

- Modern default settings
- Material ringtone, alarm, and notification sounds
- Plasma Mobile sounds
- 2D and photo wallpapers

## SafetyNet

Unlike many custom ROMs, ProtonAOSP passes [Google’s SafetyNet attestation checks](https://developer.android.com/training/safetynet/attestation) out-of-the-box, so you don't need to do anything. However, don’t take it for granted -- Google could break it at any time. Unofficial operating systems rely on a variety of workarounds in order to pass SafetyNet, so it should not be expected to work forever.

See [Passing SafetyNet](../advanced/safetynet.md) for more information, and [SafetyNet](../developers/details/safetynet.md) for technical details.

## Easy-to-use guided web installer {#web-installer}

ProtonAOSP is easier to install than most other custom ROMs. It has an [easy-to-use guided web installer](getting-started/install/web.mdx), so installation is just a few clicks and takes as little as 4 minutes (depending on the speed of your internet connection). You don't need to worry about using command-line interfaces, downloading tools, or bricking your device.

## Pixel-exclusive features {#pixel-exclusive}

Not all Pixel-exclusive features are included due to their proprietary nature, but some of them are available:

- Live Caption
- Now Playing
- Screen attention (Pixel 4 and newer)
- Adaptive 5G connectivity (Pixel 5 and newer)
- Adaptive Sound (Pixel 5)
- Increased touch sensitivity (Pixel 4 and newer)

## Device-specific features {#device-specific}

Some devices have additional features.

### Pixel 2, Pixel 2 XL {#device-specific-pixel2}

- Customizable Active Edge implementation
- Option to disable camera laser focus in Settings

### Pixel 4, Pixel 4 XL {#device-specific-pixel4}

- Customizable Active Edge implementation
