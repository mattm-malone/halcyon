import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';
import ToggleSwitch from './ToggleSwitch';

interface AdditionalSettingsProps {
  themeType: 'day' | 'night';
}

export const AdditionalSettings: React.FC<AdditionalSettingsProps> = ({ themeType }) => {
  const { themeManager } = useTheme();
  const { settings, updateSetting } = useSettings();

  const handleToggleChange = (settingKey: string, value: boolean | number) => {
    updateSetting(settingKey, typeof value === 'boolean' ? (value ? 1 : 0) : value);
  };

  return (
    <div className="form-section">
      <h3>Additional Settings</h3>
      
      <div className="form-group">
        <label className="text-label">
          Pip Visibility
        </label>
        <select
          className="pip-visibility-select"
          value={settings.SETTING_PIP_VISIBILITY || 0}
          onChange={(e) => handleToggleChange('SETTING_PIP_VISIBILITY', parseInt(e.target.value))}
        >
          <option value="0">Show All Pips</option>
          <option value="1">Show Major Pips Only</option>
          <option value="2">Hide All Pips</option>
        </select>
      </div>
      <p className="description">Choose how hour markers are displayed around the watch face</p>

      <ToggleSwitch
        checked={settings.SETTING_SHOW_LEADING_ZERO === 1}
        onChange={(checked) => handleToggleChange('SETTING_SHOW_LEADING_ZERO', checked)}
        label="Show Leading Zero"
        id="leading-zero-toggle"
      />
      <p className="description">Display leading zero for single-digit hours (e.g., 09:00 instead of 9:00)</p>

      <ToggleSwitch
        checked={settings.SETTING_USE_LARGE_FONTS === 1}
        onChange={(checked) => handleToggleChange('SETTING_USE_LARGE_FONTS', checked)}
        label="Large Fonts"
        id="large-fonts-toggle"
      />
      <p className="description">Use larger font size for better readability</p>
    </div>
  );
};

export default AdditionalSettings;