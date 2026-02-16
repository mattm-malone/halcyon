import React from 'react';
import { useConfig } from '../context/PebbleConfigContext';
import { Settings } from '../context/types';

export const Toggle: React.FC<{ label: string; messageKey: keyof Settings }> = ({ label, messageKey }) => {
  const { settings, updateSetting } = useConfig();
  const value = !!settings[messageKey];

  return (
    <div className="pebble-item pebble-toggle">
      <label>{label}</label>
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => updateSetting(messageKey, e.target.checked ? 1 : 0)}
      />
    </div>
  );
};
