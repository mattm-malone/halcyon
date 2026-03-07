import { useState, useCallback, useEffect } from 'react';
import { Settings } from '../context/types';

export interface SavedTheme {
    id: string;
    name: string;
    settings: Record<string, string>;
}

const STORAGE_KEY = 'halcyon-saved-themes';
const NIGHT_STORAGE_KEY = 'halcyon-saved-themes-night';

/** The color setting keys used by day themes */
const DAY_THEME_KEYS: (keyof Settings)[] = [
    'SETTING_TIME_COLOR',
    'SETTING_SUBTEXT_PRIMARY_COLOR',
    'SETTING_SUBTEXT_SECONDARY_COLOR',
    'SETTING_BG_COLOR',
    'SETTING_PIP_COLOR_PRIMARY',
    'SETTING_PIP_COLOR_SECONDARY',
    'SETTING_RING_STROKE_COLOR',
    'SETTING_RING_NIGHT_COLOR',
    'SETTING_RING_DAY_COLOR',
    'SETTING_RING_SUNRISE_COLOR',
    'SETTING_RING_SUNSET_COLOR',
    'SETTING_SUN_STROKE_COLOR',
    'SETTING_SUN_FILL_COLOR',
];

/** The color setting keys used by night themes */
const NIGHT_THEME_KEYS: (keyof Settings)[] = [
    'SETTING_NIGHT_TIME_COLOR',
    'SETTING_NIGHT_SUBTEXT_PRIMARY_COLOR',
    'SETTING_NIGHT_SUBTEXT_SECONDARY_COLOR',
    'SETTING_NIGHT_BG_COLOR',
    'SETTING_NIGHT_PIP_COLOR_PRIMARY',
    'SETTING_NIGHT_PIP_COLOR_SECONDARY',
    'SETTING_NIGHT_RING_STROKE_COLOR',
    'SETTING_NIGHT_RING_NIGHT_COLOR',
    'SETTING_NIGHT_RING_DAY_COLOR',
    'SETTING_NIGHT_RING_SUNRISE_COLOR',
    'SETTING_NIGHT_RING_SUNSET_COLOR',
    'SETTING_NIGHT_SUN_STROKE_COLOR',
    'SETTING_NIGHT_SUN_FILL_COLOR',
];

function loadFromStorage(key: string): SavedTheme[] {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

function saveToStorage(key: string, themes: SavedTheme[]) {
    localStorage.setItem(key, JSON.stringify(themes));
}

function getNextName(themes: SavedTheme[]): string {
    let max = 0;
    for (const t of themes) {
        const match = t.name.match(/^Saved Theme (\d+)$/);
        if (match) max = Math.max(max, parseInt(match[1], 10));
    }
    return `Saved Theme ${max + 1}`;
}

function generateId(): string {
    return `saved_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export function useSavedThemes(isNight: boolean = false) {
    const storageKey = isNight ? NIGHT_STORAGE_KEY : STORAGE_KEY;
    const themeKeys = isNight ? NIGHT_THEME_KEYS : DAY_THEME_KEYS;

    const [savedThemes, setSavedThemes] = useState<SavedTheme[]>(() =>
        loadFromStorage(storageKey)
    );

    // Persist on change
    useEffect(() => {
        saveToStorage(storageKey, savedThemes);
    }, [savedThemes, storageKey]);

    const saveTheme = useCallback(
        (settings: Settings): SavedTheme => {
            const colorSettings: Record<string, string> = {};
            for (const key of themeKeys) {
                colorSettings[key] = String(settings[key]);
            }
            const theme: SavedTheme = {
                id: generateId(),
                name: getNextName(savedThemes),
                settings: colorSettings,
            };
            setSavedThemes((prev) => [...prev, theme]);
            return theme;
        },
        [savedThemes, themeKeys]
    );

    const deleteTheme = useCallback((id: string) => {
        setSavedThemes((prev) => prev.filter((t) => t.id !== id));
    }, []);

    const importTheme = useCallback(
        (json: string): { success: boolean; error?: string; theme?: SavedTheme } => {
            try {
                const parsed = JSON.parse(json);

                // Accept either { settings: { ... } } or just { SETTING_...: ... }
                const settings: Record<string, string> =
                    parsed.settings && typeof parsed.settings === 'object'
                        ? parsed.settings
                        : parsed;

                // Validate that at least some expected keys exist
                const validKeys = themeKeys.filter((k) => k in settings);
                if (validKeys.length === 0) {
                    return {
                        success: false,
                        error: 'No valid theme settings found in the pasted JSON.',
                    };
                }

                const colorSettings: Record<string, string> = {};
                for (const key of themeKeys) {
                    if (key in settings) {
                        colorSettings[key] = String(settings[key]);
                    }
                }

                const theme: SavedTheme = {
                    id: generateId(),
                    name: parsed.name || getNextName(savedThemes),
                    settings: colorSettings,
                };
                setSavedThemes((prev) => [...prev, theme]);
                return { success: true, theme };
            } catch {
                return { success: false, error: 'Invalid JSON. Please check and try again.' };
            }
        },
        [savedThemes, themeKeys]
    );

    const exportTheme = useCallback(
        (settings: Record<string, string>): string => {
            return JSON.stringify(settings, null, 2);
        },
        []
    );

    return { savedThemes, saveTheme, deleteTheme, importTheme, exportTheme };
}
