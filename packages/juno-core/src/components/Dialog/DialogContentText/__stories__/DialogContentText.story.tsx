import React, { ComponentProps } from 'react';

import { RcDialogContentText } from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  textPaletteChoice,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { MuiDefaultColor } from '../../../Typography/utils';

export default {
  title: '🚀 Cleanup Components/Dialog/DialogContentText',
  component: RcDialogContentText,
  argTypes: {
    color: {
      options: [...MuiDefaultColor, ...textPaletteChoice],
      control: {
        type: 'select',
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
