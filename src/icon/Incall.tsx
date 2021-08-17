import React, { forwardRef, memo } from 'react';

const Incall = memo(
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
        <path d="M9.791 2.353a3.42 3.42 0 011.577 1.5 33.63 33.63 0 001.257 2.265 49.99 49.99 0 001.696 2.601c.414.626.579 1.307.486 2.017-.091.699-.403 1.322-.977 1.9a6.076 6.076 0 01-1.027.705 1.161 1.161 0 01-.218.137l-.171.083-.178.098-.045.022a1.99 1.99 0 00-.144.067c.016.079.043.175.083.29l.098.258c.124.331.324.717.602 1.154.285.448.649.938 1.09 1.465a13.92 13.92 0 001.328 1.391c.395.352.753.616 1.068.791.121.067.226.121.312.159l.218-.239.08-.079.085-.107.254-.263.222-.218a5.112 5.112 0 01.716-.569 3.574 3.574 0 012.169-.483c.803.071 1.484.39 1.965.905a69.978 69.978 0 001.865 1.697l.459.399.947.804c.346.29.722.603 1.129.938.586.482.976 1.073 1.157 1.757.164.617.135 1.216-.074 1.743l-.087.194c-.193.479-.565 1.044-1.117 1.713-.476.576-.912 1.028-1.295 1.343l-.161.127c-.44.363-.947.637-1.516.818a6.008 6.008 0 01-1.828.264c-1.073 0-2.192-.21-3.356-.625-1.135-.405-2.29-.984-3.466-1.737a24.373 24.373 0 01-3.044-2.327l-.431-.391a36.73 36.73 0 01-3.448-3.565c-1.492-1.787-2.714-3.551-3.664-5.291-.955-1.731-1.628-3.354-2.018-4.87-.397-1.544-.493-2.938-.281-4.173.204-1.306.769-2.366 1.703-3.149.433-.361 1.041-.728 1.828-1.11.803-.39 1.468-.63 2.018-.716a3.627 3.627 0 012.133.308zm19.916-.06a.999.999 0 010 1.414l-7.072 7.07 5.586.001a1 1 0 010 2h-8a1 1 0 01-1-1v-8a1 1 0 012 0l-.001 5.585 7.072-7.07a.999.999 0 011.414 0z" />
      </svg>
    ),
  ),
);
Incall.displayName = 'Incall';
Incall['iconName'] = 'incall';
export default Incall;
