import React from 'react';

import {
  RcBox,
  RcDefaultDarkTheme,
  RcDefaultHighContrastTheme,
  RcThemeProvider,
  useTheme,
} from '@ringcentral/juno';
import { Title } from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🔧 Foundation/Hooks/useTheme',
  argTypes: {},
} as Meta;

export const ThemeValue = () => {
  const theme = useTheme();
  return (
    <RcBox color="neutral.f06" bgcolor="neutral.elevation">
      <pre>{JSON.stringify(theme, null, 2)}</pre>
    </RcBox>
  );
};

export const useThemeExample: Story<{}> = () => {
  return (
    <>
      <Title>Current Theme</Title>
      <ThemeValue />
      <Title>Dark Theme</Title>
      <RcThemeProvider theme={RcDefaultDarkTheme}>
        <ThemeValue />
      </RcThemeProvider>
      <Title>HighContrast Theme</Title>
      <RcThemeProvider theme={RcDefaultHighContrastTheme}>
        <ThemeValue />
      </RcThemeProvider>
    </>
  );
};

useThemeExample.args = {};
useThemeExample.storyName = 'useTheme';
