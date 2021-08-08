---
sidebar_position: 4
slug: /verified-boot
---

# Verified boot

For security, it may be desirable to re-lock your bootloader after installing ProtonAOSP. This will make the bootloader and kernel enforce verified boot (AVB), which checks the integrity of the system to detect and defend against unauthorized changes.

Verified boot improves physical security and resistance to persistent attacks, just like Google's stock OS.

Keep in mind that locking the bootloader and enforcing verified boot are mutually exclusive with [rooting](rooting.md). Attempting to lock the bootloader when rooted will stop the device from booting, so you must pick one or the other.

## Locking the bootloader

:::danger

This will wipe all data stored on your device, so make sure you have a backup.

:::

To lock the bootloader, put your device in bootloader mode and run the following command on a computer with your device connected:

```bash
fastboot flashing lock
```

After locking the bootloader, you should see a warning that says "Your device is loading a different operating system" when booting your device. This is a sign that verified boot is working properly with ProtonAOSP.
