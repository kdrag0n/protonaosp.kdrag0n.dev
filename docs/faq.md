---
sidebar_position: 30
---

# Frequently Asked Questions

If you have a question, please read or search this page before asking. It saves time for everyone -- especially you.

## Features

### Can you add feature X? {#add-feature}

You can suggest it, but it's unlikely that we'll add it unless we find it particularly useful.

Examples of features that will not be added, because they are proprietary and cannot legally be used in ProtonAOSP without tedious reverse engineering that takes away from development time:

- New Google Assistant
- Weather on the lock screen or ambient display
- Now Playing song on the lock screen or ambient display
- "Rules" automation in Settings
- Pixel Launcher

It is also **very unlikely** that we will add customization features, as this is not a customization-focused ROM.

### Why is this Pixel feature missing? {#missing-pixel-feature}

Most Pixel-exclusive features are proprietary and thus cannot be added without tedius reverse engineering that takes away from development time. This includes:

- New Google Assistant
- Weather on the lock screen or ambient display
- Now Playing song on the lock screen or ambient display
- "Rules" automation in Settings
- Pixel Launcher

### Where are the customization settings? {#customization-settings}

ProtonAOSP is **not** a customization-focused ROM. As such, it is unlikely that we will add any customization options. You may be better served by other ROMs if maximum customization is important to you.

### What features does ProtonAOSP have? {#what-features}

See [Features](discover/features.md) for an overview of ProtonAOSP's features.

## Updates

### When is the next update? {#eta}

ProtonAOSP is a free and open-source project, and anyone can use it for free. We are not obligated to release updates whenever you want them, and you are not entitled to them. **Be patient; updates will be released when they are ready.**

:::danger

Repeatedly asking for updates ("ETAs") through the use of euphemisms in the [community](community.md), such as "Is there an update coming soon?" will not be tolerated.

:::

### Will I get automatic updates? {#ota-updates}

No, ProtonAOSP does not have automatic over-the-air (OTA) updates, but it is possible that they will be added in the future. In the meantime, we recommend using the [web installer](getting-started/install/web.mdx) for quick and easy updates in under 4 minutes.

### Where are the old versions? {#old-versions}

You can find all versions of ProtonAOSP under **Versions** in the sidebar (floating menu button on mobile).

### Can I update without wiping data? {#dirty-flash}

Yes, you can update to a newer version of ProtonAOSP while keeping all your data. It is not necessary to "clean flash" or wipe data when upgrading.

### Can I downgrade to an older version? {#downgrade}

We don't recommend using old versions of ProtonAOSP, but you can safely downgrade to an older version without losing data.

## Problems

### Why is SafetyNet failing? {#safetynet}

Google's SafetyNet attestation passes out-of-the-box, but it may fail if you've made changes to the system. See [Passing SafetyNet](advanced/safetynet.md) for more information.

### SIM Manager keeps stopping {#sim-manager-crashing}

This is caused by our support for eSIM on Pixel devices. Google's eSIM manager depends on Google Play Services, so if you installed the minimal version without subsequently installing microG, it will crash in the background.

You can fix this with any of the following solutions:

- Installing [microG](https://microg.org/)
- Installing [Gcam Services Provider](https://github.com/lukaspieper/Gcam-Services-Provider)
- Disabling eSIM by running this command on a computer:
  ```bash
  adb shell pm uninstall --user 0 com.google.android.euicc
  ```

This will likely be fixed soon by disabling eSIM automatically in such cases.

### Carrier Services keeps stopping {#carrier-services-crashing}

This is the same underlying issue as "SIM Manager keeps stopping," which is answered above.

The solutions are the same -- you can fix this with any of the following:

- Installing [microG](https://microg.org/)
- Installing [Gcam Services Provider](https://github.com/lukaspieper/Gcam-Services-Provider)
- Disabling Carrier Services by running this command on a computer:
  ```bash
  adb shell pm uninstall --user 0 com.google.android.ims
  ```

### Now Playing doesn't work {#now-playing-broken}

On Pixel devices, Now Playing will show the current song as a minimized notification, so check your notification shade. It's not on the lock screen or ambient display because those are [proprietary features](#missing-pixel-feature).

### Opening the notification shade is laggy {#laggy-notifications}

This is caused by the frosted glass blur effect that we use in the notification shade and quick settings, which may be laggy in certain heavy scenarios on some devices. You can choose to disable blur in Settings -> Developer options -> Enable blurs.

Our custom blur implementation is already [considerably faster](developers/details/blur.md) than Google's, but there is still more room for improvement. These improvements will most likely be added in future versions of ProtonAOSP.

### I found a bug {#bug}

Please check all the other [problems](#problems) to make sure it isn't already covered. If you're sure that it's a new bug, see [Community](community.md) for ways to report it.

## Visuals

### Is there a black theme? {#black-theme}

Unlike Google's stock OS, the dark theme is dark gray instead of pure ("AMOLED") black. This is because black themes have many problems from a design standpoint:

- A black background makes it impossible to express elevation via shadows.
- On OLED displays, the overly high contrast of white-on-black text is harsh on the eyes for some people.
- On AMOLED displays, black smearing is a major problem at low brightness.

However, we recognize that some people prefer black themes despite their shortcomings, so **a pure black theme may become available in the future**.

### Where can I get the wallpapers? {#wallpapers}

All bundled wallpapers can be found in Settings -> Display -> Styles & wallpapers.

If you like the wallpapers and want to use them outside of ProtonAOSP, see [Wallpapers](developers/details/wallpapers.md) for other ways to get them.

### What does ProtonAOSP look like? {#screenshots}

See [Screenshots](discover/screenshots.mdx) to get a taste of ProtonAOSP without installing it yourself.

## Privacy & security {#privacy-and-security}

### Is ProtonAOSP good for privacy? {#how-private}

ProtonAOSP is **not** a privacy-focused ROM. It has more [privacy-related features](discover/features.md#privacy) than most ROMs, but privacy is not its core focus. You may be better served by other ROMs if maximum privacy is important to you.

### Is ProtonAOSP secure? {#how-secure}

In general, ProtonAOSP has the same security as Google's stock OS, except for verified boot. You can't lock the bootloader on ProtonAOSP because it wasn't originally designed to support that, and adding support now would force all existing users to wipe their data. We will most likely add support for verified boot when upgrading to Android 12. In the meantime, physical security is weakened as compared to stock, so keep this in mind if you're looking for security.

ProtonAOSP is **not** a security-focused ROM. It has some [minor security features](discover/features.md#privacy), but security is not its core focus. You may be better served by other ROMs if maximum security is important to you.

### Is the web installer bad for security? {#web-installer-security}

No, the web installer is just as safe and secure as manual installation in most cases. See [Common misconceptions](getting-started/install/install.md#web-installer-misconceptions) for more information.

## Advanced

### How do I root ProtonAOSP? {#rooting}

Rooting is not officially supported; root at your own risk. See [Rooting](advanced/rooting.md) for more information.

## Miscellaneous {#misc}

### How can I support the project? {#support}

We're glad you like it! See [Donate](donate.md) for ways to support us financially.

If you can't donate, that's okay! You can still help us by spreading the word about ProtonAOSP and [joining the community](community.md). Sharing positivity goes a long way.

### Where's the proof for your claims? {#proof-claims}

ProtonAOSP is an open-source project, so anyone can [download the source code](developers/download.md) and verify our claims.

Our performance claims are the result of empirically testing the changes we make -- we do not simply make up numbers. The official performance numbers are from a Pixel 5 running a pre-release build of ProtonAOSP 11.4.0. See [Performance](developers/details/performance.md) for more information, including the technical details of our changes.

### I don't like ProtonAOSP

We strive to build a high-quality product, but we realize that nothing is perfect for everyone. You may be better served by other ROMs in that case.

However you choose to proceed, please refrain from complaining frequently and posting negative comments about ProtonAOSP. It wastes everyone's time, including yours.
