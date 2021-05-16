---
sidebar_position: 1
# Simple path for compatibility with old /install/web path
slug: /install
---

# Installation

There are multiple ways to install ProtonAOSP on supported devices. We recommend using the [web installer](web.mdx) for a quick and easy installation process. It takes as little as 4 minutes, depending on the speed of your internet connection.

## [Web installer (recommended)](web.mdx) {#web}

This is the recommended method. It's fast, easy, and won't brick your phone. [Install now](web.mdx)

### Common misconceptions {#web-installer-misconceptions}

People often avoid the web installer due to some common misconceptions, even though there are no such problems. If anything goes wrong, retrying the installation will fix almost all problems. Please read the explanations below before disregarding the web installer.

#### It could brick my phone {#web-misconception-brick}

The web installer is extremely unlikely to brick a device permanently. Soft bricks are possible if the installation is interrupted, and the installer will tell you how to fix it if this happens. In a worst-case scenario, you can use Google's [Android Flash Tool](https://flash.android.com/) to restore everything back to the factory state and try again.

Almost all the soft bricks we've seen are caused by users doing something wrong in the admittedly complicated flashing process. This is much less likely when everything is automated, so using the web installer is actually safer than flashing manually. In fact, this is one of the reasons the web installer was created.

For example, you could accidentally download the wrong build for your device model and flash it manually, which could result in a brick. The web installer makes it impossible to install the wrong build because it downloads builds based on the actual model of your device.

#### I have bad internet {#web-misconception-internet}

The web installer can handle downloading from slow networks. It waits for the entire download to complete before flashing anything, so if the download is interrupted, your phone won't be affected at all. You can simply try downloading again until it works.

#### My USB cable or port is flaky {#web-misconception-cable}

If your phone disconnects during the installation, the installer will stop and tell you how to fix it. Your phone **will not be permanently bricked** due to how the flashing protocol works. Each part of the system is sent to the phone in full *before* flashing, so if it disconnects in the middle of a transfer, nothing will break. Once the actual flashing process starts, it continues independent of the USB connection.

We've intentionally unplugged phones in the middle of installation and flashed with bad cables countless times while developing the installer, and no devices were ever bricked.

#### It's a security risk {#web-misconception-security}

In terms of security, there is little difference between flashing manually and using the web installer because you're trusting us (as the developer) regardless of how you install it. This would be different if we sign builds with GPG and distribute the key out-of-band, but we don't currently do either of these.

If your computer is infected with malware, it can tamper with manual installation as well, so the web installer isn't at a disadvantage. In fact, the web installer mitigates the risk of you accidentally downloading and flashing with malicious tools.

Other websites can't interfere with the web installer due to the browser sandbox and other security features in modern browsers.

## [Manual installation](manual.mdx) {#manual}

You can also install ProtonAOSP manually if you have special requirements or prefer using the command line. This could brick your phone if you mess up, so be careful! [Install manually](manual.mdx)
