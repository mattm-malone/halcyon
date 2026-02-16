import React from 'react';
import { useConfig } from '../context/PebbleConfigContext';
import { Settings } from '../context/types';

export const ThemePicker: React.FC<{
  label: string;
  messageKey: keyof Settings;
  themes: Record<string, Record<string, string>>;
}> = ({ label, messageKey, themes }) => {
  const { settings, updateSetting } = useConfig();
  const currentValue = (settings[messageKey] || '') as string;

  const handleThemeChange = (themeName: string) => {
    updateSetting(messageKey, themeName);

    // If it's a known theme (not "custom" or empty), apply its colors
    const theme = themes[themeName];
    if (theme) {
      Object.entries(theme).forEach(([key, value]) => {
        updateSetting(key, value);
      });
    }
  };

  return (
    <div className="pebble-item pebble-theme-picker">
      <label>{label}</label>
      <select value={currentValue} onChange={(e) => handleThemeChange(e.target.value)}>
        <option value="custom">Custom</option>
        {Object.keys(themes).map((themeName) => (
          <option key={themeName} value={themeName}>
            {themeName.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
          </option>
        ))}
      </select>
    </div>
  );
};
