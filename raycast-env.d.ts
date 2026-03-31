/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Photoshop Application - Override the target app. Leave empty to auto-detect the latest installed version. Accepts an app name (e.g. "Adobe Photoshop 2025") or a full path (e.g. "/Applications/Adobe Photoshop 2025/Adobe Photoshop 2025.app"). */
  "photoshopApp"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `open-in-photoshop` command */
  export type OpenInPhotoshop = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `open-in-photoshop` command */
  export type OpenInPhotoshop = {}
}

