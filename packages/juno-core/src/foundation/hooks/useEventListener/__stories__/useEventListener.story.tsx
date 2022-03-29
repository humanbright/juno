import React, { useRef } from 'react';

import { RcBox, RcButton, RcText, useEventListener } from '@ringcentral/juno';
import { Title } from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🔧 Foundation/Hooks/useEventListener',
  argTypes: {},
} as Meta;

export const UseEventListenerExample: Story<{}> = () => {
  const ref = useRef<HTMLElement>(null);

  const listener = useEventListener(ref, 'click', () =>
    console.log('trigger event'),
  );

  const keydownListener = useEventListener(
    window,
    'keyup',
    (e: KeyboardEvent) => console.log('window key up', e.key),
  );

  return (
    <>
      <Title>
        Click Button that event bind with{' '}
        <RcText highlight>useEventListener</RcText>
      </Title>
      <RcButton ref={ref}>Click</RcButton>
      <br />
      <br />
      <RcBox textAlign="right">
        <RcButton onClick={() => listener.listen()}>Listen again</RcButton>{' '}
        <RcButton onClick={() => listener.remove()}>Remove listen</RcButton>
      </RcBox>
      <br />
      <br />
      <Title>
        keydown in this window that event bind with{' '}
        <RcText highlight>useEventListener</RcText>
      </Title>
      <RcBox textAlign="right">
        <RcButton color="danger.b04" onClick={() => keydownListener.listen()}>
          Listen again
        </RcButton>{' '}
        <RcButton color="danger.b04" onClick={() => keydownListener.remove()}>
          Remove listen
        </RcButton>
      </RcBox>
    </>
  );
};

UseEventListenerExample.args = {};
UseEventListenerExample.storyName = 'useEventListener';
