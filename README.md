# Juno

[![NPM version](https://img.shields.io/npm/v/@ringcentral/juno/latest.svg)](https://www.npmjs.com/package/@ringcentral/juno)

[![NPM beta version](https://img.shields.io/npm/v/@ringcentral/juno/beta.svg)](https://www.npmjs.com/package/@ringcentral/juno?activeTab=versions)

Ringcentral React Component library, make your app have the same user experience as Ringcentral Apps.

base on [MATERIAL-UI](https://material-ui.com/).

Explore Juno with the [interactive live Storybook instance](https://ringcentral.github.io/juno/).

View in [Codesandbox Example](https://codesandbox.io/s/4j370).

### Install

```ts
npm i @ringcentral/juno styled-components
// or
yarn add @ringcentral/juno styled-components
```

### Quick Start

All components we using need contain in the `RcThemeProvider`.

```tsx
import {
  RcAvatar,
  RcTooltip,
  RcButton,
  RcIcon,
  RcLink,
  RcCircularProgress,
  RcThemeProvider,
} from '@ringcentral/juno';
```

```html
<RcThemeProvider>
  <RcAvatar color="lake">SH</RcAvatar>
  <RcButton>Button</RcButton>
  <RcLink>LINK</RcLink>
  <RcCircularProgress />
  <RcCircularProgress size="{30}" color="secondary" />
</RcThemeProvider>
```

### Use DatePicker

if you use `RcDatePicker`, we calculate time depend on `moment.js` you should install moment

```ts
npm i moment
// or
yarn add moment
```

### Use Juno Icon

We can use any component with `RcIcon` prop `symbol`, pass component into symbol that will render svg icon with our `RcIcon` style.

```tsx
import { RcIcon } from '@ringcentral/juno';

import { Phone } from '@ringcentral/juno/icon';

const App = (props) => {
  return (
    <RcThemeProvider>
      <RcIcon symbol={Phone} />
    </RcThemeProvider>
  );
};
```
