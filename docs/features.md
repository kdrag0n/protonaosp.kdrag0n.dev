---
sidebar_position: 2
---

# Features

ProtonAOSP offers many improvements on the stock Android experience:

- Better performance and battery life
- Easy-to-use guided web installer
- Clean UI design
- Improved memory management
- Under-the-hood tweaks
- Privacy
- Convenience features
- Power user convenience
- Modern default settings

It also keeps what you're used to on stock:

- SafetyNet passing out-of-the-box without root
- Some Pixel-exclusive features

## Better performance & battery life

ProtonAOSP is more smooth (i.e. less jank) and responds faster than stock. The performance improvements can be attributed to:

- Vulkan UI rendering
- Reduced APEX overhead
- Deep, low-level system optimizations throughout the system

The performance improvements have been empirically proven on a Pixel 5:

- Up to 18% faster app/menu/screen opening
- 16% faster screenshot capturing
- Up to 4x faster low-level memory management
- Faster image loading and saving (JPEG and PNG)

## Easy-to-use guided web installer

ProtonAOSP is easier to install than most other custom ROMs. It features an [easy-to-use guided web installer](/install/web), so installation is just a few clicks and takes as little as 4 minutes (depending on the speed of your internet connection). You don't need to worry about using command-line interfaces, downloading tools, or bricking your device.

## Clean UI design

We pay attention to details in the user interface:

- Easy-to-read typography with [Inter](https://rsms.me/inter/), [Source Serif Pro](https://github.com/adobe-fonts/source-serif), and [Fira Code](https://github.com/tonsky/FiraCode)
- Light and dark colors derived from the [Primer Design System](https://primer.style/), modified in a perceptual color space
- Frosted glass blur in the notification shade, recent apps overview, and power menu
- Fewer distractions in the system
- Builtin wallpapers designed by Infinitum

## Improved memory management

You can keep more apps in memory, thanks to several memory management tweaks:

- Optimized memory pinning
- ART heap compaction
- Higher background app limit (helps devices with 8+ GB of RAM)

## Under-the-hood tweaks

Remember that annoying bug 

- Improved memory management: optimized pinning, ART heap compaction, more background apps
- Under-the-hood tweaks: better 5 GHz Wi-Fi signal retention, high-resolution recents overview, fixes for AOSP bugs, latest Chromium WebView
- Privacy: microG support, quick settings security, internet & sensor permissions, camera & microphone indicators, permission usage dashboard, minor hardening from GrapheneOS
- Convenience features: button to clear battery stats, call recording (where legal), machine-learning back gesture
- Power user convenience: memory usage in Settings, advanced settings expanded by default, command-line tools for developers (e.g. SSH)
- Usable default apps: clock, calculator, contacts, messaging, phone apps from LineageOS with custom UI tweaks
- Modern default settings: navigation, sounds, safe volume off, etc.
- SafetyNet passing out-of-the-box without root
- Pixel-exclusive features: Live Caption, Now Playing, Adaptive Sound, screen attention, adaptive 5G connectivity

## SafetyNet

Unlike many custom ROMs, ProtonAOSP passes Google's SafetyNet attestation out-of-the-box if you don't root it.
