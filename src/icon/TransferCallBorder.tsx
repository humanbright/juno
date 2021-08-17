import React, { forwardRef, memo } from 'react';

const TransferCallBorder = memo(
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
        <path d="M8.791 2.353a3.42 3.42 0 011.577 1.5 33.63 33.63 0 001.257 2.265 49.99 49.99 0 001.696 2.601c.414.626.579 1.307.486 2.017-.091.699-.403 1.322-.977 1.9a6.076 6.076 0 01-1.027.705 1.161 1.161 0 01-.218.137l-.171.083-.137.078a7.09 7.09 0 01-.229.109c.016.079.043.175.083.29l.098.258c.124.331.324.717.602 1.154.285.448.649.938 1.09 1.465a13.92 13.92 0 001.328 1.391c.395.352.753.616 1.068.791.121.067.226.121.312.159l.218-.239.08-.079.085-.107.254-.263c.119-.12.226-.223.321-.31.171-.156.362-.306.617-.477a3.574 3.574 0 012.169-.483c.803.071 1.484.39 1.965.905a69.978 69.978 0 001.865 1.697l.459.399c.57.491 1.262 1.072 2.075 1.742.586.482.976 1.073 1.157 1.757.164.617.135 1.216-.074 1.743l-.087.194c-.193.479-.565 1.044-1.117 1.713-.476.576-.912 1.028-1.295 1.343l-.161.127c-.44.363-.947.637-1.516.818a6.008 6.008 0 01-1.828.264c-1.073 0-2.192-.21-3.356-.625-1.135-.405-2.29-.984-3.466-1.737a24.373 24.373 0 01-3.044-2.327l-.431-.391a36.73 36.73 0 01-3.448-3.565c-1.492-1.787-2.714-3.551-3.664-5.291-.955-1.731-1.628-3.354-2.018-4.87C.992 9.65.896 8.256 1.108 7.021c.204-1.306.769-2.366 1.703-3.149.433-.361 1.041-.728 1.828-1.11.803-.39 1.468-.63 2.018-.716a3.627 3.627 0 012.133.308zM6.966 4.022c-.314.049-.8.222-1.451.538-.661.321-1.134.608-1.416.843-.548.46-.881 1.078-1.018 1.956-.16.934-.085 2.047.247 3.337.345 1.34.953 2.809 1.836 4.41.884 1.619 2.031 3.276 3.432 4.954a34.87 34.87 0 003.283 3.393 22.997 22.997 0 003.194 2.502c1.055.675 2.074 1.187 3.059 1.538.959.342 1.853.509 2.684.509.466 0 .872-.058 1.223-.17.274-.087.514-.206.768-.392l.155-.12c.275-.206.66-.595 1.112-1.142.391-.473.643-.844.765-1.097l.106-.236c.064-.128.078-.299.017-.53-.072-.27-.226-.504-.496-.726l-1.295-1.078a76.207 76.207 0 01-2.581-2.268l-.624-.582-.088-.088c-.138-.148-.36-.25-.681-.279a1.596 1.596 0 00-.827.134l-.119.063-.049.035a3.377 3.377 0 00-.189.145l-.079.069-.16.152-.227.231-.036.047a2.91 2.91 0 01-.09.104l-.159.162-.157.172a1.998 1.998 0 01-2.3.472 6.246 6.246 0 01-.459-.233c-.46-.256-.934-.607-1.428-1.047a16.01 16.01 0 01-1.531-1.601 16.348 16.348 0 01-1.243-1.674 8.88 8.88 0 01-.691-1.286l-.073-.183a5.005 5.005 0 01-.292-.913 2 2 0 011.025-2.162l.25-.12.178-.098.111-.054.05-.036.143-.086c.134-.073.249-.143.346-.21l.175-.127.102-.083.049-.052c.16-.183.247-.349.289-.528l.02-.109a.87.87 0 00-.147-.621 52.75 52.75 0 01-1.763-2.705 34.089 34.089 0 01-1.299-2.338 1.447 1.447 0 00-.553-.588l-.12-.063a1.627 1.627 0 00-.976-.142zm17.135 1.265a1.014 1.014 0 011.414 0l5.192 5.019a.968.968 0 010 1.388l-5.192 5.019c-.391.383-1.024.383-1.414 0s-.391-1.004 0-1.388l3.488-3.344H17.001c-.552 0-1-.439-1-.981s.448-.981 1-.981h10.586l-3.486-3.344a.968.968 0 010-1.388z" />
      </svg>
    ),
  ),
);
TransferCallBorder.displayName = 'TransferCallBorder';
TransferCallBorder['iconName'] = 'transfer_call_border';
export default TransferCallBorder;
