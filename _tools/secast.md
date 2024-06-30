---
layout: post
title: SECast
feature-img: assets/maya.png
img: assets/tools/secast.png
description: "Lossless SEAnim & SEModel to Cast converter"
order: 6
date: 2024-06-29
---

# SECast - Lossless SEAnim & SEModel to Cast converter
Converts *.seanim and *.semodel to *.cast without losing any information.

## ❤️ Donate:
- I take time out of my day to make this happen.
- Show your support: [HERE](https://dtzxporter.com/donate)

## 💾 Download and version info:

> **IMPORTANT:** This software comes with no warranty what so ever.

- Download (Windows x64): [SECast (v2.00)](https://mega.nz/file/hNYgTBzQ#_wjp4ZFYQSLeJIIz_kQ5dROkc0r2oQa-3DsuZA9VC4c).
- Download (Linux x64): [SECast (v2.00)](https://mega.nz/file/NBhhmB5K#PhnskhUi48eOGqgGYYTrXQ14GtnFkTBPtx8EvQq12cE).
- Download (macOS ARM): [SECast (v2.00)](https://mega.nz/file/JJR0xYwI#hd_rJKQgiQI-6sJjUZuiR78zzhDlH8fcsBN0e3mbopg).

## ⚙️ Usage:
Using SECast is simple. Just drag and drop a SEAnim or SEModel or a folder to the application and it will convert in-place.

- The tool features a command line interface, where you can modify the output scale using `--scale 1.0`.
- You can also specify `--skip-pause` to prevent the pause at the end.

## 🎥 For the technologically impaired:
<img style="padding: 0" src="/assets/tools/secast-video.gif">

## 📌 Versioning:
- 1.00 - Initial Release.
- 1.01 - Fixed issue with some SEAnim animations that are relative and had incorrect rotation curves. Added `--skip-pause` command line argument.
- 1.02 - Fixed issue generating animation curves for animations with no keyframes.
- 2.00 - Support for new cast nodes which fix compatibility with animations. Support for non-standard blend shapes in seanim/semodels.