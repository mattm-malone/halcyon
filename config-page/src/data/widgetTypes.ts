// Widget type definitions — shared between the config page Select dropdowns
// and the WatchPreview component.
// Values MUST match the WidgetType enum in src/c/widgets.h

export interface WidgetOption {
    value: number;
    label: string;
    preview: string;  // Representative text shown in WatchPreview
}

export const WIDGET_OPTIONS: WidgetOption[] = [
    { value: 0, label: 'None', preview: '' },
    { value: 1, label: 'Date', preview: 'MON, JAN 01' },
    { value: 2, label: 'Steps', preview: '1,234 STEPS' },
    { value: 3, label: 'Distance', preview: '0.8 KM' },
    { value: 4, label: 'Battery %', preview: '85%' },
];

// Options without health-related widgets (for non-health platforms)
export const WIDGET_OPTIONS_NO_HEALTH: WidgetOption[] = WIDGET_OPTIONS.filter(
    (o) => o.value !== 2 && o.value !== 3
);
