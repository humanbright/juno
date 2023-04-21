import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const CallrailBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M13.25 15.25A.75.75 0 0 1 14 16v3.75a.75.75 0 0 1-1.5 0V16a.75.75 0 0 1 .75-.75zM11.5 13a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0v-5z" />
      <path d="M28.804 18.651c-1.109 6.122-6.595 9.92-12.804 9.92a13.12 13.12 0 0 1-6.257-1.576 8.682 8.682 0 0 1-2.041 1.664l-.001.001c-1.884 1.087-4.416-.623-3.667-2.943.529-1.638.576-2.86-.067-5.082a12.577 12.577 0 0 1-.968-4.848c0-7.099 5.86-12.785 13-12.785 6.971 0 12.997 4.876 13 12.13 0 .6-.231 1.141-.606 1.544.37.552.541 1.247.409 1.977zM9.291 24.333c.522.395 1.081.744 1.672 1.043a11.125 11.125 0 0 0 5.038 1.195c5.058 0 9.321-2.849 10.605-7.293.093-.32.169-.648.23-.983a.709.709 0 0 0-.706-.829H17v3.535a1 1 0 0 1-2 0v-10a1 1 0 0 1 2 0v4.341l9.725.059a.272.272 0 0 0 .275-.27C26.997 9.177 22.073 5 16 5S5 9.828 5 15.785c0 1.481.304 2.892.855 4.177.569 1.929.713 3.332.477 4.78l-.048.271-.013.066a9.905 9.905 0 0 1-.189.775v.001c-.044.157-.092.315-.144.476-.146.451.349.835.764.596.119-.069.242-.146.366-.231a6.767 6.767 0 0 0 1.106-.95l.066-.07c.344-.371.685-.81 1.006-1.325l.013-.021.008-.013.002-.001.002.001.021.016z" />
    </svg>
  )),
);
CallrailBorder.displayName = 'CallrailBorder';
CallrailBorder['iconName'] = 'callrail_border';
export default CallrailBorder;