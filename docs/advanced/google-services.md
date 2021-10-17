---
sidebar_position: 2
slug: /gapps
---

# Google services

Many popular apps rely on Google apps and services, such as Google Play Services and Play Store. Below are several ways to make such apps work on ProtonAOSP.

## Bundled

You can download official builds of ProtonAOSP with essential Google apps and services included. This is the easiest option, since Play Services functionality is essentially guaranteed to work and most code runs as intended by Google.

Keep in mind that is less privacy-friendly than other options because bundled Google apps will get a large amount of special privileges and permissions, as well as exceptions to the app sandbox.

## Compatibility layer

For additional privacy and security, ProtonAOSP has a compatibility layer that allows installing official Google apps as regular, unprivileged apps in the standard app sandbox. This allows most functionality to work without giving Google Play Services any special privileges, permissions, or security exceptions, including:

- Account login (including two-factor authentication with NFC security keys)
- Play Store
- Firebase Cloud Messaging notifications (tested with Signal, Discord, Slack, and Gmail)
- Firebase database API (tested with Swift Backup)
- Firebase app indexing
- Google Play Games
- Account settings
- Google My Account
- Autofill
- SMS verification receiver (tested with Signal)
- Play license verification (both in-app purchases and paid apps)
- Play Store app purchases
- Play Store app installation (buggy)
- SafetyNet (basic integrity passes, but not CTS profile checks)
- Dynamite modules (e.g. Maps API v2 and Cronet)
- Play geolocation API (buggy)

With this method, you can use the vast majority of apps without giving Play Services special privileges or compromising privacy. You can also choose to install Google Play Services in a secondary user and use it exclusively for apps that have a hard dependency on it.

### Install Play Services

To use the Google Play Services compatibility layer, download and install the following Google apps from [GrapheneOS' mirror](https://apps.grapheneos.org/packages/) in the following order:

1. Google Services Framework (`com.google.android.gsf`)
2. Google Play Services (`com.google.android.gms`)
3. Google Play Store (`com.android.vending`; this app includes multiple APK files, so use a split APK installer such as [SAI](https://github.com/Aefyr/SAI/releases/tag/4.5))

After installation, open Play Store and tap "Sign in" to initialize Google services. You don't actually need to sign in; the app can safely be closed after this step.

## microG

ProtonAOSP also includes support for [microG](https://microg.org/), a free and open-source implementation of some Play Services APIs. Many APIs commonly used by apps are implemented, but you may also run into occasional compatibility issues and missing functionality. However, this may be a good option if you're looking for maximum privacy.

### Install microG

To use microG, simply download the microG apps from the official website (or use the F-Droid repository) and follow the in-app instructions.
