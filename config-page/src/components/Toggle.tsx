import React from 'react';
import { Switch } from 'react-aria-components';
import { useConfig } from '../context/PebbleConfigContext';
import { Settings } from '../context/types';
import { FormItem, FormItemLabel } from './FormItem';

export const Toggle: React.FC<{
  label: string;
  description?: string;
  messageKey: keyof Settings;
}> = ({ label, description, messageKey }) => {
  const { settings, updateSetting } = useConfig();
  const isSelected = !!settings[messageKey];


  return (
    <Switch
      isSelected={isSelected}
      onChange={(selected) => updateSetting(messageKey, selected ? 1 : 0)}
      className="pebble-item pebble-toggle"
    >
      <FormItemLabel label={label} description={description} />
      <div className="pebble-switch">
        <div className="pebble-switch-thumb" />
      </div>
    </Switch>
  );
};
