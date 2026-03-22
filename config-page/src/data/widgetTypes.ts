// Widget type definitions — shared between the config page Select dropdowns
// and the WatchPreview component.
// Values MUST match the WidgetType enum in src/c/widgets.h

export interface WidgetOption {
    value: string;
    label: string;
    preview: string;
    category?: string;
}

export const WIDGET_OPTIONS: WidgetOption[] = [
    { value: '', label: 'None', preview: '' },
    // Date/time
    { value: '{date}', label: 'Date', preview: 'MON, JAN 01', category: 'Date & Time' },
    // Solar
    { value: '{sunrise}', label: 'Sunrise Time', preview: '6:42 AM', category: 'Solar' },
    { value: '{sunset}', label: 'Sunset Time', preview: '6:18 PM', category: 'Solar' },
    { value: '{sunrise} ↑{sunset} ↓', label: 'Sunrise & Sunset', preview: '6:42 AM ↑6:18 PM ↓', category: 'Solar' },
    // Health
    { value: '{steps} STEPS', label: 'Steps', preview: '1,234 STEPS', category: 'Health' },
    { value: '{dist} KM', label: 'Distance Walked', preview: '0.8 KM', category: 'Health' },
    // Device
    { value: '{batt}%', label: 'Battery %', preview: '85%', category: 'Device' },
    // Weather
    { value: '{thi}°/{tlo}°', label: 'High / Low', preview: '22°/14°', category: 'Weather' },
    { value: '{temp}° {cond}', label: 'Temp & Condition', preview: '18° CLOUDY', category: 'Weather' },
    { value: '{cond}', label: 'Condition', preview: 'PARTLY CLOUDY', category: 'Weather' },
    { value: '{hum}% HUM', label: 'Humidity', preview: '65% HUM', category: 'Weather' },
    { value: '{wind} KM/H', label: 'Wind Speed', preview: '12 KM/H', category: 'Weather' },
    { value: 'UV {uv}', label: 'UV Index', preview: 'UV 6', category: 'Weather' },
    { value: '{rain}MM RAIN', label: 'Precipitation', preview: '0.5MM RAIN', category: 'Weather' },
    // Custom
    { value: '__custom__', label: 'Custom…', preview: '', category: 'Custom' },
];

// Options without health-related widgets (for non-health platforms)
export const WIDGET_OPTIONS_NO_HEALTH: WidgetOption[] = WIDGET_OPTIONS.filter(
    (o) => o.value !== '{steps} STEPS' && o.value !== '{dist} KM'
);
