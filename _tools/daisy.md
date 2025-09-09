---
layout: post
title: Daisy
feature-img: assets/maya.jpg
thumbnail: assets/tools/daisy.png
description: "The Doom 2016 Mega Texture Mod Kit"
order: 10
date: 2025-09-08
---

# Daisy - The Doom 2016 Mega Texture Mod Kit
Allows creation of mega texture mods that can be distributed alongside other game mods.

## ❤️ Donate:
- I take time out of my day to make this happen.
- Show your support: [HERE](https://dtzxporter.com/donate)

## 💾 Download and version info:

> **IMPORTANT:** This software comes with no warranty what so ever.

> **NOTICE:** Please link back to this page in order for others to install the daisy mod to ensure they're using the latest version. Modpacks will be backwards compatible going forward.

- Download (Windows x64): [Daisy Mod (v1.03)](https://mega.nz/file/oVwlGKhK#wD0GEKlcha1hWPCNs0jZFTFrZbGXvogsg0MXT_znccM).
  - Windows 10+ officially supported.
  - Some users have reported success on linux via wine.
- Download (Windows x64): [Daisy Editor (v1.03)](https://mega.nz/file/ZN5VlQ7C#LXUgXnn9gDZwBvF8szPqn-LQr0SVfTvqTjpn2YzSJ20).
  - Windows 10+ officially supported.

## 👉 Usage:
Daisy features two separate components, the daisy mod, and the daisy editor. If you just want to install mods follow the mod installation steps. If you want to create mods, follow _both_ of the installation steps.

### Daisy Mod
- Unzip the latest daisy mod above.
- Copy `dinput8.dll` to the installation directory of doom 2016.
  - It should be placed next to `DOOMx64vk.exe`.
- Create a `pmx` folder in the same directory, this is where you'll install mods to.
  - Both the `.pmx` and `.pmxd` files must be copied to your newly created `pmx` folder in order for them to be discovered.
- Make sure your in-game settings are set to use the `Vulkan` graphics api, daisy will ignore the `OpenGL` version.
- That's it! Daisy should already be replacing any modified textures.

> **NOTICE:** Daisy has support for loading _LegacyMod_ by renaming the `dinput8.dll` file to `legacy_mod.dll`.

### Daisy Editor
- Unzip the latest daisy editor above.
- Launch `daisy-editor.exe`.
- Follow the steps in order:
  - Provide the path to `DOOMx64vk.exe`.
  - Create or open an existing `pmx` mod, you can save them directly in your daisy mod `pmx` folder to be able to test them live, details below.
  - Select the mega texture you want to modify, searching if you prefer.
  - Provide at least one new texture, daisy will only replace ones you've provided, and use the originals if you omit one.
    - It's recommended you extract the material and use it's images from [Revenant](https://dtzxporter.com/tools/revenant) as a reference, it must be the same size!
  - Press `Bake` to create and save your changes.
- If you want to test in game live, make sure to pause before pressing `Bake`.
- Once finished, you can use the command `vt_restart` to reload all `pmx` files and mega textures.

### Releasing your mod
- In order to release your mod, you need to distribute the `*.pmx` and `*.pmxd` files together, and instruct the user to install the daisy mod.
- Once you are ready to distribute your mod, it is **highly** recommended to run `Defrag` in order to optimize, and shrink the size of your mod pack.

## 📌 Versioning:
- 1.03 - Updated program library. Fixed race condition loading legacy mod.
- 1.02 - Performance improvements.
- 1.01 - Fix error formatting. Add support for loading snaphak/legacy mod.
- 1.00 - Initial Release.