import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const TeamDefault = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M23.6 12.7c0 .596-.218 1.112-.653 1.547s-.951.653-1.547.653-1.111-.218-1.547-.653-.653-.951-.653-1.547.218-1.112.653-1.547.951-.653 1.547-.653 1.111.218 1.547.653.653.951.653 1.547zm-10.999 0c0 .596-.218 1.112-.653 1.547s-.951.653-1.547.653-1.111-.218-1.547-.653-.653-.951-.653-1.547.218-1.112.653-1.547.951-.653 1.547-.653 1.111.218 1.547.653.653.951.653 1.547zm5.499 9.899c0 .596-.218 1.112-.653 1.547s-.951.653-1.547.653-1.111-.218-1.547-.653-.653-.951-.653-1.547.218-1.112.653-1.547.951-.653 1.547-.653 1.111.218 1.547.653.653.951.653 1.547zm5.5-3.299c0 .596-.218 1.112-.653 1.547s-.951.653-1.547.653-1.111-.218-1.547-.653-.653-.951-.653-1.547.218-1.112.653-1.547.951-.653 1.547-.653 1.111.218 1.547.653.653.951.653 1.547zm-10.999 0c0 .596-.218 1.112-.653 1.547s-.951.653-1.547.653-1.111-.218-1.547-.653-.653-.951-.653-1.547.218-1.112.653-1.547.951-.653 1.547-.653 1.111.218 1.547.653.653.951.653 1.547zM18.1 9.401c0 .596-.218 1.112-.653 1.547s-.951.653-1.547.653-1.111-.218-1.547-.653-.653-.951-.653-1.547.218-1.112.653-1.547.951-.653 1.547-.653 1.111.218 1.547.653.653.951.653 1.547z" />
    </svg>
  )),
);
TeamDefault.displayName = 'TeamDefault';
TeamDefault['iconName'] = 'team-default';
export default TeamDefault;
