import React from 'react';
import { useConfig } from '../context/PebbleConfigContext';
import { Settings } from '../context/types';

export const Slider: React.FC<{ label: string; messageKey: keyof Settings; min: number; max: number; step?: number }> = ({ label, messageKey, min, max, step = 1 }) => {
  const { settings, updateSetting } = useConfig();
  const value = settings[messageKey] ?? min;
  const sliderId = React.useId();

  return (
    <div className="pebble-item pebble-slider">
      <div className="pebble-slider-label-row">
        <label htmlFor={sliderId}>{label}</label>
        <span className="pebble-slider-value">{value}</span>
      </div>
      <input
        id={sliderId}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => updateSetting(messageKey, parseInt(e.target.value, 10))}
      />
    </div>
  );
};
