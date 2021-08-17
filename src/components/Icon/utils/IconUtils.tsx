import { BaseSizeKey, logInDev } from '../../../foundation';
import { RcIconSize } from '../Icon';

export const RcIconSizes: Record<RcIconSize, number | string> = {
  xxxlarge: 36,
  xxlarge: 32,
  xlarge: 28,
  large: 24,
  medium: 20,
  small: 16,
  xsmall: 12,
  inherit: 'inherit',
};

export function switchSize(size: any): BaseSizeKey {
  switch (size) {
    case 'extraSmall':
      logInDev({
        component: 'RcIcon',
        message: 'please change extraSmall to xsmall',
      });
      return 'xsmall';
    case 'moreLarge':
      logInDev({
        component: 'RcIcon',
        message: 'please change moreLarge to xlarge',
      });
      return 'xlarge';
    case 'mediumLarge':
      logInDev({
        component: 'RcIcon',
        message: 'please change mediumLarge to xxlarge',
      });
      return 'xxlarge';
    case 'extraLarge':
      logInDev({
        component: 'RcIcon',
        message: 'please change extraLarge to xxxlarge',
      });
      return 'xxxlarge';
    default:
      return size;
  }
}
