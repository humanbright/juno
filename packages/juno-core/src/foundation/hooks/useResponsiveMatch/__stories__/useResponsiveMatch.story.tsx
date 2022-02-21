import React, { useState } from 'react';

import {
  RcButton,
  RcDialog,
  RcDialogActions,
  RcDialogContent,
  RcDialogTitle,
  RcRadio,
  RcRadioGroup,
  RcResponsive,
  RcTypography,
  useResponsiveContext,
  useResponsiveMatch,
} from '@ringcentral/juno';
import { switchToControlKnobs } from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🔧 Foundation/Hooks/useResponsiveMatch',
} as Meta;

const DialogStory = () => {
  const [open, setOpen] = useState(false);
  const bp = useResponsiveContext();
  const { ltSM, gtSM } = useResponsiveMatch();

  return (
    <>
      <RcButton onClick={() => setOpen(true)}>open dialog</RcButton>
      <RcDialog onClose={() => setOpen(false)} open={open}>
        <RcDialogTitle>{bp} Size</RcDialogTitle>
        <RcDialogContent>
          <RcTypography>try to resize screen</RcTypography>
          <RcRadioGroup row={gtSM}>
            <RcRadio label={gtSM ? 'horizontal radio' : 'vertical radio'} />
            <RcRadio label={gtSM ? 'horizontal radio' : 'vertical radio'} />
          </RcRadioGroup>
        </RcDialogContent>
        <RcDialogActions direction={ltSM ? 'vertical' : 'horizontal'}>
          <RcButton
            onClick={() => setOpen(false)}
            color="danger.b04"
            fullWidth={ltSM}
          >
            Cancel
          </RcButton>
          <RcButton fullWidth={ltSM}>OK</RcButton>
        </RcDialogActions>
      </RcDialog>
    </>
  );
};

export const ResponsiveDialog: Story = () => {
  switchToControlKnobs();

  return (
    <RcResponsive>
      <DialogStory />
    </RcResponsive>
  );
};
