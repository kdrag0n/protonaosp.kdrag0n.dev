---
sidebar_position: 50
---

# Theme

ProtonAOSP's default UI theme uses colors derived from GitHub's [Primer Design System](https://primer.style/css/support/color-system). The strong blue tint of Primer's dark theme doesn't tend to look good on phones, however, so we [removed the blue tint](https://github.com/ProtonAOSP/android_vendor_proton/commit/e58e316) from the theme using color science. The tint removal was done in the [Oklab](https://bottosson.github.io/posts/oklab/) perceptual color space, and [the script is open-source](https://github.com/ProtonAOSP/android_vendor_proton/blob/rvc/themes/untint_colors.py) for reference purposes.

Overlay commits for the current theme:

- [overlay: Switch to Primer UI color scheme](https://github.com/ProtonAOSP/android_vendor_proton/commit/f5f64a8)
- [overlay: Theme more floating UI elements](https://github.com/ProtonAOSP/android_vendor_proton/commit/b9f785b)
- [overlay: Remove blue tint from Primer colors](https://github.com/ProtonAOSP/android_vendor_proton/commit/e58e316)
- [overlay: Make dark QS background match normal background color](https://github.com/ProtonAOSP/android_vendor_proton/commit/e2a0e32)
- [overlay: Fix untinted Primer colors](https://github.com/ProtonAOSP/android_vendor_proton/commit/c82839d)
- [overlay: Enforce RRO for framework-res overlays](https://github.com/ProtonAOSP/android_vendor_proton/commit/1cd3ff9)
