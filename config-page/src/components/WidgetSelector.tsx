import React from 'react';
import { WatchPreview } from './WatchPreview';
import { Select } from './Select';
import { useCapabilities } from '../context/PebbleConfigContext';
import { WIDGET_OPTIONS, WIDGET_OPTIONS_NO_HEALTH } from '../data/widgetTypes';

export const WidgetSelector: React.FC = () => {
    const capabilities = useCapabilities();
    const widgetOptions = capabilities.HEALTH ? WIDGET_OPTIONS : WIDGET_OPTIONS_NO_HEALTH;

    return (
        <div className="widget-selector-container">
            <div className="widget-selector-preview">
                <WatchPreview />
            </div>
            <div className="widget-selector-controls">
                <Select
                    label="Upper text 2"
                    messageKey="SETTING_WIDGET_UPPER_SECONDARY"
                    options={widgetOptions}
                />
                <Select
                    label="Upper text 1"
                    messageKey="SETTING_WIDGET_UPPER_PRIMARY"
                    options={widgetOptions}
                />
                <Select
                    label="Lower text 1"
                    messageKey="SETTING_WIDGET_LOWER_PRIMARY"
                    options={widgetOptions}
                />
                <Select
                    label="Lower text 2"
                    messageKey="SETTING_WIDGET_LOWER_SECONDARY"
                    options={widgetOptions}
                />
            </div>
        </div>
    );
};
