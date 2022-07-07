import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Limited = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M10.671 11.107c.319.15.567.385.743.707.172.343.37.699.592 1.067s.488.776.799 1.225c.195.295.273.616.229.95-.043.329-.19.623-.46.895a2.753 2.753 0 0 1-.484.332.544.544 0 0 1-.103.065l-.08.039-.084.046-.021.01c-.025.011-.048.021-.068.032.008.037.02.082.039.137l.046.122a3 3 0 0 0 .284.544c.134.211.306.442.513.69.225.265.434.484.626.656.186.166.355.29.503.373.057.032.107.057.147.075l.103-.113.038-.037.04-.05.12-.124.105-.103.047-.043c.081-.074.171-.144.291-.225.31-.183.656-.26 1.022-.228.378.033.699.184.926.426.282.267.575.533.879.8l.216.188.446.379c.163.137.34.284.532.442.276.227.46.505.545.828.077.291.064.573-.035.821l-.041.091c-.091.226-.266.492-.526.807a4.7 4.7 0 0 1-.61.633l-.076.06c-.207.171-.446.3-.714.385-.262.083-.55.124-.861.124a4.712 4.712 0 0 1-1.581-.294 8.118 8.118 0 0 1-1.633-.818 11.46 11.46 0 0 1-1.434-1.096l-.203-.184a17.168 17.168 0 0 1-1.624-1.68 15.494 15.494 0 0 1-1.726-2.493c-.45-.816-.767-1.58-.951-2.295-.187-.727-.232-1.384-.132-1.966.096-.616.362-1.115.802-1.484.204-.17.49-.343.861-.523.379-.184.692-.297.951-.337a1.709 1.709 0 0 1 1.005.145zm9.815-2.981c.163.091.298.225.389.389l3.3 5.941a1 1 0 0 1-.875 1.486h-6.601a1 1 0 0 1-.874-1.486l3.301-5.941a1 1 0 0 1 1.36-.389zm-.444 5.252a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm.008-4.437c-.307 0-.562.074-.615.171l-.01.037v3.333c0 .115.28.208.625.208.307 0 .562-.074.615-.171l.01-.037V9.149c0-.115-.28-.208-.625-.208z" />
    </svg>
  )),
);
Limited.displayName = 'Limited';
Limited['iconName'] = 'Limited';
export default Limited;
