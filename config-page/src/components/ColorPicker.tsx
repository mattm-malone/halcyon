import React from 'react';
import { useConfig, useCapabilities } from '../context/PebbleConfigContext';
import { Settings } from '../context/types';
import { PEBBLE_COLORS, getColorName } from '../data/colors';

export type ColorMode = 'color' | 'bw' | 'bw-grey';

export const COLOR_PALETTES: Record<ColorMode, string[]> = {
  color: PEBBLE_COLORS,
  bw: ['000000', 'FFFFFF'],
  'bw-grey': ['000000', 'FFFFFF', 'AAAAAA'],
};

interface ColorPickerProps {
  label: string;
  messageKey: keyof Settings;
  mode?: ColorMode;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ label, messageKey, mode }) => {
  const { settings, updateSetting } = useConfig();
  const capabilities = useCapabilities();
  const [isOpen, setIsOpen] = React.useState(false);
  const rawValue = settings[messageKey];
  const value = (typeof rawValue === 'string' ? rawValue : '000000').toUpperCase().replace('#', '');

  const resolvedMode: ColorMode = mode ?? (capabilities.COLOR ? 'color' : 'bw-grey');
  const palette = COLOR_PALETTES[resolvedMode];

  return (
    <div className="pebble-item pebble-color-picker-v2" onClick={() => setIsOpen(true)}>
      <label>{label}</label>
      <div className="pebble-color-value">
        <span className="pebble-color-name">{getColorName(value)}</span>
        <div className="pebble-color-swatch-small" style={{ backgroundColor: `#${value}` }} />
      </div>
      {isOpen && (
        <div
          className="pebble-color-modal-overlay"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
        >
          <div className="pebble-color-modal-grid" onClick={(e) => e.stopPropagation()}>
            {palette.map((color) => (
              <div
                key={color}
                className={`pebble-color-swatch ${value === color ? 'active' : ''}`}
                style={{ backgroundColor: `#${color}` }}
                title={getColorName(color)}
                onClick={(e) => {
                  e.stopPropagation();
                  updateSetting(messageKey, color);
                  setIsOpen(false);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
