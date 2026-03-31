# Clipboard Image to Photoshop

A [Raycast](https://raycast.com) extension that opens the current image on your clipboard directly in Adobe Photoshop.

## Usage

1. Copy any image to your clipboard (screenshot, image from browser, file, etc.)
2. Open Raycast and search for **"Open Clipboard Image in Photoshop"**
3. The image will open instantly in Photoshop

## How It Works

The command handles three clipboard scenarios:

- **File reference** — if the clipboard holds a path to an image file, it opens it directly
- **Image file path as text** — if the clipboard text looks like a path to an image (`.png`, `.jpg`, `.psd`, `.heic`, `.raw`, etc.), it uses it directly
- **Raw image data** — if the clipboard holds raw image data (e.g. a screenshot), it saves it to a temporary PNG file and opens that in Photoshop

## Photoshop Detection

The extension automatically detects installed Photoshop versions via macOS Spotlight and defaults to the most recent one. No configuration needed — it just works with whatever version you have installed.

If auto-detection doesn't suit your setup, you can manually set the target application in the extension preferences.

### Preferences

| Preference                | Description                                                                                                                                                                                                              |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Photoshop Application** | Override the target app. Leave empty to auto-detect the latest installed version. Accepts an app name (e.g. `Adobe Photoshop 2025`) or a full path (e.g. `/Applications/Adobe Photoshop 2025/Adobe Photoshop 2025.app`). |

## Requirements

- macOS
- Adobe Photoshop installed
