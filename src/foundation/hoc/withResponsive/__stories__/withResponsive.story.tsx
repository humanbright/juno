import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useRef } from 'react';

import { RcButton } from '../../../../components/Buttons';
import { RcResponsive } from '../../../../components/Responsive';
import { RcTypography } from '../../../../components/Typography';
import { switchToControlKnobs } from '../../../../storybook';
import styled from '../../../styled-components';
import { withResponsive } from '../withResponsive';

export default {
  title: '🔧 Foundation/HoC/withResponsive',
} as Meta;

const ResizeWrapper = styled.div`
  width: 1200px;
  height: 300px;
  resize: horizontal;
  border-style: solid;
  border-color: black;
  border-width: 2px;
  overflow: hidden;
`;

const ResponsiveButton = withResponsive(RcButton, ['size']);

export const WithResponsive: Story = () => {
  switchToControlKnobs();
  const ref = useRef<HTMLDivElement>(null);
  return (
    <>
      <RcTypography color="danger.f02">
        If you want to make duplicate component can responsive size such as
        listItemActions, this hook is better than 'withResponsive'. Because
        there is no need to double count the matched size
      </RcTypography>
      <RcResponsive responsiveTarget={ref}>
        <ResizeWrapper ref={ref}>
          <RcTypography>
            lg: 'large', md: 'medium', sm: 'small', xs: hidden,
          </RcTypography>
          <ResponsiveButton
            hiddenPatterns={'xs'}
            size={['medium.md', 'small.sm', 'large.lg']}
          >
            resize
          </ResponsiveButton>
        </ResizeWrapper>
      </RcResponsive>
    </>
  );
};

WithResponsive.storyName = 'withResponsive';

WithResponsive.args = {};

WithResponsive.argTypes = {};

WithResponsive.parameters = {};
