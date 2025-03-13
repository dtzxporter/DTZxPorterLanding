---
layout: post
title: Diver
feature-img: assets/maya.jpg
thumbnail: assets/tools/diver.png
description: "The Helldivers 2 Asset Extractor"
order: 1
date: 2025-03-13
---

# Diver - The Helldivers 2 Asset Extractor
Extracts all assets from the game "Helldivers 2". This software was developed by [DTZxPorter](https://twitter.com/dtzxporter).

## ❤️ Donate:
- I take time out of my day to make this happen.
- Show your support: [HERE](https://dtzxporter.com/donate)

## 💾 Download and version info:

> **IMPORTANT:** This software comes with no warranty what so ever. Use at your own risk.

- Download (Windows x64): [Diver (v1.43)](https://mega.nz/file/8RhFFBZJ#e1ggA0WtIYYa76zL6cI9GdheedWN6Aslhh97bnCnzhs).
  - Windows 10+ officially supported.

## 👉 Usage:
Read the new game tools tutorial: [Game Tool Tutorial](https://dtzxporter.com/game-tools-tutorial).

> **IMPORTANT:** Both the tool and the game **require** the entirety of the data folder to be intact and must not be modified in any way. Diver loads all of the files in the data folder at once after picking a file to load.

## ⚙️ Ripping:
- The **.stream** and **.gpu_resources** files contain various encoded assets that Diver can export; and, as of now the currently supported assets are:
  - Textures as [Dds, Png, Tiff, Tga]
  - Models as [Cast, OBJ, XNALara, SMD, CoD XModel, Maya, FBX].
  - Animations as [Cast].
  - Sounds as [Wem, Bnk].
  - Raw Files as-is.

> **NOTE:** This tool does it's best to export known materials with a model. In some cases, the models use dynamic shaders, and materials (for skins, variants, etc) and you won't get textures with that model. You can export materials separately as well as images.

## 📋 Asset Names:
There is a community effort to name assets for easier use. You can download or contribute to the database here: [hd2-name-db](https://github.com/dtzxporter/hd2-name-db).

## 📌 Versioning:
- 1.43 - Update program library to fix ui bugs.
- 1.42 - Update program library for new user interface, preview options, and settings.
- 1.41 - Update program library for new tiff floating point image support.
- 1.40 - Add support for most additive animations. Update program library for improved preview rendering and loading indicator.
- 1.39 - Update program library for bug fixes, crash fixes, ui improvements.
- 1.38 - Update program library for bug fixes, ui improvements.
- 1.37 - Update program library for ui improvements.
- 1.36 - Update program library for ui improvements.
- 1.35 - Update program library for bug fixes.
- 1.34 - Update program library for bug fixes, ui improvements.
- 1.33 - Update program library for TGA export.
- 1.32 - Fix issue that caused a small selection of models to export lower poly.
- 1.31 - Update program library for enhanced search capabilities, display animation set in model information if available.
- 1.30 - Update program library for ui fixes and improvements.
- 1.29 - Workaround for models which use havok physics to move parts by creating fake weights for physics meshes.
- 1.28 - Update program library for bug fixes, code cleanup.
- 1.27 - Update program library for ui improvements.
- 1.26 - Update program library for ui improvements.
- 1.25 - Fixed console window by accident.
- 1.24 - Fix animation exporting due to a bug with keyframes.
- 1.23 - Update program library for ui fixes, fixed FBX export compatibility.
- 1.22 - Added support for remainder of animation sets.
- 1.21 - Fixed an issue with a specific weapon not exporting.
- 1.20 - Update program library for ui tweaks and improvements.
- 1.19 - Support models in geometry caches. There are about 1,500 new models available.
- 1.18 - Enabled normal map conversion toggle in settings.
- 1.17 - Relaxed placeholder model constraints so that base skeletons can be exported.
- 1.16 - Fixed models which have no lods (uncommon).
- 1.15 - Added all in-use file type names and verified them.
- 1.14 - Support for more animations. ~99% are exportable.
- 1.13 - Support for exporting sounds (as wem) and sound banks (as bnk).
- 1.12 - Support for more animation types. Add support for loading an asset name database `assets.pndb` if one exists next to the application.
- 1.10 - Initial support for exporting animations, 65% are currently exportable.
- 1.02 - Fixed export of a very small group of models that have hilarious data. All models should export correctly as of now.
- 1.01 - Fixed model position bugs, material assignment, exports multi-layer images for dds, png, and tiff, export all material references.
- 1.00 (BETA) - Initial Release with support for models, materials, and textures.