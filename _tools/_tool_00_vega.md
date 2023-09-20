---
layout: post
title: Vega
feature-img: assets/maya.png
img: assets/tools/vega.png
description: "The Doom Eternal Asset Extractor"
date: 2023-09-20
---

# Vega - The Doom Eternal Asset Extractor
Extracts various assets from the game "Doom Eternal". This software was developed by [DTZxPorter](https://twitter.com/dtzxporter) & id-daemon.

## ❤️ Donate:
- I take time out of my day to make this happen.
- Show your support: [HERE](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=686S5QL7Z4HKQ)

## 💾 Download and version info:

> **IMPORTANT:** By downloading this software you are agreeing to the **EULA** located in the `About` tab of the program.

- Download (Windows x64): [Vega (v2.01)](https://mega.nz/file/oFg12IbA#E2ZE0sMz86vpOALDFXcj35Z4F-YwxNxNy1HTNvj8n6c).
- Download (Linux x64): [Vega (v2.01)](https://mega.nz/file/5YxkSTYb#ZhfhCPI4bwthneAk4_T6SLCOWJpd68Snn_NQvUWWorA).
- Download (macOS ARM): [Vega (v2.01)](https://mega.nz/file/YFRjwTZI#3Jm9BNJPXDfy99iuO749MleO0a_66fgPrgoS_CpMZww).

## ⚙️ Usage:
Using Vega is fairly simple as the tool only requires the files located within "base" in order to function.

- The tool features a user interface, just open up a resource file using `Load File`

> **IMPORTANT:** Both the tool and the game **require** the entirety of the base folder to be intact and must not be modified in any way.

## Ripping:
- The **.resource** files contain various encoded assets that Vega can export; and, as of now the currently supported assets are:
  - Textures as [Dds, Png, Tiff]
  - Models as [SEModel, OBJ, XNALara, SMD, CoD XModel, Maya, Kaydara FBX, Cast].
  - Animations as [SEAnim, Cast].

> **NOTICE:** You should select all `_patchX` .resource files in order to export assets properly. Order doesn't matter.

## 📌 Versioning:
- 1.00 - Initial Release (BETA).
- 1.01 - Fixed FBX/XNALara files. Fix for some skinned models not exporting. `gameresources.resources` is now loaded REGARDLESS of the package you select.
- 1.10 - Animation export support.
- 1.11 - Fixed crash on export of some assets.
- 1.20 - Better support for static models. Added support for UV Layer 2 (Only supported in SEModel/Cast Models) for static models.
- 1.30 - Fixed various export crashes with DLC aassets, Add support for previewing textured mode (ColorMap only).
- 2.00 - Completely rewritten, cross platform. Fixes for various models, animations, textures failing to export, better FBX support, and more.
- 2.01 - Animations are properly marked as looping/additive. Fix for single channel images writing as full RGBA. Fix text overflow. Add progress text over progress bar. Add "Exporting..." status for assets.