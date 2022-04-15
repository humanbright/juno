import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const OutboundFax = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M23 4a1 1 0 0 1 0 2h-2v13h-7a2.001 2.001 0 0 0-1.995 1.851L12 21v7H5a2 2 0 0 1-2-2V6H1a1 1 0 0 1 0-2h22zm-2.272 17-.025.058a3.003 3.003 0 0 1-.582.82l-5.536 5.536a2.022 2.022 0 0 1-.415.319l-.17.086V22a1 1 0 0 1 .883-.993L15 21h5.728zm4.479-10.293 4.586 4.586a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414-1.414L27.5 16l-3.707-3.879a1 1 0 0 1 1.414-1.414zM15.167 14H8.834c-.46 0-.833.448-.833 1 0 .513.322.935.736.993l.097.007h6.333c.46 0 .833-.448.833-1s-.373-1-.833-1zm0-5H8.834c-.46 0-.833.448-.833 1 0 .513.322.935.736.993l.097.007h6.333c.46 0 .833-.448.833-1s-.373-1-.833-1z" />
    </svg>
  )),
);
OutboundFax.displayName = 'OutboundFax';
OutboundFax['iconName'] = 'outbound-fax';
export default OutboundFax;
