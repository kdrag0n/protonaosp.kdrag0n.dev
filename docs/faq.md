---
sidebar_position: 30
---

# Frequently Asked Questions

If you have a question, please read or search this page before asking. It saves time for everyone — especially you.

**[You can also search for your question.](/search)**

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

Most Pixel-exclusive features are proprietary and thus cannot be added without tedious reverse engineering that takes away from development time. From the answer above:

> This includes:
>
> - New Google Assistant
> - Weather on the lock screen or ambient display
> - Now Playing song on the lock screen or ambient display
> - "Rules" automation in Settings
> - Pixel Launcher

### Where are the customization settings? {#customization-settings}

ProtonAOSP is **not** a customization-focused ROM. As such, it is unlikely that we will add any customization options. You may be better served by other ROMs if maximum customization is important to you.

### What features does ProtonAOSP have? {#what-features}

See [Features](discover/features.md) for an overview of ProtonAOSP's features.

### What Google apps are included? {#what-gapps}

Official "gapps" builds include a bare minimum set of apps for full functionality, and nothing more. This includes:

| App | Reason |
| --- | ------ |
| Google Play Services | Required for Google and third-party apps |
| Google Setup Wizard | Required for Google Play Services to work properly |
| Google Search | Required for Google Assistant hotword detection ("Ok Google" trigger) to work properly |
| Google Text-To-Speech | AOSP is missing a TTS implementation |
| Google Photos | AOSP Gallery is lacking in maintenance and functionality |
| Android Auto | Only works as a system app |
| Digital Wellbeing | Only works as a system app |
| Play Store | Allows downloading apps from Google Play |

We only include this set of apps and **will not add more** for size and privacy reasons. You can install more Google apps from the Play Store.

Call screening will not work in Google Dialer if you install it from the Play Store, but unfortunately, it won't be added to the system for size and privacy reasons. You can try [rooting](advanced/rooting.md) and "systemizing" the app if you still want the feature.

### Can you add more Google apps? {#more-gapps}

No. From the answer above:

> We only include this set of apps and **will not add more** for size and privacy reasons. You can install more Google apps from the Play Store.
>
> Call screening will not work in Google Dialer if you install it from the Play Store, but unfortunately, it won't be added to the system for size and privacy reasons. You can try [rooting](advanced/rooting.md) and "systemizing" the app if you still want the feature.

### Are hotspot and tethering supported? {#hotspot-support}

Yes, Wi-Fi hotspot and USB tethering both work on officially-supported devices. This includes hardware acceleration (via Qualcomm's IPA processor), just like Google's stock OS.

### Is battery life good on ProtonAOSP? {#battery-life}

Battery life is a highly personal thing that is different for each individual user, so we can't predict how good the battery life will be for you or how many hours of screen-on time you will get. We don't make tweaks specifically for battery life, but for most users, battery life is considerably better than Google's stock OS because of the reduced bloat and fewer background services.

## Updates

### When is the next update? {#eta}

ProtonAOSP is a free and open-source project, and anyone can use it for free. We are not obligated to release updates whenever you want them, and you are not entitled to them. **Be patient; updates will be released when they are ready.**

:::danger Asking for ETAs

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

### Will I lose root after updating? {#update-lose-root}

Yes, root will be lost after updating because the entire system gets replaced during the update process. You will need to [root again](advanced/rooting.md) after each update.

## Problems

### Why is SafetyNet failing? {#safetynet}

Google's SafetyNet attestation passes out-of-the-box, but it may fail if you've made changes to the system. See [Passing SafetyNet](advanced/safetynet.md) for more information.

### SIM Manager keeps stopping {#sim-manager-crashing}

This is caused by our support for eSIM on Pixel devices. Google's eSIM manager depends on Google Play Services, so if you installed the minimal version without subsequently installing microG, it will crash in the background.

You can fix this with any of the following solutions:

- Installing [Google services](advanced/google-services.md)
- Installing [Gcam Services Provider](https://github.com/lukaspieper/Gcam-Services-Provider)
- Disabling eSIM by running this command on a computer:
  ```bash
  adb shell pm uninstall --user 0 com.google.android.euicc
  ```

This will likely be fixed soon by disabling eSIM automatically in such cases.

### Carrier Services keeps stopping {#carrier-services-crashing}

This is the same underlying issue as "SIM Manager keeps stopping," which is answered above.

The solutions are the same -- you can fix this with any of the following:

- Installing [Google services](advanced/google-services.md)
- Installing [Gcam Services Provider](https://github.com/lukaspieper/Gcam-Services-Provider)
- Disabling Carrier Services by running this command on a computer:
  ```bash
  adb shell pm uninstall --user 0 com.google.android.ims
  ```

### RCS doesn't activate {#rcs}

RCS may fail to activate if you didn't deactivate it before installing ProtonAOSP by disabling "Enable chat features" in Google Messages. To fix the issue, disable it using [Google's online tool](https://messages.google.com/disable-chat) and try activating RCS again.

### Settings Services keeps stopping {#settings-services}

Settings Services is a proprietary Google app that only works on the stock Pixel OS. It's not part of ProtonAOSP, but you may have gotten it by restoring a Google backup from stock.

To fix this issue, uninstall "Settings Services" in Settings -> Apps -> All apps.

### Now Playing doesn't work {#now-playing-broken}

On Pixel devices, Now Playing will show the current song as a minimized notification, so check your notification shade. It's not on the lock screen or ambient display because those are [proprietary features](#missing-pixel-feature).

### Opening the notification shade is laggy {#laggy-notifications}

This is caused by the frosted glass blur effect that we use in the notification shade and quick settings, which may be laggy in certain heavy scenarios on some devices. You can choose to disable blur in Settings -> Developer options -> Enable blurs.

Our custom blur implementation is already considerably faster than Google's, although there is still more room for improvement.

### USB file transfer doesn't work {#usb-mode}

The persistent USB notifcation was intentionally removed because it adds to notification clutter and is not consistent with other settings. Instead, you can change the USB mode (MTP file transfer, tethering, etc.) in Settings -> Connected devices -> USB. This setting has not been moved or changed from stock.

### Google Pay isn't in the power menu {#quick-wallet-broken}

Google Pay integration in the power menu is a part of Google Play Services. Unfortunately, it tends to be unreliable to register on new installs, even on Google's stock OS. Your best bet is to wait a few days for Google Play Services to register the integration.

### Text selection is missing in Recents {#recents-text-selection}

Text selection in the recents overview is a [proprietary Pixel feature](#missing-pixel-feature), so it will not be added until we have a custom implementation.

However, if you are [rooted](advanced/rooting.md), you can install [Pixel Launcher](https://www.apkmirror.com/apk/google-inc/pixel-launcher/pixel-launcher-11-release/pixel-launcher-11-6-android-apk-download/) manually and use [QuickSwitch](https://github.com/skittles9823/QuickSwitch/releases) to enable full functionality. This will make recents text selection work at the cost of losing ProtonAOSP's launcher changes.

### I found a bug {#bug}

Please check all the other [problems](#problems) to make sure it isn't already covered. If you're sure that it's a new bug, see [Community](community.md) for ways to report it.

## Visuals

### Is there a black theme? {#black-theme}

Unlike Google's stock OS, the dark theme is dark gray instead of pure ("AMOLED") black. This is because black themes have many problems from a design standpoint:

- A black background makes it impossible to express elevation via shadows.
- On OLED displays, the overly high contrast of white-on-black text is harsh on the eyes for some people.
- On AMOLED displays, black smearing is a major problem at low brightness.

ProtonAOSP uses a dark gray theme based on the [Primer Design System](https://primer.style/) to avoid these problems. However, we recognize that some people prefer black themes despite their shortcomings, so **a pure black theme may become available in the future**.

If you want a black theme purely to save power, take a look at [XDA's analysis](https://www.xda-developers.com/amoled-black-vs-gray-dark-mode/). Black saves a marginal amount of power compared to dark gray themes according to the tests — not enough to make a practical difference.

### Where can I get the wallpapers? {#wallpapers}

All bundled wallpapers can be found in Settings -> Display -> Styles & wallpapers.

If you like the wallpapers and want to use them outside of ProtonAOSP, see [Wallpapers](developers/details/wallpapers.md) for other ways to get them.

### What does ProtonAOSP look like? {#screenshots}

See [Screenshots](discover/screenshots.mdx) for a taste of ProtonAOSP without installing it yourself.

## Privacy & security {#privacy-and-security}

### Is ProtonAOSP good for privacy? {#how-private}

ProtonAOSP is **not** a privacy-focused ROM. It has more [privacy-related features](discover/features.md#privacy) than most ROMs, but privacy is not its core focus. You may be better served by other ROMs if maximum privacy is important to you.

### Is ProtonAOSP secure? {#how-secure}

In general, ProtonAOSP is just as secure as Google's stock OS, including signing with private keys and verified boot (AVB). You can optionally re-lock the bootloader after installing ProtonAOSP in order to use verified boot and benefit from improved physical security, as well as resistance against persistent attacks.

However, ProtonAOSP is **not** a security-focused ROM. It has some [minor security features](discover/features.md#privacy), but security is not its core focus. You may be better served by other ROMs if maximum security is important to you.

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
