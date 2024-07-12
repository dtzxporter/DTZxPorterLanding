---
layout: page
title: Game Tools Tutorial
hide: true
permalink: /game-tools-tutorial
feature-img: assets/donate.jpg
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
To preview an asset, you can press (P) to open the preview window. Select the asset you want to view in the list of assets to preview it. You can change the controls in settings.

- Controls (Autodesk Maya):
  - `Ctrl/Alt + Left Mouse` = Rotate.
  - `Ctrl/Alt + Middle Mouse` = Pan.
  - `Ctrl/Alt + Right Mouse` = Zoom.
- Controls (Blender):
  - `Middle Mouse` = Rotate.
  - `Shift + Middle Mouse` = Pan.
  - `Alt + Middle Mouse` = Zoom.

## 🕵️ Searching for assets
You can search for assets using text, or specially formatted text commands to narrow down your search. Each command must be separated by a comma `,` and up to 5 commands can be searched for at once. By default, a property command value is assumed to be equal, but you can use the operators `>`, `<`, `>=`, `<=` to change that.

- Search asset properties:
  - `bonecount` Searches the bonecount property, usually for models.
    - Defaults to 0 for non-supported assets.
    - Supports `>`, `<`, and equals.
  - `meshcount` Searches the meshcount property, usually for models.
    - Defaults to 0 for non-supported assets.
    - Supports `>`, `<`, and equals.
  - `framecount` Searches the framecount property, usually for animations.
    - Defaults to 0 for non-supported assets.
    - Supports `>`, `<`, and equals.
  - `framerate` Searches the framerate property, usually for animations.
    - Defaults to 0 for non-supported assets.
    - Supports `>`, `<`, and equals.
  - `width` Searches the width property, usually for images.
    - Defaults to 0 for non-supported assets.
    - Supports `>`, `<`, and equals.
  - `height` Searches the height property, usually for images.
    - Defaults to 0 for non-supported assets.
    - Supports `>`, `<`, and equals.
- Search asset names:
  - By default, search will check if the name contains the given text.
  - If you prefix your text with `!`, it will check if the name does not contain the given text.

### Examples
Search for an asset with the name `normal` that is at least 2048x2048:
```
width:>=2048,height:>=2048,normal
```
Search for an asset with exactly 100 bones, and doesn't have `fire` in the name:
```
bonecount:100,!fire
```

## 📋 Handy asset shortcuts
- `Ctrl + C` Copy the names of all selected assets to the clipboard.
- `Ctrl + V` Focuses the search box and pastes clipboard content into it.
- `Ctrl + A` Focuses the search box and selects all of it's content.

## 🚦 Asset status
- Loaded - The asset is ready to be exported.
- Placeholder - The asset is empty, a reference, or has nothing to export at this time.
- Exporting - The asset is currently exporting in parallel.
- Exported - The asset was exported successfully.
- Error - An error occured while exporting this asset, you should report the name of it to me. (Make sure you didn't run out of disk space.)

## ⚙️ Tool Settings
Here is a list of all of the configurable tool settings and a description that goes with it:

### Settings - General
- Load Models - Show assets that are models.
- Load Animations - Show assets that are animations.
- Load Images - Show assets that are images.
- Load Materials - Show assets that are materials.
- Load Sounds - Show assets that are sounds.
- Load Raw Files - Show assets that are loose files, or not directly convertable.

You can customize the export directory using the "Browse" button.

- Automatically scale assets - Scales assets from in-game units to source / editor units (Recommended).
  - If the game uses meters, then the units will be `*= 100`.
  - If the game uses inches, then the units will be `*= 2.54`.
  - If the game uses centimeters, then the units will be `*= 1.0`.

### Settings - Models
- Cast - Export models in cast format. [Plugins](https://github.com/dtzxporter/cast)
- OBJ - Export models in obj format.
- Valve SMD - Export models in smd format. [SDK](https://developer.valvesoftware.com/wiki/Maya#Source_SDK_plug-ins)
- XNALara - Export models in xnalara format. [Blender](https://github.com/johnzero7/XNALaraMesh)
- CoD XModel - Export models in xmodel_export format.
- Autodesk Maya - Export models in ma format. [Maya](https://www.autodesk.com/products/maya)
- FBX - Export models in fbx format.

> **WARNING:** Some model formats only support a limited amount of model features. For the best compatibility with any game, use Cast with a proper plugin.

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

### Settings - Audio
- Wav 16bit pcm - Export audio in wav format.
- Wav 32bit float - Export audio in wav format, float takes up more space but will be lossless if the game uses higher quality audio.
- Flac - Export audio in flac format, lossless and will take up less space than the wavs.

### Settings - Advanced
- Treat all assets as raw files (Not Recommended).
  - Forces all assets to load and display as-is without conversion.