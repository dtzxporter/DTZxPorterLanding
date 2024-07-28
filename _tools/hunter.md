---
layout: post
title: Hunter
feature-img: assets/maya.jpg
img: assets/tools/hunter.png
description: "The TD2, AFOP, XDefiant Asset Extractor"
order: 0
date: 2024-07-28
---

# Hunter - The TD2, AFOP, XDefiant Asset Extractor
Extracts all assets from the games "The Division 2", "Avatar Frontiers of Pandora" and "XDefiant". This software was developed by [DTZxPorter](https://twitter.com/dtzxporter).

## ❤️ Donate:
- I take time out of my day to make this happen.
- Show your support: [HERE](https://dtzxporter.com/donate)

## 💾 Download and version info:

> **IMPORTANT:** This software comes with no warranty what so ever.

- Download (Windows x64): [Hunter (v1.91)](https://mega.nz/file/II5SxLxL#kOOCbzKRRHfPXvOlVIQDqCOinUHPyaGQbUkLKZh_008).
  - Windows 10+ officially supported.

## ℹ️ Usage:
Read the new game tools tutorial: [Game Tool Tutorial](https://dtzxporter.com/game-tools-tutorial).

> **IMPORTANT:** Both the tool and the game **require** the entirety of the rogue/hunter folder to be intact and must not be modified in any way.

## ⚙️ Ripping:
- The **.sdftoc** files contain various encoded assets that Hunter can export; and, as of now the currently supported assets are:
  - Textures as [Dds, Png, Tiff]
  - Models as [Cast, OBJ, XNALara, SMD, CoD XModel, Maya, FBX].
  - Animations as [Cast].
  - Raw Files as-is.
    - Hunter will decompile binary graph objects to their 'light' text format on export.

> **NOTE:** This tool only exports assets as-is, without attempting to link models to their materials, and materials to their images. The game uses complex scene graphs which would require too much effort to automate, however, most of a model's textures have similar names to each other. It's very easy to locate the textures for a model yourself.

> **NOTE:** There is no need to open the `sdf_streaming` toc file, as it only references assets in the main toc file.

## 📌 Versioning:
- 1.00 - Initial Release.
- 1.50 - New GUI. More model format support v9-17 and uv fixes. New image format support. Avatar Frontiers of Pandora game support.
- 1.51 - Fixed sRGB detection for some image formats. Support R8G8B8.
- 1.52 - Fix weights for some models with a lot of bones.
- 1.53 - Loading and export performance improvements. Placeholder detection for locales.
- 1.54 - Even faster loading performance. Fix crash on `sdf_streaming` toc files from TD2. Specify avatar in load dialog.
- 1.55 - Fix issue with some rawfiles not exporting in TD2/Avatar (they were encrypted). Label reference models as placeholder.
- 1.56 - Support BC5 and more sRGB/SNORM formats for images.
- 1.57 - Fixed weights for some complex models.
- 1.58 - Fixed crash exporting some textures due to non block size and gpu issues.
- 1.59 - Fixed another crash around gpu buffers.
- 1.60 - Fixed valve smd exporter.
- 1.61 - Initial support for exporting animations. 70% of all animations are supported at this time.
- 1.62 - Support for more animation formats. 99% of all animations are now supported.
- 1.63 - Update program library for new settings.
- 1.64 - Update program library to fix weights in some export formats in some cases (Maya, SMD).
- 1.65 - Update program library again.
- 1.66 - Support auto constraints for some avatar models (Requires latest cast plugins).
- 1.67 - Update program library for crash fixes, texture export performance.
- 1.68 - Update program library to fix ui bugs.
- 1.70 - Support for more animation formats, an uncommon model format, and more.
- 1.71 - Fixed crash with previous model format update. Fixed bug exporting some images. Support more image formats. Support some models with mutliple uv layers.
- 1.72 - Fixed more image issues. Fixed ui resize bug introduced in last update.
- 1.73 - Update program library for performance improvements.
- 1.74 - Update program library for ui tweaks, fixes, and performance.
- 1.75 - Add support for the latest avatar update.
- 1.76 - Update program library for ui tweaks and improvements.
- 1.80 - Initial support for XDefiant, most models, and animations are working.
- 1.81 - Update program library for ui fixes, fixed FBX export compatibility.
- 1.82 - For real this time, 99% of all animations are supported.
- 1.83 - Update program library for ui improvements.
- 1.84 - Update program library for ui improvements.
- 1.85 - Update program library for bug fixes, code cleanup.
- 1.86 - Support for animations that animate multiple models at once, like weapon animations, etc.
- 1.87 - Support for decompiling binary graphs used in several game files to their 'light' text format.
- 1.88 - Update program library for ui fixes and improvements.
- 1.89 - Update program library for enhanced search capabilities.
- 1.90 - Fix rare issue with some model parts not being in the proper position.
- 1.91 - Automatically set the mesh skin mode to dual quaternion for cast exports, (you need to manually do this with other formats).