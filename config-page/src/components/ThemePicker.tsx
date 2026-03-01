import React from 'react';
import { useConfig } from '../context/PebbleConfigContext';
import { Settings } from '../context/types';
import { FormItem } from './FormItem';
import { GridList, GridListItem, Button, Text } from 'react-aria-components';
import { WatchPreview, WatchPreviewProps } from './WatchPreview';
import customIconUrl from '../assets/custom-icon.svg';

export const ThemePicker: React.FC<{
  label?: string;
  description?: string;
  messageKey: keyof Settings;
  themes: Record<string, { name: string; settings: Record<string, string> }>;
  watchPreviewProps?: Partial<WatchPreviewProps>;
}> = ({ label, description, messageKey, themes, watchPreviewProps }) => {
  const { settings, updateSetting } = useConfig();
  const currentValue = settings[messageKey];

  const handleThemeChange = (themeId: string) => {
    updateSetting(messageKey, themeId);

    if (themeId === 'custom') return;

    const theme = themes[themeId];
    if (theme) {
      // Access .settings specifically
      Object.entries(theme.settings).forEach(([key, value]) => {
        updateSetting(key, value);
      });
    }
  };

  const themeList = React.useMemo(() => [
    { id: 'custom', name: 'Custom', settings: {} },
    ...Object.entries(themes).map(([id, theme]) => ({
      id,
      name: theme.name,
      settings: theme.settings,
    })),
  ], [themes]);

  return (
    <FormItem label={label} description={description} className="pebble-theme-picker">
      <GridList
        items={themeList}
        selectionMode="single"
        selectedKeys={[currentValue]}
        onSelectionChange={(keys) => {
          const selected = Array.from(keys)[0] as string;
          if (selected) handleThemeChange(selected);
        }}
        layout='grid'
        aria-label={label}
        className="pebble-theme-grid"
      >
        {(item) => (
          <GridListItem id={item.id} className="pebble-theme-card" textValue={item.name}>
            <div className="pebble-theme-card-preview">
              {item.id === 'custom' ? (
                <div className="pebble-custom-icon">
                  <img src={customIconUrl} alt="" width={40} height={38} />
                </div>
              ) : (
                <WatchPreview overrideSettings={item.settings} {...watchPreviewProps} />
              )}
            </div>
            <Text className="pebble-theme-card-label">
              {item.name}
            </Text>
          </GridListItem>
        )}
      </GridList>
    </FormItem>
  );
};
