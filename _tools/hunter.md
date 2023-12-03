---
layout: post
title: Hunter
feature-img: assets/maya.png
img: assets/tools/hunter.png
description: "The Division 2 Asset Extractor"
order: 1
date: 2023-12-01
---

# Hunter - The Division 2 Asset Extractor
Extracts all assets from *.sdftoc files, also converts images and models.

## ❤️ Donate:
- I take time out of my day to make this happen.
- Show your support: [HERE](https://dtzxporter.com/donate)

## 💾 Download and version info:

> **IMPORTANT:** This software comes with no warranty what so ever.

- Download (Windows x64): [Hunter (v1.00)](https://mega.nz/file/Fc4BzLIS#7A6CmVCmHIzlSJACVoPpTTwiw8L3aGwJT7C90Vj-sm0).

## ⚙️ Usage:
Using Hunter is simple. Just drag and drop a SDFToc to the application and it will export assets to the `exported_files` directory.

- The tool features a command line interface, where you can specify the following:
  - `--list`, to generate a `file_list.txt` with the names of all assets.
  - `--filter .wem`, to only process files that contain '.wem'. (Recommended, there are 2m+ assets)
  - `--image dds`, to export the raw dds's. Or [png].
  - `--model raw`, to export the raw model files. Or [cast, fbx, smd].
  - `--skip-pause`, to prevent the program from pausing at the end.

- Read the new game tools tutorial for plugins and help: [Game Tool Tutorial](https://dtzxporter.com/game-tools-tutorial).

> **NOTE:** This tool only exports assets as-is, without attempting to link models to their materials, and materials to their images. The game uses complex scene graphs which would require too much effort to automate, however, most of a model's textures have similar names to each other. It's very easy to locate the textures for a model yourself.

## 📌 Versioning:
- 1.00 - Initial Release.