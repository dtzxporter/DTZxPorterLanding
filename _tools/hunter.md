---
layout: post
title: Hunter
feature-img: assets/maya.jpg
thumbnail: assets/tools/hunter.png
description: "The TD, TD2, AFOP, XDEF, SWOL Asset Extractor"
order: 0
date: 2025-12-09
---

# Hunter - The TD, TD2, AFOP, XDEF, SWOL Asset Extractor
Extracts all assets from the games "The Division", "The Division 2", "Avatar Frontiers of Pandora", "XDefiant", and "Star Wars Outlaws". This software was developed by [DTZxPorter](https://twitter.com/dtzxporter).

## ❤️ Donate:
- I take time out of my day to make this happen.
- Show your support: [HERE](https://dtzxporter.com/donate)

## 💾 Download and version info:

> **IMPORTANT:** This software comes with no warranty what so ever. Use at your own risk.

- Download (Windows x64): [Hunter (v2.21)](https://mega.nz/file/pdI2TSpa#l879BU116rOx8OX3gpxbk2KZtf2rzWWKzvfaHzEP9KU).
  - Windows 10+ officially supported.

## 👉 Usage:
Read the new game tools tutorial: [Game Tool Tutorial](https://dtzxporter.com/game-tools-tutorial).

> **IMPORTANT:** Both the tool and the game **require** the entirety of the rogue/hunter folder to be intact and must not be modified in any way.

## ⚙️ Ripping:
- The **.sdftoc** files contain various encoded assets that Hunter can export; and, as of now the currently supported assets are:
  - Textures as [Dds, Png, Tiff, Tga]
  - Models as [Cast, OBJ, XNALara, SMD, CoD XModel, Maya, FBX].
  - Animations as [Cast].
  - Raw Files as-is.
    - Hunter will decompile binary graph objects to their 'light' text format on export.

> **NOTE:** This tool only exports assets as-is, without attempting to link models to their materials because not all games actually use materials for asset. The game uses complex scene graphs which would require too much effort to automate, however, most of a model's textures have similar names to each other. It's very easy to locate the textures for a model yourself.

> **NOTE:** There is no need to open the `sdf_streaming` toc file, as it only references assets in the main toc file.

## 📌 Versioning:
- 2.21 - Update program library for bug fixes and improvements.
- 2.20 - Update program library to fix a TGA export bug.
- 2.19 - Update program library for bug fixes.
- 2.18 - Update program library for bug fixes and improvements.
- 2.17 - Update program library for ui improvements.
- 2.16 - Support for a handful of unsupported models from TD1/2 and XDEF.
- 2.15 - Support for a handful of unsupported animations from TD1.
- 2.14 - Support for decompiling graph objects from TD1.
- 2.13 - Initial support for TD1.
- 2.12 - Update program library for ui bug fixes.
- 2.11 - Ensure no duplicate asset names.
- 2.10 - Fixed some models with bad faces in TD2/XDEF.
- 2.09 - Update program library for ui improvements, bug fixes.
- 2.08 - Update program library to fix ui bugs.
- 2.07 - Update program library for ui bug fixes.
- 2.06 - Update program library for new user interface, preview options, and settings.
- 2.05 - Update program library for improved preview rendering and loading indicator.
- 2.04 - Update program library for bug fixes, crash fixes, ui improvements.
- 2.03 - Support for cast auto constraint for some characters in SWOL. Update program library for bug fixes, ui improvements.
- 2.02 - Support for another model format and bug fixes for some models in AFOP/SWOL. Ability to export materials with their textures if the exist.
- 2.01 - Fix UV layers on some models.
- 2.00 - Update program library for ui improvements.
- 1.99 - Support for more animation formats in SWOL.
- 1.98 - Export mesh names when using cast. Update program library for ui improvements.
- 1.97 - Support for remainder of SWOL models. Fixed bug exporting some models in AFOP.
- 1.96 - Fixed exporting some raw files in SWOL. Update program library for ui improvements.
- 1.95 - Fixes for some models bugs with compressed weights. Update program library for fixed FBX exporter.
- 1.94 - Initial support for Star Wars Outlaws, including new model, animation, and image formats. Fixed issue with vertex colors introduced in the last update.
- 1.93 - Update program library for bug fixes, ui improvements, and multiple color layer support.
- 1.92 - Update program library for TGA export.
- 1.91 - Automatically set the mesh skin mode to dual quaternion for cast exports, (you need to manually do this with other formats).
- 1.90 - Fix rare issue with some model parts not being in the proper position.
- 1.89 - Update program library for enhanced search capabilities.
- 1.88 - Update program library for ui fixes and improvements.
- 1.87 - Support for decompiling binary graphs used in several game files to their 'light' text format.
- 1.86 - Support for animations that animate multiple models at once, like weapon animations, etc.
- 1.85 - Update program library for bug fixes, code cleanup.
- 1.84 - Update program library for ui improvements.
- 1.83 - Update program library for ui improvements.
- 1.82 - For real this time, 99% of all animations are supported.
- 1.81 - Update program library for ui fixes, fixed FBX export compatibility.
- 1.80 - Initial support for XDefiant, most models, and animations are working.
- 1.76 - Update program library for ui tweaks and improvements.
- 1.75 - Add support for the latest avatar update.
- 1.74 - Update program library for ui tweaks, fixes, and performance.
- 1.73 - Update program library for performance improvements.
- 1.72 - Fixed more image issues. Fixed ui resize bug introduced in last update.
- 1.71 - Fixed crash with previous model format update. Fixed bug exporting some images. Support more image formats. Support some models with mutliple uv layers.
- 1.70 - Support for more animation formats, an uncommon model format, and more.
- 1.68 - Update program library to fix ui bugs.
- 1.67 - Update program library for crash fixes, texture export performance.
- 1.66 - Support auto constraints for some avatar models (Requires latest cast plugins).
- 1.65 - Update program library again.
- 1.64 - Update program library to fix weights in some export formats in some cases (Maya, SMD).
- 1.63 - Update program library for new settings.
- 1.62 - Support for more animation formats. 99% of all animations are now supported.
- 1.61 - Initial support for exporting animations. 70% of all animations are supported at this time.
- 1.60 - Fixed valve smd exporter.
- 1.59 - Fixed another crash around gpu buffers.
- 1.58 - Fixed crash exporting some textures due to non block size and gpu issues.
- 1.57 - Fixed weights for some complex models.
- 1.56 - Support BC5 and more sRGB/SNORM formats for images.
- 1.55 - Fix issue with some rawfiles not exporting in TD2/Avatar (they were encrypted). Label reference models as placeholder.
- 1.54 - Even faster loading performance. Fix crash on `sdf_streaming` toc files from TD2. Specify avatar in load dialog.
- 1.53 - Loading and export performance improvements. Placeholder detection for locales.
- 1.52 - Fix weights for some models with a lot of bones.
- 1.51 - Fixed sRGB detection for some image formats. Support R8G8B8.
- 1.50 - New GUI. More model format support v9-17 and uv fixes. New image format support. Avatar Frontiers of Pandora game support.
- 1.00 - Initial Release.