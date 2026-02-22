import React from 'react';
import { useConfig } from '../context/PebbleConfigContext';
import { Settings } from '../context/types';
import { FormItem } from './FormItem';

export const Toggle: React.FC<{
  label: string;
  description?: string;
  messageKey: keyof Settings;
}> = ({ label, description, messageKey }) => {
  const { settings, updateSetting } = useConfig();
  const value = !!settings[messageKey];

  const handleToggle = () => {
    updateSetting(messageKey, value ? 0 : 1);
  };

  return (
    <FormItem
      label={label}
      description={description}
      className="pebble-toggle"
      onClick={handleToggle}
    >
      <div className={`pebble-switch ${value ? 'pebble-switch-on' : ''}`}>
        <div className="pebble-switch-thumb" />
      </div>
    </FormItem>
  );
};
