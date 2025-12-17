// Halcyon Watchface Configuration JavaScript
// Migrated from Clay-based configuration to standard HTML/JS

// Theme definitions (migrated from custom-clay.js)
const sharedThemes = {
    "default": {
        "SETTING_TIME_COLOR": "000000",
        "SETTING_SUBTEXT_PRIMARY_COLOR": "000000",
        "SETTING_SUBTEXT_SECONDARY_COLOR": "555555",
        "SETTING_BG_COLOR": "FFFFFF",
        "SETTING_PIP_COLOR_PRIMARY": "000000",
        "SETTING_PIP_COLOR_SECONDARY": "AAAAAA",
        "SETTING_RING_STROKE_COLOR": "000000",
        "SETTING_RING_NIGHT_COLOR": "0055AA",
        "SETTING_RING_DAY_COLOR": "00AAFF",
        "SETTING_RING_SUNRISE_COLOR": "FFAAAA",
        "SETTING_RING_SUNSET_COLOR": "FFAA00",
        "SETTING_SUN_STROKE_COLOR": "000000",
        "SETTING_SUN_FILL_COLOR": "FFFF00"
    },
    "orangeDreams": {
        "SETTING_TIME_COLOR": "FF5500",
        "SETTING_SUBTEXT_PRIMARY_COLOR": "FF5500",
        "SETTING_SUBTEXT_SECONDARY_COLOR": "AA0000",
        "SETTING_BG_COLOR": "000000",
        "SETTING_PIP_COLOR_PRIMARY": "FF5500",
        "SETTING_PIP_COLOR_SECONDARY": "AA0000",
        "SETTING_RING_STROKE_COLOR": "000000",
        "SETTING_RING_NIGHT_COLOR": "000000",
        "SETTING_RING_DAY_COLOR": "FF5500",
        "SETTING_RING_SUNRISE_COLOR": "AA0000",
        "SETTING_RING_SUNSET_COLOR": "AA0000",
        "SETTING_SUN_STROKE_COLOR": "000000",
        "SETTING_SUN_FILL_COLOR": "FF5500"
    },
    "terminalGreen": {
        "SETTING_TIME_COLOR": "00ff00",
        "SETTING_SUBTEXT_PRIMARY_COLOR": "00ff00",
        "SETTING_SUBTEXT_SECONDARY_COLOR": "00aa00",
        "SETTING_BG_COLOR": "000000",
        "SETTING_PIP_COLOR_PRIMARY": "00ff00",
        "SETTING_PIP_COLOR_SECONDARY": "005500",
        "SETTING_RING_STROKE_COLOR": "000000",
        "SETTING_RING_NIGHT_COLOR": "000000",
        "SETTING_RING_DAY_COLOR": "00ff00",
        "SETTING_RING_SUNRISE_COLOR": "005500",
        "SETTING_RING_SUNSET_COLOR": "005500",
        "SETTING_SUN_STROKE_COLOR": "000000",
        "SETTING_SUN_FILL_COLOR": "00ff00"
    },
    "mauveTheme": {
        "SETTING_TIME_COLOR": "ffffff",
        "SETTING_SUBTEXT_PRIMARY_COLOR": "ffffff",
        "SETTING_SUBTEXT_SECONDARY_COLOR": "ffffff",
        "SETTING_BG_COLOR": "aa00aa",
        "SETTING_PIP_COLOR_PRIMARY": "000000",
        "SETTING_PIP_COLOR_SECONDARY": "550055",
        "SETTING_RING_STROKE_COLOR": "000000",
        "SETTING_RING_NIGHT_COLOR": "550055",
        "SETTING_RING_DAY_COLOR": "aa55aa",
        "SETTING_RING_SUNRISE_COLOR": "aa00aa",
        "SETTING_RING_SUNSET_COLOR": "aa00aa",
        "SETTING_SUN_STROKE_COLOR": "000000",
        "SETTING_SUN_FILL_COLOR": "ffffff"
    },
    "fireworkTheme": {
        "SETTING_TIME_COLOR": "ffffff",
        "SETTING_SUBTEXT_PRIMARY_COLOR": "ffaa00",
        "SETTING_SUBTEXT_SECONDARY_COLOR": "aa0000",
        "SETTING_BG_COLOR": "000000",
        "SETTING_PIP_COLOR_PRIMARY": "ff5500",
        "SETTING_PIP_COLOR_SECONDARY": "aa0000",
        "SETTING_RING_STROKE_COLOR": "000000",
        "SETTING_RING_NIGHT_COLOR": "000000",
        "SETTING_RING_DAY_COLOR": "000000",
        "SETTING_RING_SUNRISE_COLOR": "aa0000",
        "SETTING_RING_SUNSET_COLOR": "aa0000",
        "SETTING_SUN_STROKE_COLOR": "000000",
        "SETTING_SUN_FILL_COLOR": "ffaa00"
    },
    "lightOceanTheme": {
        "SETTING_TIME_COLOR": "000000",
        "SETTING_SUBTEXT_PRIMARY_COLOR": "000000",
        "SETTING_SUBTEXT_SECONDARY_COLOR": "aaaaaa",
        "SETTING_BG_COLOR": "ffffff",
        "SETTING_PIP_COLOR_PRIMARY": "000000",
        "SETTING_PIP_COLOR_SECONDARY": "aaaaaa",
        "SETTING_RING_STROKE_COLOR": "ffffff",
        "SETTING_RING_NIGHT_COLOR": "0055aa",
        "SETTING_RING_DAY_COLOR": "ffffff",
        "SETTING_RING_SUNRISE_COLOR": "00aaff",
        "SETTING_RING_SUNSET_COLOR": "00aaff",
        "SETTING_SUN_STROKE_COLOR": "000000",
        "SETTING_SUN_FILL_COLOR": "ffff00"
    },
    "roseTheme": {
        "SETTING_TIME_COLOR": "000000",
        "SETTING_SUBTEXT_PRIMARY_COLOR": "000000",
        "SETTING_SUBTEXT_SECONDARY_COLOR": "555555",
        "SETTING_BG_COLOR": "ffffff",
        "SETTING_PIP_COLOR_PRIMARY": "000000",
        "SETTING_PIP_COLOR_SECONDARY": "aaaaaa",
        "SETTING_RING_STROKE_COLOR": "ffffff",
        "SETTING_RING_NIGHT_COLOR": "ff00aa",
        "SETTING_RING_DAY_COLOR": "ffffff",
        "SETTING_RING_SUNRISE_COLOR": "ffaaaa",
        "SETTING_RING_SUNSET_COLOR": "ffaaaa",
        "SETTING_SUN_STROKE_COLOR": "000000",
        "SETTING_SUN_FILL_COLOR": "ffff00"
    },
    "oceanTheme": {
        "SETTING_TIME_COLOR": "ffffff",
        "SETTING_SUBTEXT_PRIMARY_COLOR": "ffffff",
        "SETTING_SUBTEXT_SECONDARY_COLOR": "ffffff",
        "SETTING_BG_COLOR": "000055",
        "SETTING_PIP_COLOR_PRIMARY": "ffffff",
        "SETTING_PIP_COLOR_SECONDARY": "0055aa",
        "SETTING_RING_STROKE_COLOR": "000000",
        "SETTING_RING_NIGHT_COLOR": "0000aa",
        "SETTING_RING_DAY_COLOR": "00aaff",
        "SETTING_RING_SUNRISE_COLOR": "0055ff",
        "SETTING_RING_SUNSET_COLOR": "0055ff",
        "SETTING_SUN_STROKE_COLOR": "ffffff",
        "SETTING_SUN_FILL_COLOR": "00aaff"
    },
    "sandTheme": {
        "SETTING_TIME_COLOR": "000000",
        "SETTING_SUBTEXT_PRIMARY_COLOR": "000000",
        "SETTING_SUBTEXT_SECONDARY_COLOR": "550000",
        "SETTING_BG_COLOR": "ffff00",
        "SETTING_PIP_COLOR_PRIMARY": "aa5500",
        "SETTING_PIP_COLOR_SECONDARY": "ffaa00",
        "SETTING_RING_STROKE_COLOR": "ffff00",
        "SETTING_RING_NIGHT_COLOR": "aa5500",
        "SETTING_RING_DAY_COLOR": "ffff00",
        "SETTING_RING_SUNRISE_COLOR": "ffaa00",
        "SETTING_RING_SUNSET_COLOR": "ffaa00",
        "SETTING_SUN_STROKE_COLOR": "aa5500",
        "SETTING_SUN_FILL_COLOR": "ffaa55"
    },
    "greyTheme": {
        "SETTING_TIME_COLOR": "ffffff",
        "SETTING_SUBTEXT_PRIMARY_COLOR": "ffffff",
        "SETTING_SUBTEXT_SECONDARY_COLOR": "ffffff",
        "SETTING_BG_COLOR": "000000",
        "SETTING_PIP_COLOR_PRIMARY": "ffffff",
        "SETTING_PIP_COLOR_SECONDARY": "aaaaaa",
        "SETTING_RING_STROKE_COLOR": "ffffff",
        "SETTING_RING_NIGHT_COLOR": "000000",
        "SETTING_RING_DAY_COLOR": "aaaaaa",
        "SETTING_RING_SUNRISE_COLOR": "555555",
        "SETTING_RING_SUNSET_COLOR": "555555",
        "SETTING_SUN_STROKE_COLOR": "000000",
        "SETTING_SUN_FILL_COLOR": "ffffff"
    },
    "userTeal1": {
        "SETTING_TIME_COLOR": "00aaaa",
        "SETTING_SUBTEXT_PRIMARY_COLOR": "ffff55",
        "SETTING_SUBTEXT_SECONDARY_COLOR": "ffaa55",
        "SETTING_BG_COLOR": "000000",
        "SETTING_PIP_COLOR_PRIMARY": "000000",
        "SETTING_PIP_COLOR_SECONDARY": "000000",
        "SETTING_RING_STROKE_COLOR": "005555",
        "SETTING_RING_NIGHT_COLOR": "000000",
        "SETTING_RING_DAY_COLOR": "55ffff",
        "SETTING_RING_SUNRISE_COLOR": "ff5500",
        "SETTING_RING_SUNSET_COLOR": "ff5500",
        "SETTING_SUN_STROKE_COLOR": "005555",
        "SETTING_SUN_FILL_COLOR": "ffff55"
    },
    "bwTheme1": {
        "SETTING_TIME_COLOR": "000000",
        "SETTING_SUBTEXT_PRIMARY_COLOR": "000000",
        "SETTING_SUBTEXT_SECONDARY_COLOR": "000000",
        "SETTING_BG_COLOR": "ffffff",
        "SETTING_PIP_COLOR_PRIMARY": "000000",
        "SETTING_PIP_COLOR_SECONDARY": "000000",
        "SETTING_RING_STROKE_COLOR": "000000",
        "SETTING_RING_NIGHT_COLOR": "000000",
        "SETTING_RING_DAY_COLOR": "ffffff",
        "SETTING_RING_SUNRISE_COLOR": "aaaaaa",
        "SETTING_RING_SUNSET_COLOR": "aaaaaa",
        "SETTING_SUN_STROKE_COLOR": "000000",
        "SETTING_SUN_FILL_COLOR": "ffffff"
    },
    "bwTheme2": {
        "SETTING_TIME_COLOR": "ffffff",
        "SETTING_SUBTEXT_PRIMARY_COLOR": "ffffff",
        "SETTING_SUBTEXT_SECONDARY_COLOR": "ffffff",
        "SETTING_BG_COLOR": "000000",
        "SETTING_PIP_COLOR_PRIMARY": "ffffff",
        "SETTING_PIP_COLOR_SECONDARY": "ffffff",
        "SETTING_RING_STROKE_COLOR": "000000",
        "SETTING_RING_NIGHT_COLOR": "000000",
        "SETTING_RING_DAY_COLOR": "ffffff",
        "SETTING_RING_SUNRISE_COLOR": "aaaaaa",
        "SETTING_RING_SUNSET_COLOR": "aaaaaa",
        "SETTING_SUN_STROKE_COLOR": "000000",
        "SETTING_SUN_FILL_COLOR": "ffffff"
    },
    "bwTheme3": {
        "SETTING_TIME_COLOR": "000000",
        "SETTING_SUBTEXT_PRIMARY_COLOR": "000000",
        "SETTING_SUBTEXT_SECONDARY_COLOR": "aaaaaa",
        "SETTING_BG_COLOR": "ffffff",
        "SETTING_PIP_COLOR_PRIMARY": "000000",
        "SETTING_PIP_COLOR_SECONDARY": "000000",
        "SETTING_RING_STROKE_COLOR": "ffffff",
        "SETTING_RING_NIGHT_COLOR": "000000",
        "SETTING_RING_DAY_COLOR": "ffffff",
        "SETTING_RING_SUNRISE_COLOR": "aaaaaa",
        "SETTING_RING_SUNSET_COLOR": "aaaaaa",
        "SETTING_SUN_STROKE_COLOR": "000000",
        "SETTING_SUN_FILL_COLOR": "ffffff"
    },
    "bwTheme4": {
        "SETTING_TIME_COLOR": "ffffff",
        "SETTING_SUBTEXT_PRIMARY_COLOR": "ffffff",
        "SETTING_SUBTEXT_SECONDARY_COLOR": "ffffff",
        "SETTING_BG_COLOR": "000000",
        "SETTING_PIP_COLOR_PRIMARY": "ffffff",
        "SETTING_PIP_COLOR_SECONDARY": "ffffff",
        "SETTING_RING_STROKE_COLOR": "000000",
        "SETTING_RING_NIGHT_COLOR": "000000",
        "SETTING_RING_DAY_COLOR": "000000",
        "SETTING_RING_SUNRISE_COLOR": "aaaaaa",
        "SETTING_RING_SUNSET_COLOR": "aaaaaa",
        "SETTING_SUN_STROKE_COLOR": "000000",
        "SETTING_SUN_FILL_COLOR": "ffffff"
    }
};

// Generate night presets from shared themes
const nightPresets = {};
Object.keys(sharedThemes).forEach(themeName => {
    const dayTheme = sharedThemes[themeName];
    const nightTheme = {};
    
    Object.keys(dayTheme).forEach(dayKey => {
        const nightKey = dayKey.replace('SETTING_', 'SETTING_NIGHT_');
        nightTheme[nightKey] = dayTheme[dayKey];
    });
    
    nightPresets[themeName] = nightTheme;
});

// SVG templates for previews (extracted from config.json)
const svgPreviewTemplate = `<svg id="svg-preview" xmlns="http://www.w3.org/2000/svg" width="144" height="168" fill="none">
    <path id="SETTING_RING_NIGHT_COLOR" fill="#05A" d="M0 86h144v82H0z"/>
    <path id="SETTING_RING_DAY_COLOR" fill="#05AAFF" d="M0 0h144v82H0z"/>
    <path id="SETTING_SUN_FILL_COLOR" fill="#FFA" d="M52 8.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z"/>
    <path id="SETTING_SUN_STROKE_COLOR" fill="#000" fill-rule="evenodd" d="M43.5 14a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm0 3a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z" clip-rule="evenodd"/>
    <path id="SETTING_RING_SUNRISE_COLOR" fill="#FAA" d="M19 72v25H0V72h19Z"/>
    <path id="SETTING_RING_SUNSET_COLOR" fill="#FFAA01" d="M144 72v25h-19V72h19Z"/>
    <path id="SETTING_BG_COLOR" fill="#fff" d="M16 16h112v136H16z"/>
    <path id="SETTING_PIP_COLOR_SECONDARY" fill="#AAA" d="M17 19.121 19.12 17l4.243 4.243-2.122 2.12L17 19.122ZM125.243 17l2.121 2.121-4.243 4.243L121 21.243 125.243 17ZM17 149.243l2.121 2.121 4.243-4.243L21.242 145 17 149.243ZM125.243 151.364l2.121-2.121-4.243-4.243-2.121 2.121 4.243 4.243ZM15.83 105.404l5.949-.783.391 2.975-5.948.783-.392-2.975ZM16.49 38.275l5.796 1.553-.777 2.897-5.795-1.553.777-2.897ZM33.275 151.51l1.552-5.796 2.898.776-1.553 5.796-2.897-.776ZM34.827 22.286l-1.552-5.796 2.897-.776 1.553 5.795-2.898.777ZM90.595 145.83l.784 5.949-2.975.391-.783-5.949 2.974-.391ZM87.621 21.779l.783-5.95 2.975.392-.784 5.95-2.974-.392ZM51.62 151.778l.784-5.948 2.974.391-.783 5.949-2.974-.392ZM54.595 15.83l.784 5.949-2.975.391-.783-5.949 2.974-.391ZM106.827 152.286l-1.552-5.796 2.897-.776 1.553 5.795-2.898.777ZM105.275 21.51l1.552-5.796 2.898.776-1.553 5.796-2.897-.777ZM122.221 104.621l5.949.783-.391 2.975-5.949-.783.391-2.975ZM121.714 39.827l5.795-1.552.777 2.897-5.796 1.553-.776-2.898ZM15.714 127.827l5.795-1.552.777 2.897-5.796 1.553-.776-2.898ZM16.221 60.621l5.95.783-.392 2.975-5.95-.783.392-2.975Z"/>
</svg>`;

const svgNightPreviewTemplate = `<svg id="svg-night-preview" xmlns="http://www.w3.org/2000/svg" width="144" height="168" fill="none">
    <path id="SETTING_NIGHT_RING_NIGHT_COLOR" fill="#05A" d="M0 86h144v82H0z"/>
    <path id="SETTING_NIGHT_RING_DAY_COLOR" fill="#05AAFF" d="M0 0h144v82H0z"/>
    <path id="SETTING_NIGHT_SUN_FILL_COLOR" fill="#FFA" d="M52 8.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z"/>
    <path id="SETTING_NIGHT_SUN_STROKE_COLOR" fill="#000" fill-rule="evenodd" d="M43.5 14a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm0 3a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z" clip-rule="evenodd"/>
    <path id="SETTING_NIGHT_RING_SUNRISE_COLOR" fill="#FAA" d="M19 72v25H0V72h19Z"/>
    <path id="SETTING_NIGHT_RING_SUNSET_COLOR" fill="#FFAA01" d="M144 72v25h-19V72h19Z"/>
    <path id="SETTING_NIGHT_BG_COLOR" fill="#fff" d="M16 16h112v136H16z"/>
    <path id="SETTING_NIGHT_PIP_COLOR_SECONDARY" fill="#AAA" d="M17 19.121 19.12 17l4.243 4.243-2.122 2.12L17 19.122ZM125.243 17l2.121 2.121-4.243 4.243L121 21.243 125.243 17ZM17 149.243l2.121 2.121 4.243-4.243L21.242 145 17 149.243ZM125.243 151.364l2.121-2.121-4.243-4.243-2.121 2.121 4.243 4.243ZM15.83 105.404l5.949-.783.391 2.975-5.948.783-.392-2.975ZM16.49 38.275l5.796 1.553-.777 2.897-5.795-1.553.777-2.897ZM33.275 151.51l1.552-5.796 2.898.776-1.553 5.796-2.897-.776ZM34.827 22.286l-1.552-5.796 2.897-.776 1.553 5.795-2.898.777ZM90.595 145.83l.784 5.949-2.975.391-.783-5.949 2.974-.391ZM87.621 21.779l.783-5.95 2.975.392-.784 5.95-2.974-.392ZM51.62 151.778l.784-5.948 2.974.391-.783 5.949-2.974-.392ZM54.595 15.83l.784 5.949-2.975.391-.783-5.949 2.974-.391ZM106.827 152.286l-1.552-5.796 2.897-.776 1.553 5.795-2.898.777ZM105.275 21.51l1.552-5.796 2.898.776-1.553 5.796-2.897-.777ZM122.221 104.621l5.949.783-.391 2.975-5.949-.783.391-2.975ZM121.714 39.827l5.795-1.552.777 2.897-5.796 1.553-.776-2.898ZM15.714 127.827l5.795-1.552.777 2.897-5.796 1.553-.776-2.898ZM16.221 60.621l5.95.783-.392 2.975-5.95-.783.392-2.975Z"/>
</svg>`;

// Utility functions
function hexToDecimal(hexColor) {
    // Remove # if present
    hexColor = hexColor.replace('#', '');
    return parseInt(hexColor, 16);
}

function decimalToHex(decimalColor) {
    return ('0' + decimalColor.toString(16)).slice(-2);
}

function convertToHexFromDecimal(decimal) {
    const r = (decimal >> 16) & 0xFF;
    const g = (decimal >> 8) & 0xFF;
    const b = decimal & 0xFF;
    return '#' + decimalToHex(r) + decimalToHex(g) + decimalToHex(b);
}

function toggleCustomSection(show, isNight) {
    const prefix = isNight ? 'SETTING_NIGHT_' : 'SETTING_';
    const customFields = [
        prefix + 'TIME_COLOR',
        prefix + 'SUBTEXT_PRIMARY_COLOR',
        prefix + 'SUBTEXT_SECONDARY_COLOR',
        prefix + 'BG_COLOR',
        prefix + 'PIP_COLOR_PRIMARY',
        prefix + 'PIP_COLOR_SECONDARY',
        prefix + 'RING_STROKE_COLOR',
        prefix + 'RING_NIGHT_COLOR',
        prefix + 'RING_DAY_COLOR',
        prefix + 'RING_SUNRISE_COLOR',
        prefix + 'RING_SUNSET_COLOR',
        prefix + 'SUN_STROKE_COLOR',
        prefix + 'SUN_FILL_COLOR'
    ];

    const section = document.getElementById(isNight ? 'night-custom-colors' : 'day-custom-colors');
    if (section) {
        section.style.display = show ? 'block' : 'none';
    }
}

function updateSVGColors(colorKey, colorValue, isNight) {
    const svgId = isNight ? 'svg-night-preview' : 'svg-preview';
    const element = document.querySelector(`#${svgId} #${colorKey}`);
    if (element) {
        let hexColor;
        if (typeof colorValue === 'number') {
            hexColor = convertToHexFromDecimal(colorValue);
        } else {
            hexColor = colorValue.startsWith('#') ? colorValue : '#' + colorValue;
        }
        element.setAttribute('fill', hexColor);
    }
}

function applyPreset() {
    const presetSelector = document.getElementById('day-preset');
    const selectedPreset = presetSelector.value;

    if (selectedPreset === "custom") {
        toggleCustomSection(true, false);
    } else {
        toggleCustomSection(false, false);

        const colors = sharedThemes[selectedPreset];
        Object.keys(colors).forEach(key => {
            const input = document.getElementById(key);
            if (input) {
                input.value = '#' + colors[key];
                updateSVGColors(key, colors[key], false);
            }
        });
    }
}

function applyNightPreset() {
    const presetSelector = document.getElementById('night-preset');
    const selectedPreset = presetSelector.value;

    if (selectedPreset === "custom") {
        toggleCustomSection(true, true);
    } else {
        toggleCustomSection(false, true);

        const colors = nightPresets[selectedPreset];
        Object.keys(colors).forEach(key => {
            const input = document.getElementById(key);
            if (input) {
                input.value = '#' + colors[key];
                updateSVGColors(key, colors[key], true);
            }
        });
    }
}

function attachColorListeners() {
    // Day theme color listeners
    Object.keys(sharedThemes.default).forEach(key => {
        const colorPicker = document.getElementById(key);
        if (colorPicker) {
            colorPicker.addEventListener('input', function() {
                updateSVGColors(key, this.value, false);
            });
        }
    });

    // Night theme color listeners
    Object.keys(nightPresets.default).forEach(key => {
        const colorPicker = document.getElementById(key);
        if (colorPicker) {
            colorPicker.addEventListener('input', function() {
                updateSVGColors(key, this.value, true);
            });
        }
    });
}

function exportTheme() {
    const colorKeys = Object.keys(sharedThemes.default);
    const themeData = {};

    // Convert all colors to hex
    colorKeys.forEach(key => {
        const colorValue = document.getElementById(key).value;
        themeData[key] = colorValue;
    });

    // Convert to JSON
    const jsonData = JSON.stringify(themeData, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    // Create a download link
    const a = document.createElement("a");
    a.href = url;
    a.download = "watchface-theme.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function saveSettings() {
    const form = document.getElementById('config-form');
    const formData = new FormData(form);
    const settings = {};

    // Convert form data to message format
    for (let [key, value] of formData.entries()) {
        if (key.includes('COLOR')) {
            // Convert hex colors to decimal for Pebble
            settings[key] = hexToDecimal(value);
        } else if (key.includes('SETTING_')) {
            // Handle checkboxes and selects
            const element = document.getElementById(key) || document.querySelector(`[name="${key}"]`);
            if (element) {
                if (element.type === 'checkbox') {
                    settings[key] = element.checked ? 1 : 0;
                } else {
                    settings[key] = value;
                }
            }
        }
    }

    // Get the return URL parameter
    function getQueryParam(variable, defaultValue) {
        const query = location.search.substring(1);
        const vars = query.split('&');
        for (let i = 0; i < vars.length; i++) {
            const pair = vars[i].split('=');
            if (pair[0] === variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        return defaultValue || false;
    }
    
    const returnTo = getQueryParam('return_to', 'pebblejs://close#');

    // Close and return data via URL
    document.location = returnTo + encodeURIComponent(JSON.stringify(settings));
}

function showMessage(text, type) {
    // Remove any existing messages
    const existingMessage = document.querySelector('.success-message, .error-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message
    const message = document.createElement('div');
    message.className = type === 'success' ? 'success-message' : 'error-message';
    message.textContent = text;
    
    // Insert at the top of the container
    const container = document.querySelector('.config-container');
    container.insertBefore(message, container.firstChild);

    // Remove after 3 seconds
    setTimeout(() => {
        message.remove();
    }, 3000);
}

function initializePreviews() {
    // Initialize day theme preview
    const dayPreviewContainer = document.getElementById('svg-preview-container');
    if (dayPreviewContainer) {
        dayPreviewContainer.innerHTML = svgPreviewTemplate;
    }

    // Initialize night theme preview
    const nightPreviewContainer = document.getElementById('svg-night-preview-container');
    if (nightPreviewContainer) {
        nightPreviewContainer.innerHTML = svgNightPreviewTemplate;
    }
}

function initializeNightThemeToggle() {
    const useNightThemeToggle = document.getElementById('SETTING_USE_NIGHT_THEME');
    const nightPreviewContainer = document.getElementById('night-preview-container');
    const nightPresetSelector = document.getElementById('night-preset');

    function toggleNightPresetAndPreview() {
        const isNightThemeEnabled = useNightThemeToggle.checked;
        
        if (nightPresetSelector) {
            const nightPresetSection = nightPresetSelector.closest('.form-group');
            if (nightPresetSection) {
                nightPresetSection.style.display = isNightThemeEnabled ? 'block' : 'none';
            }
        }
        
        if (nightPreviewContainer) {
            nightPreviewContainer.style.display = isNightThemeEnabled ? 'block' : 'none';
        }
    }

    if (useNightThemeToggle) {
        useNightThemeToggle.addEventListener('change', toggleNightPresetAndPreview);
        toggleNightPresetAndPreview(); // Initialize state
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load existing settings if provided
    loadExistingSettings();
    
    // Initialize SVG previews
    initializePreviews();

    // Set up event listeners
    const dayPresetSelector = document.getElementById('day-preset');
    if (dayPresetSelector) {
        dayPresetSelector.addEventListener('change', applyPreset);
    }

    const nightPresetSelector = document.getElementById('night-preset');
    if (nightPresetSelector) {
        nightPresetSelector.addEventListener('change', applyNightPreset);
    }

    const exportButton = document.getElementById('export-theme');
    if (exportButton) {
        exportButton.addEventListener('click', exportTheme);
    }

    const configForm = document.getElementById('config-form');
    if (configForm) {
        configForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveSettings();
        });
    }

    // Initialize presets and color listeners
    applyPreset();
    applyNightPreset();
    attachColorListeners();
    initializeNightThemeToggle();

    // Initialize day theme preview colors
    Object.keys(sharedThemes.default).forEach(key => {
        const colorValue = document.getElementById(key).value;
        updateSVGColors(key, colorValue, false);
    });

    // Initialize night theme preview colors
    Object.keys(nightPresets.default).forEach(key => {
        const colorValue = document.getElementById(key).value;
        updateSVGColors(key, colorValue, true);
    });
});

// Get URL parameters for initial values
function getQueryParam(variable, defaultValue) {
    const query = location.search.substring(1);
    const vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        if (pair[0] === variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return defaultValue || false;
}

// Load existing settings if provided via URL
function loadExistingSettings() {
    const settings = getQueryParam('settings', '');
    if (settings) {
        try {
            const configData = JSON.parse(decodeURIComponent(settings));
            
            // Apply existing settings to form
            Object.keys(configData).forEach(key => {
                const element = document.getElementById(key);
                if (element) {
                    if (element.type === 'checkbox') {
                        element.checked = configData[key] === 1;
                    } else if (element.type === 'color') {
                        // Convert decimal back to hex for color inputs
                        const hexColor = '#' + (configData[key] || 0).toString(16).padStart(6, '0');
                        element.value = hexColor;
                    } else {
                        element.value = configData[key];
                    }
                }
            });
            
            // Update presets based on loaded colors
            applyPreset();
            applyNightPreset();
        } catch (e) {
            console.error('Error loading existing settings:', e);
        }
    }
}