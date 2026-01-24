import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import ThemePreview from './ThemePreview';

interface PresetSelectorProps {
  themeType: 'day' | 'night';
  onPresetChange?: (preset: string) => void;
}

export const PresetSelector: React.FC<PresetSelectorProps> = ({ themeType, onPresetChange }) => {
  const { themeManager, isLoading } = useTheme();
  const [preset, setPreset] = useState<string>('default');
  const [themes, setThemes] = useState<string[]>([]);

  useEffect(() => {
    if (isLoading || !themeManager) return;

    // Load available themes
    const availableThemes = themeManager.getAvailableThemes();
    setThemes(availableThemes);

    // Load current preset
    const currentPreset = themeManager.getCurrentPreset(themeType);
    setPreset(currentPreset);
  }, [themeManager, isLoading, themeType]);

  const handlePresetChange = (newPreset: string) => {
    setPreset(newPreset);

    if (themeManager) {
      themeManager.applyPreset(newPreset, themeType);
      onPresetChange?.(newPreset);
    }
  };

  const handleCustomSelect = () => {
    handlePresetChange('custom');
  };

  if (isLoading) {
    return <div className="preset-selector-loading">Loading themes...</div>;
  }

  return (
    <div className="preset-selectors">
      <div className="preset-selector-label">
        {themeType.charAt(0).toUpperCase() + themeType.slice(1)} Theme:
      </div>
      <div className="preset-selector">
        {/* Custom option */}
        <div className="preset-option">
          <input
            type="radio"
            id={`${themeType}-custom`}
            name={`${themeType}-theme`}
            checked={preset === 'custom'}
            onChange={handleCustomSelect}
            className="preset-radio"
          />
          <label htmlFor={`${themeType}-custom`} className="preset-label">
            <div className="preset-custom-preview">🎨</div>
            <span className="preset-name">Custom</span>
          </label>
        </div>

        {/* Theme previews */}
        {themes.map((themeName) => (
          <ThemePreview
            key={themeName}
            themeName={themeName}
            themeType={themeType}
            isSelected={preset === themeName}
            onClick={() => handlePresetChange(themeName)}
          />
        ))}
      </div>
    </div>
  );
};

export default PresetSelector;