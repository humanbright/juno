import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const NotificationBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 2a1 1 0 0 1 1 1l.001 1.055A9.001 9.001 0 0 1 25 13v3.264c0 1.34.449 2.642 1.275 3.698l2.195 2.805A2 2 0 0 1 26.895 26l-5.995.001a5.002 5.002 0 0 1-9.8 0L5.105 26a2 2 0 0 1-1.575-3.233l2.195-2.805A6 6 0 0 0 7 16.264V13a9 9 0 0 1 8-8.945V3a1 1 0 0 1 1-1zm2.829 24.001h-5.658a3 3 0 0 0 5.658 0zM16 6a7 7 0 0 0-7 7v3.264a7.995 7.995 0 0 1-1.7 4.93l-2.195 2.805h21.79L24.7 21.194a8.001 8.001 0 0 1-1.7-4.93V13a7 7 0 0 0-7-7z" />
    </svg>
  )),
);
NotificationBorder.displayName = 'NotificationBorder';
NotificationBorder['iconName'] = 'notification_border';
export default NotificationBorder;
