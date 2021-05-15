---
sidebar_position: 2
slug: /features
---

# Features

ProtonAOSP offers many improvements on the stock Android experience:

- Better performance and battery life
- Clean UI design
- Improved memory management
- Under-the-hood tweaks
- Privacy
- Convenience
- Modern default settings

It also keeps what you're used to on stock:

- SafetyNet passing out-of-the-box without root
- Some Pixel-exclusive features

## Better performance & battery life {#performance-and-battery}

ProtonAOSP is more smooth (i.e. less jank) and responds faster than stock. The performance improvements can be attributed to:

- Vulkan UI rendering
- Reduced APEX overhead
- Deep, low-level system optimizations throughout the system

The performance improvements have been empirically proven on a Pixel 5:

- Up to 18% faster app/menu/screen opening
- 16% faster screenshot capturing
- Up to 4x faster low-level memory management
- Faster image loading and saving (JPEG and PNG)

## Clean UI design {#ui}

We pay attention to details in the user interface:

- Easy-to-read typography with [Inter](https://rsms.me/inter/), [Source Serif Pro](https://github.com/adobe-fonts/source-serif), and [Fira Code](https://github.com/tonsky/FiraCode)
- Light and dark colors derived from the [Primer Design System](https://primer.style/), modified in a perceptual color space
- Frosted glass blur in the notification shade, recent apps overview, and power menu
- Fewer distractions in the system
- Builtin wallpapers designed by Infinitum

## Improved memory management {#memory}

You can keep more apps in memory, thanks to several memory management tweaks:

- Optimized memory pinning
- ART heap compaction
- Higher background app limit (helps devices with 8+ GB of RAM)

## Under-the-hood tweaks {#tweaks}

- Better 5 GHz Wi-Fi signal retention
- High-resolution recents overview
- Fixes for some AOSP bugs
- Latest Chromium WebView

## Privacy

- Support for microG
- Secure quick settings
- Internet & sensor permissions
- Camera and microphone usage indicators
- Permission usage dashboard
- Minor hardening from GrapheneOS

## Convenience

- Clear battery usage stats on demand
- Call recording (where legal)
- AI-powered back gesture
- Memory usage in Settings
- Advanced settings expanded by default
- Command-line tools for developers (e.g. SSH)

## SafetyNet

Unlike many custom ROMs, ProtonAOSP passes Google's SafetyNet attestation out-of-the-box if you don't root it. However, don't take this for granted — Google could break it at any time. Unofficial operating systems rely on a variety of workarounds in order to pass SafetyNet, so it should not be expected to work forever.

## Easy-to-use guided web installer {#web-installer}

ProtonAOSP is easier to install than most other custom ROMs. It has an [easy-to-use guided web installer](getting-started/install/web.mdx), so installation is just a few clicks and takes as little as 4 minutes (depending on the speed of your internet connection). You don't need to worry about using command-line interfaces, downloading tools, or bricking your device.

## Pixel-exclusive features {#pixel-exclusive}

Not all Pixel-exclusive features are included due to their proprietary nature, but some of them are available:

- Live Caption
- Now Playing
- Screen attention (Pixel 4+)
- Adaptive 5G connectivity (Pixel 5+)
- Adaptive Sound (Pixel 5)

## Device-specific features {#device-specific}

Some devices have additional features.

### Pixel 2, Pixel 2 XL

- Customizable Active Edge implementation
- Option to disable camera laser focus in Settings

### Pixel 4, Pixel 4 XL

- Customizable Active Edge implementation
