---
sidebar_position: 3
slug: /safetynet
---

# Passing SafetyNet

Unlike many custom ROMs, ProtonAOSP passes [Google’s SafetyNet attestation checks](https://developer.android.com/training/safetynet/attestation) out-of-the-box, so you don't need to do anything. However, don’t take it for granted -- Google could break it at any time. Unofficial operating systems rely on a variety of workarounds in order to pass SafetyNet, so it should not be expected to work forever.

## Modifications

Custom modifications, such as [rooting](rooting.md), often cause SafetyNet to fail. No modifications are officially supported and we would recommend removing them if possible. However, we recognize that many of our users will modify the system regardless of this.

If SafetyNet isn't passing with your changes, try these solutions:

- Enable MagiskHide
- Update to the latest version of Magisk
- Remove any problematic Magisk modules or other modifications

If none of the suggested solutions work, you can try asking the [community](../community.md), but no support is guaranteed. You are on your own if your changes continue to break SafetyNet.
