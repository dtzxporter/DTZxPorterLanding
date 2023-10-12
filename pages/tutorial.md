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

### Settings - General
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

### Settings - Models
- OBJ - Export models in obj format.
- Valve SMD - Export models in smd format. [SDK](https://developer.valvesoftware.com/wiki/Maya#Source_SDK_plug-ins)
- XNALara - Export models in xnalara format. [Blender](https://github.com/johnzero7/XNALaraMesh)
- CoD XModel - Export models in xmodel_export format.
- Cast - Export models in cast format. [Plugins](https://github.com/dtzxporter/cast)
- SEModel - Export models in semodel format. [Maya](https://github.com/dtzxporter/SETools) / [Blender](https://github.com/dtzxporter/io_model_semodel)
- Autodesk Maya - Export models in ma format. [Maya](https://www.autodesk.com/products/maya)
- FBX - Export models in fbx format.

### Settings - Images
- Image file type `DDS`:
  - Typically the source format for the game.
  - Requires latest [Paint.NET](https://www.getpaint.net/) or [Photoshop Plugin](https://github.com/GameTechDev/Intel-Texture-Works-Plugin).
  - Does not work properly in Blender or Maya and many other editors.
- Image file type `PNG`:
  - Lossless converted from in-game formats.
  - Supports both sRGB and linear textures.
- Image file type `TIFF`:
  - Lossless converted from in-game formats.
  - Supports both sRGB and linear textures.
  - May be slightly larger than some of the png files.

Normal map conversion aids in reconstructing normal maps from the game.

- Normal map conversion `None`:
  - Does nothing to transform the normal maps.
- Normal map conversion `OpenGL`:
  - Regenerates the Z channel from XY like the game does.
  - Ensures that Y is facing the correct "OpenGL" direction.
- Normal map conversion `DirectX`:
  - Regenerates the Z channel from XY like the game does.
  - Ensures that Y is facing the correct "DirectX" direction.

### Settings - Animations
- Cast - Export animations in cast format. [Plugins](https://github.com/dtzxporter/cast)
- SEAnim - Export animations in seanim format. [Maya](https://github.com/dtzxporter/SETools) / [Blender](https://github.com/SE2Dev/io_anim_seanim)

### Settings - Audio
- Wav 16bit pcm - Export audio in wav format.
- Wav 32bit float - Export audio in wav format, float takes up more space but will be lossless if the game uses higher quality audio.
- Flac - Export audio in flac format, lossless and will take up less space than the wavs.