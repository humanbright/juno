import React, { ComponentProps } from 'react';

import { RcBox, RcPortal, RcText } from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Portal',
  component: RcPortal,
  argTypes: {
    ...sortInDocTable<keyof PortalProps>([]),
    ...notControlInDocTable<keyof PortalProps>([]),
    ...notShowInDocTable<keyof PortalProps>([]),
  },
} as Meta;

type PortalProps = ComponentProps<typeof RcPortal>;

export const Portal: Story<PortalProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return (
    <RcPortal {...args}>
      <RcBox position="absolute" top="100px" left="100px">
        <RcText color="neutral.f06">
          This text is portaled at the end of document.body!
        </RcText>
      </RcBox>
    </RcPortal>
  );
};

Portal.storyName = 'Portal';

Portal.args = {};

Portal.argTypes = {
  ...notControlInDocTable<keyof PortalProps>([]),
};

Portal.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/portal/#portal',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
