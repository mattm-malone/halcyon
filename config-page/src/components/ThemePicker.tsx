import React from 'react';
import { useConfig } from '../context/PebbleConfigContext';
import { Settings } from '../context/types';
import { FormItem } from './FormItem';

export const ThemePicker: React.FC<{
  label: string;
  description?: string;
  messageKey: keyof Settings;
  themes: Record<string, Record<string, string>>;
}> = ({ label, description, messageKey, themes }) => {
  const { settings, updateSetting } = useConfig();
  const currentValue = (settings[messageKey] || '') as string;
  const selectId = React.useId();

  const handleThemeChange = (themeName: string) => {
    updateSetting(messageKey, themeName);

    const theme = themes[themeName];
    if (theme) {
      Object.entries(theme).forEach(([key, value]) => {
        updateSetting(key, value);
      });
    }
  };

  return (
    <FormItem label={label} description={description} className="pebble-theme-picker" htmlFor={selectId}>
      <select id={selectId} value={currentValue} onChange={(e) => handleThemeChange(e.target.value)}>
        <option value="custom">Custom</option>
        {Object.keys(themes).map((themeName) => (
          <option key={themeName} value={themeName}>
            {themeName.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
          </option>
        ))}
      </select>
    </FormItem>
  );
};
