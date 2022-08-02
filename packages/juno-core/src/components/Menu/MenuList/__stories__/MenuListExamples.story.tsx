import React, { ComponentProps } from 'react';

import {
  RcListItemText,
  RcMenuItem,
  RcMenuList,
  RcText,
} from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  Title,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Menu/MenuList/MenuList Examples',
  component: RcMenuList,
  argTypes: {
    ...sortInDocTable<keyof MenuListProps>([
      'autoFocus',
      'autoFocusItem',
      'disabledItemsFocusable',
      'disableListWrap',
      'disablePadding',
      'maxHeight',
      'dense',
    ]),
    ...notControlInDocTable<keyof MenuListProps>(['autoClose']),
    ...notShowInDocTable<keyof MenuListProps>(['variant']),
  },
} as Meta;

type MenuListProps = ComponentProps<typeof RcMenuList>;

export const MenuListTypeMenuExample: Story<MenuListProps> = ({
  children,
  ...args
}) => {
  return (
    <>
      <Title>
        MenuList type="<RcText highlight>menu</RcText>"
      </Title>
      <RcMenuList {...args} variant="menu">
        <RcMenuItem>
          <RcListItemText primary="MenuItem 1" />
        </RcMenuItem>
        <RcMenuItem>
          <RcListItemText primary="MenuItem 2" />
        </RcMenuItem>
        <RcMenuItem disabled>
          <RcListItemText primary="MenuItem 3 (disabled)" />
        </RcMenuItem>
        <RcMenuItem>
          <RcListItemText primary="MenuItem 4" />
        </RcMenuItem>
      </RcMenuList>
    </>
  );
};

MenuListTypeMenuExample.storyName = 'menu type';

export const MenuListTypeSelectedMenuExamples: Story<MenuListProps> = ({
  children,
  ...args
}) => {
  return (
    <>
      <Title>
        MenuList type="<RcText highlight>selectedMenu</RcText>"
      </Title>
      <RcMenuList {...args} variant="selectedMenu">
        <RcMenuItem>
          <RcListItemText primary="MenuItem 1" />
        </RcMenuItem>
        <RcMenuItem selected>
          <RcListItemText primary="MenuItem 2 (selected)" />
        </RcMenuItem>
        <RcMenuItem disabled>
          <RcListItemText primary="MenuItem 3 (disabled)" />
        </RcMenuItem>
        <RcMenuItem>
          <RcListItemText primary="MenuItem 4" />
        </RcMenuItem>
      </RcMenuList>
    </>
  );
};

MenuListTypeSelectedMenuExamples.storyName = 'selectedMenu type';
