import React from 'react';
import { useConfig, useCapabilities, useWatchInfo } from '../context/PebbleConfigContext';
import { Page, Section, Toggle, ColorPicker, Select, ThemePicker, WatchPreview } from '../components';
import themes from '../data/themes.json';
import nightThemes from '../data/themes-night.json';
import themesBw from '../data/themes-bw.json';
import themesBwNight from '../data/themes-bw-night.json';

export const SettingsPage: React.FC = () => {
  const { settings } = useConfig();
  const capabilities = useCapabilities();
  const watchInfo = useWatchInfo();

  const activeThemes = capabilities.BW ? themesBw : themes;
  const activeNightThemes = capabilities.BW ? themesBwNight : nightThemes;

  return (
    <Page title="Halcyon Settings">
      {/* <WatchPreview /> */}

      {/* <Section title="capabilities">{JSON.stringify(capabilities)}</Section> */}
      {/**/}
      {/* <Section title="watchInfo">{JSON.stringify(watchInfo)}</Section> */}

      <Section title="Theme">
        <ThemePicker
          messageKey="SETTING_THEME"
          themes={activeThemes}
        />
        {settings.SETTING_THEME === 'custom' && (
          <>
            <WatchPreview />
            <ColorPicker
              label="Background color"
              messageKey="SETTING_BG_COLOR"
            />
            <ColorPicker
              label="Time color"
              messageKey="SETTING_TIME_COLOR"
            />
            <ColorPicker
              label="Widget text color (primary)"
              messageKey="SETTING_SUBTEXT_PRIMARY_COLOR"
            />
            <ColorPicker
              label="Widget text color (secondary)"
              messageKey="SETTING_SUBTEXT_SECONDARY_COLOR"
            />
            <ColorPicker
              label="Dial marker color (primary)"
              messageKey="SETTING_PIP_COLOR_PRIMARY"
            />
            <ColorPicker
              label="Dial marker color (secondary)"
              messageKey="SETTING_PIP_COLOR_SECONDARY"
            />
            <ColorPicker
              label="Ring outline color"
              messageKey="SETTING_RING_STROKE_COLOR"
            />
            <ColorPicker
              label="Ring day section color"
              messageKey="SETTING_RING_DAY_COLOR"
            />
            <ColorPicker
              label="Ring night section color"
              messageKey="SETTING_RING_NIGHT_COLOR"
            />
            <ColorPicker
              label="Ring sunrise section color"
              messageKey="SETTING_RING_SUNRISE_COLOR"
            />
            <ColorPicker
              label="Ring sunset section color"
              messageKey="SETTING_RING_SUNSET_COLOR"
            />
            <ColorPicker
              label="Sun outline color"
              messageKey="SETTING_SUN_STROKE_COLOR"
            />
            <ColorPicker
              label="Sun fill color"
              messageKey="SETTING_SUN_FILL_COLOR"
            />
          </>
        )}
      </Section>

      <Section title="Night Theme">
        <Toggle
          label="Enable night theme"
          description="If enabled, the selected color scheme will be shown after sunset."
          messageKey="SETTING_USE_NIGHT_THEME"
        />
        {settings.SETTING_USE_NIGHT_THEME === 1 && (
          <>
            <ThemePicker
              messageKey="SETTING_NIGHT_THEME"
              themes={activeNightThemes}
              watchPreviewProps={{ isNight: true }}
            />
            {settings.SETTING_NIGHT_THEME === 'custom' && (
              <>
                <WatchPreview />
                <ColorPicker
                  label="Background color"
                  messageKey="SETTING_NIGHT_BG_COLOR"
                />
                <ColorPicker
                  label="Time color"
                  messageKey="SETTING_NIGHT_TIME_COLOR"
                />
                <ColorPicker
                  label="Widget text color (primary)"
                  messageKey="SETTING_NIGHT_SUBTEXT_PRIMARY_COLOR"
                />
                <ColorPicker
                  label="Widget text color (secondary)"
                  messageKey="SETTING_NIGHT_SUBTEXT_SECONDARY_COLOR"
                />
                <ColorPicker
                  label="Dial marker color (primary)"
                  messageKey="SETTING_NIGHT_PIP_COLOR_PRIMARY"
                />
                <ColorPicker
                  label="Dial marker color (secondary)"
                  messageKey="SETTING_NIGHT_PIP_COLOR_SECONDARY"
                />
                <ColorPicker
                  label="Ring outline color"
                  messageKey="SETTING_NIGHT_RING_STROKE_COLOR"
                />
                <ColorPicker
                  label="Ring day section color"
                  messageKey="SETTING_NIGHT_RING_DAY_COLOR"
                />
                <ColorPicker
                  label="Ring night section color"
                  messageKey="SETTING_NIGHT_RING_NIGHT_COLOR"
                />
                <ColorPicker
                  label="Ring sunrise section color"
                  messageKey="SETTING_NIGHT_RING_SUNRISE_COLOR"
                />
                <ColorPicker
                  label="Ring sunset section color"
                  messageKey="SETTING_NIGHT_RING_SUNSET_COLOR"
                />
                <ColorPicker
                  label="Sun outline color"
                  messageKey="SETTING_NIGHT_SUN_STROKE_COLOR"
                />
                <ColorPicker
                  label="Sun fill color"
                  messageKey="SETTING_NIGHT_SUN_FILL_COLOR"
                />
              </>)}
          </>)}
      </Section>
      <Section title="General">
        <Toggle
          label="Use Large Fonts"
          description="Increase text size for better readability"
          messageKey="SETTING_USE_LARGE_FONTS"
        />
        <Toggle
          label="Show Leading Zero"
          description="Display time as 09:30 instead of 9:30"
          messageKey="SETTING_SHOW_LEADING_ZERO"
        />
        <Select
          label="Dial Markings"
          description="Choose which hour markers appear on the dial"
          messageKey="SETTING_PIP_VISIBILITY"
          options={[
            { label: 'All (Every Hour)', value: 0 },
            { label: 'Only major (Every 4 hours)', value: 1 },
            { label: 'None', value: 2 },
          ]}
        />
      </Section>
    </Page>
  );
};
