---
layout: post
title: Vega
feature-img: assets/maya.png
img: assets/tools/vega.png
description: "The Doom Eternal Asset Extractor"
order: 2
date: 2024-02-24
---

# Vega - The Doom Eternal Asset Extractor
Extracts all assets from the game "Doom Eternal". This software was developed by [DTZxPorter](https://twitter.com/dtzxporter) & id-daemon.

## ❤️ Donate:
- I take time out of my day to make this happen.
- Show your support: [HERE](https://dtzxporter.com/donate)

## 💾 Download and version info:

> **IMPORTANT:** By downloading this software you are agreeing to the **EULA** located in the `About` tab of the program.

- Download (Windows x64): [Vega (v2.25)](https://mega.nz/file/hBoX2DYJ#GGNzEgD_1LTd-gkIZw2NztYOpx8nAtXYo-Rw2E2g_uM).
  - Windows 10+ officially supported.
  - Requires a CPU with SSE4.2 support.
- Download (Linux x64): [Vega (v2.25)](https://mega.nz/file/9ZYglbpK#Zljj1dL6c6IpUfnuk-or3gcRNoQ28kjFj5fGvtiG6-0).
  - Requires a CPU with SSE4.2 support.
- Download (macOS ARM): [Vega (v2.25)](https://mega.nz/file/gFBFTBBQ#RuqFq1EZ0zS5tQ8kYFMGZAXA4iphpXIICVj8PbRUQUU).

## ⚙️ Usage:
Read the new game tools tutorial: [Game Tool Tutorial](https://dtzxporter.com/game-tools-tutorial).

> **IMPORTANT:** Both the tool and the game **require** the entirety of the base folder to be intact and must not be modified in any way.

## Ripping:
- The **.resource** files contain various encoded assets that Vega can export; and, as of now the currently supported assets are:
  - Textures as [Dds, Png, Tiff]
  - Models as [Cast, SEModel, OBJ, XNALara, SMD, CoD XModel, Maya, Kaydara FBX].
  - Animations as [Cast, SEAnim].
  - Worlds as [Cast].
  - Raw Files as-is.

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
- 2.10 - Fixed issue exporting some textures that would cause an 'Error'. Fixed issue with some UVs on some static models. Added ability to preview models, materials, and images using 'P'.
- 2.11 - (Windows only): Fixed a crash that would happen when performing certain actions on the UI on windows.
- 2.12 - Performance improvements, automatically reload when changing the 'Load' settings. New loading indicator.
- 2.13 - Fixed issue with some materials 'Error'ing when exporting, missing their textures; also with models. Added option to hide the preview controls overlay. Added option to switch between Maya / Blender controls for the previewer. Drag & drop file load support.
- 2.14 - FBX files now include scales, bringing their rigs and weights 1:1 with other formats. Material assignment overhaul with better detection for which maps are which.
- 2.15 - Fixed an issue with certain DDS files failing to load.
- 2.16 - Added ability to toggle automatic asset scaling. Added support for sRGB tiff files.
- 2.17 - Update project library dependencies.
- 2.18 - Update program library for maya/smd weight fixes.
- 2.19 - Fixed texture linking issue due to last update.
- 2.20 - Support for exporting maps (worlds) with the new cast world specification.
- 2.21 - Support for exporting blend material textures, update program library to fix crashes, texture export performance.
- 2.22 - Update program library to fix ui bugs.
- 2.23 - Update program library for performance improvements.
- 2.24 - Add support for initial instanced world entities. Export inherited material textures.
- 2.25 - Update program library for ui tweaks, fixes, and performance. Fix some assets stuck exporting.