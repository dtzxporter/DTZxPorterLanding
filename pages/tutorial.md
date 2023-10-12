---
layout: page
title: Game Tools Tutorial
hide: true
permalink: /game-tools-tutorial
feature-img: assets/donate.png
---

# Game Tools Tutorial
An overview of all of my modern game tools (released in 2023+) all tools will share the same UI and settings going forward.

## 📂 Loading a file
If the game tool supports loading assets from specific files, you'll see a "Load File" button at the bottom of the window. In addition, you can also drag and drop a supported file anywhere on the UI to load it.

## 🎮 Loading a game
If the game tool supports loading assets from the game directly, you'll see a "Load Game" button at the bottom of the window. You must launch the game first, then click the "Load Game" button. The game must remain running while you export assets.

## 💾 Exporting one or more assets
To export an asset you can:
- Double click an asset in the list.
- Select the assets you want to export and press (E).
- Select the assets you want to export and press "Export Selected" button.
- Press the "Export All" button.

The cancel button will cancel the export job after the current asset exports.

## 🔍 Previewing an asset
To preview an asset, you can press (P) to open the preview window. Select the asset you want to view in the list of assets to preview it.

## ⚙️ Tool Settings
Here is a list of all of the configurable tool settings and a description that goes with it:

### Settings -- General
- Load Models - Show assets that are models.
- Load Animations - Show assets that are animations.
- Load Images - Show assets that are images.
- Load Materials - Show assets that are materials.
- Load Sounds - Show assets that are sounds.

You can customize the export directory using the "Browse" button.

- Automatically scale assets - Scales assets from in-game units to source / editor units (Recommended).
  - If the game uses meters, then the units will be `*= 100`.
  - If the game uses inches, then the units will be `*= 2.54`.
  - If the game uses centimeters, then the units will be `*= 1.0`.