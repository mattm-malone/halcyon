import React from 'react';
import { Switch } from 'react-aria-components';
import { useConfig } from '../context/PebbleConfigContext';
import { Settings } from '../context/types';
import { FormItem } from './FormItem';

export const Toggle: React.FC<{
  label: string;
  description?: string;
  messageKey: keyof Settings;
}> = ({ label, description, messageKey }) => {
  const { settings, updateSetting } = useConfig();
  const isSelected = !!settings[messageKey];

  const handleToggle = () => {
    updateSetting(messageKey, isSelected ? 0 : 1);
  };

  const switchId = React.useId();

  return (
    <FormItem
      label={label}
      description={description}
      className="pebble-toggle"
      onClick={handleToggle}
      htmlFor={switchId}
    >
      <Switch
        id={switchId}
        isSelected={isSelected}
        onChange={(selected) => updateSetting(messageKey, selected ? 1 : 0)}
        className="pebble-switch"
        aria-label={label}
      >
        <div className="pebble-switch-thumb" />
      </Switch>
    </FormItem>
  );
};
