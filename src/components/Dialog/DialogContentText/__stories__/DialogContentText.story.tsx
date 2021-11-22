import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
  textPaletteChoice,
} from '../../../../storybook';
import { MuiDefaultColor } from '../../../Typography/utils';
import { RcDialogContentText } from '../DialogContentText';

export default {
  title: '🚀 Cleanup Components/Dialog/DialogContentText',
  component: RcDialogContentText,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [...MuiDefaultColor, ...textPaletteChoice],
      },
    },
    ...sortInDocTable<keyof DialogContentTextProps>([
      'display',
      'align',
      'weight',
      'gutterBottom',
      'paragraph',
      'noWrap',
    ]),
    ...notControlInDocTable<keyof DialogContentTextProps>([]),
    ...notShowInDocTable<keyof DialogContentTextProps>([]),
  },
} as Meta;

type DialogContentTextProps = ComponentProps<typeof RcDialogContentText>;

export const DialogContentText: Story<DialogContentTextProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();
  return <RcDialogContentText {...args}>{children}</RcDialogContentText>;
};

DialogContentText.storyName = 'DialogContentText';

DialogContentText.args = {
  children: 'You can set my maximum width and whether to adapt or not.',
};

DialogContentText.argTypes = {
  ...notControlInDocTable<keyof DialogContentTextProps>([]),
};

DialogContentText.parameters = {
  tags: [
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
