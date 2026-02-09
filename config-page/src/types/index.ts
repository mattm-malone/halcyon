// src/types/index.ts

// Type for the structure of themes.json
export interface ThemeColors {
  [key: string]: string;
}

export interface SharedThemes {
  [themeName: string]: ThemeColors;
}

export interface ThemesData {
  sharedThemes: SharedThemes;
}

// Core type definitions for the Pebble Config Page
export interface ColorSetting {
  baseId: string;
  label: string;
  default: string;
}

export interface PebbleColor {
  name: string;
  identifier: string;
}

export interface Settings {
  [key: string]: string | number;
}

// Event types
export interface ColorChangeEvent {
  colorKey: string;
  value: string;
  isNight: boolean;
}

export interface ThemeChangeEvent {
  presetName: string;
  themeType: ThemeType;
  isCustom: boolean;
}

export interface SettingsChangeEvent {
  key: string;
  newValue: string | number;
  oldValue?: string | number | undefined;
}

// Utility types
export type ColorHex = string;
export type ThemeName = string;
export type SettingKey = string;

// Constants
export const THEME_TYPES = {
  DAY: 'day',
  NIGHT: 'night',
} as const;

export type ThemeType = (typeof THEME_TYPES)[keyof typeof THEME_TYPES];