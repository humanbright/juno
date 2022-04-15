import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PhoneOff = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M21.373 17.3c.803.071 1.484.39 1.965.905a69.978 69.978 0 0 0 1.865 1.697l.459.399c.57.491 1.262 1.072 2.075 1.742.586.482.976 1.073 1.157 1.757.164.617.135 1.216-.074 1.743l-.087.194c-.193.479-.565 1.044-1.117 1.713-.476.576-.912 1.028-1.295 1.343l-.161.127c-.44.363-.947.637-1.516.818a6.008 6.008 0 0 1-1.828.264c-1.073 0-2.192-.21-3.356-.625-1.135-.405-2.29-.984-3.466-1.737a24.373 24.373 0 0 1-3.044-2.327l-.431-.391a34.21 34.21 0 0 1-1.339-1.27l5.212-5.216.048.041c.319.269.611.477.874.623.121.067.226.121.312.159l.218-.239.08-.079.085-.107.254-.263c.119-.12.226-.223.321-.31.171-.156.362-.306.617-.477a3.574 3.574 0 0 1 2.169-.483zm8.062-13.321a.999.999 0 0 1 0 1.414L5.393 29.435a.999.999 0 1 1-1.414-1.414L28.021 3.979a.999.999 0 0 1 1.414 0zM10.791 2.353a3.42 3.42 0 0 1 1.577 1.5 33.63 33.63 0 0 0 1.257 2.265 49.99 49.99 0 0 0 1.696 2.601c.414.626.579 1.307.486 2.017-.091.699-.403 1.322-.977 1.9a6.076 6.076 0 0 1-1.027.705 1.161 1.161 0 0 1-.218.137l-.171.083-.137.078a7.09 7.09 0 0 1-.229.109c.016.079.043.175.083.29l.098.258c.117.314.304.677.56 1.086l-5.28 5.281c-1.239-1.551-2.272-3.085-3.099-4.599-.955-1.731-1.628-3.354-2.018-4.87-.397-1.544-.493-2.938-.281-4.173.204-1.306.769-2.366 1.703-3.149.433-.361 1.041-.728 1.828-1.11.803-.39 1.468-.63 2.018-.716a3.627 3.627 0 0 1 2.133.308z" />
    </svg>
  )),
);
PhoneOff.displayName = 'PhoneOff';
PhoneOff['iconName'] = 'phone-off';
export default PhoneOff;
