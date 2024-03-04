---
layout: post
title: Diver
feature-img: assets/maya.png
img: assets/tools/diver.png
description: "The Helldivers 2 Asset Extractor"
order: 1
date: 2024-03-03
---

# Diver - The Helldivers 2 Asset Extractor
Extracts all assets from the game "Helldivers 2". This software was developed by [DTZxPorter](https://twitter.com/dtzxporter).

## ❤️ Donate:
- I take time out of my day to make this happen.
- Show your support: [HERE](https://dtzxporter.com/donate)

## 💾 Download and version info:

> **IMPORTANT:** By downloading this software you are agreeing to the **EULA** located in the `About` tab of the program.

- Download (Windows x64): [Diver (v1.02)](https://mega.nz/file/0RZTADpB#YPGerhqkzGpoiuRJ2VLSQQfq9fG6CfyKs7sDeYV0b7k).
  - Windows 10+ officially supported.
  - Requires a CPU with SSE4.2 support.

## ⚙️ Usage:
Read the new game tools tutorial: [Game Tool Tutorial](https://dtzxporter.com/game-tools-tutorial).

> **IMPORTANT:** Both the tool and the game **require** the entirety of the data folder to be intact and must not be modified in any way. Diver loads all of the files in the data folder at once after picking a file to load.

## Ripping:
- The **.stream** and **.gpu_resources** files contain various encoded assets that Diver can export; and, as of now the currently supported assets are:
  - Textures as [Dds, Png, Tiff]
  - Models as [Cast, SEModel, OBJ, XNALara, SMD, CoD XModel, Maya, Kaydara FBX].
  - Raw Files as-is.

> **NOTE:** This tool does it's best to export known materials with a model. In some cases, the models use dynamic shaders, and materials (for skins, variants, etc) and you won't get textures with that model. You can export materials separately as well as images.

## 📌 Versioning:
- 1.00 (BETA) - Initial Release with support for models, materials, and textures.
- 1.01 - Fixed model position bugs, material assignment, exports multi-layer images for dds, png, and tiff, export all material references.
- 1.02 - Fixed export of a very small group of models that have hilarious data. All models should export correctly as of now.