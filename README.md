# Clipboard Image to Photoshop

A [Raycast](https://raycast.com) extension that opens the current image on your clipboard directly in Adobe Photoshop.

## Usage

1. Copy any image to your clipboard (screenshot, image from browser, file, etc.)
2. Open Raycast and search for **"Open Clipboard Image in Photoshop"**
3. The image will open instantly in Photoshop

## How it works

The command handles three clipboard scenarios:

- **File reference** — if the clipboard holds a path to an image file, it opens it directly
- **Image file path as text** — if the clipboard text looks like a path to an image, it uses it directly
- **Raw image data** — if the clipboard holds raw image data (e.g. a screenshot), it saves it to a temporary PNG file and opens that in Photoshop

Photoshop versions are tried in order: 2026 → 2025 → Beta → generic.

## Requirements

- macOS
- Adobe Photoshop installed
