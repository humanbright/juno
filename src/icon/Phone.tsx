import React, { forwardRef, memo } from 'react';

const Phone = memo(
  forwardRef(
    (
      props: React.SVGProps<SVGSVGElement>,
      svgRef?: React.Ref<SVGSVGElement>,
    ) => (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        {...props}
      >
        <path d="M13.228 14.296c.124.331.324.717.602 1.154.285.448.649.938 1.09 1.465a13.92 13.92 0 001.328 1.391c.395.352.753.616 1.068.791.121.067.226.121.312.159l.218-.239.08-.078c-.004.003.001-.001.009-.015l.076-.093c.226-.238.417-.428.575-.573.171-.156.362-.306.617-.477a3.574 3.574 0 012.169-.483c.803.071 1.484.39 1.965.905.599.566 1.221 1.131 1.865 1.697s1.489 1.28 2.534 2.141c.586.482.976 1.073 1.157 1.757.184.694.125 1.365-.161 1.937-.193.479-.565 1.044-1.117 1.713-.544.659-1.035 1.155-1.456 1.47-.44.363-.947.637-1.516.818a6.01 6.01 0 01-1.829.264c-1.073 0-2.192-.21-3.356-.625-1.135-.405-2.29-.984-3.466-1.737a24.989 24.989 0 01-3.475-2.719 36.73 36.73 0 01-3.448-3.565c-1.492-1.787-2.714-3.551-3.664-5.291-.955-1.731-1.628-3.354-2.018-4.87-.397-1.544-.493-2.938-.281-4.173.204-1.306.769-2.366 1.703-3.149.433-.361 1.041-.728 1.828-1.11.803-.39 1.468-.63 2.018-.716.735-.115 1.455-.01 2.133.308s1.204.818 1.577 1.5a33.63 33.63 0 001.257 2.265 49.99 49.99 0 001.696 2.601c.414.626.579 1.307.486 2.017-.091.699-.403 1.322-.977 1.9a6.076 6.076 0 01-1.027.705 1.161 1.161 0 01-.218.137l-.171.083a2.256 2.256 0 01-.223.12 1.99 1.99 0 00-.144.067c.027.132.084.31.182.548z" />
      </svg>
    ),
  ),
);
Phone.displayName = 'Phone';
Phone['iconName'] = 'phone';
export default Phone;
