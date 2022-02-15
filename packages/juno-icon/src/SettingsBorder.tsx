import React, { forwardRef, memo } from 'react';

const SettingsBorder = memo(
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
        <path d="M20.857 2.057a15.048 15.048 0 014.823 2.688c.357.296.477.786.297 1.21a4.13 4.13 0 00.241 3.731 4.29 4.29 0 003.411 2.095c.467.033.858.359.966.806a14.528 14.528 0 01.001 6.827c-.108.448-.5.774-.967.807a4.285 4.285 0 00-3.411 2.094 4.132 4.132 0 00-.241 3.732c.18.423.06.913-.296 1.209a15.044 15.044 0 01-4.822 2.689 1.081 1.081 0 01-1.249-.428c-.783-1.2-2.13-1.939-3.608-1.939s-2.825.739-3.61 1.939a1.08 1.08 0 01-1.248.427 15.014 15.014 0 01-4.822-2.687 1.04 1.04 0 01-.297-1.21 4.13 4.13 0 00-.241-3.731 4.29 4.29 0 00-3.411-2.095 1.066 1.066 0 01-.966-.806 14.528 14.528 0 01-.001-6.827c.108-.448.5-.774.967-.807a4.285 4.285 0 003.411-2.094 4.135 4.135 0 00.242-3.732 1.04 1.04 0 01.296-1.209 15.044 15.044 0 014.822-2.689c.467-.157.982.02 1.249.428a4.295 4.295 0 003.608 1.94c1.458 0 2.789-.719 3.562-1.867l.038-.06a1.08 1.08 0 011.257-.441zm-9.694 2.121l-.205.082c-.945.39-1.841.889-2.667 1.487l-.176.131.023.076a6.126 6.126 0 01-.495 4.501l-.136.244a6.27 6.27 0 01-4.229 2.975l-.063.01-.037.2c-.095.556-.152 1.12-.171 1.688L3 15.999c0 .714.06 1.421.179 2.115l.037.198.063.012a6.279 6.279 0 014.093 2.756l.136.22a6.13 6.13 0 01.63 4.746l-.023.075.176.132a13.017 13.017 0 002.667 1.486l.205.081.027-.031a6.302 6.302 0 014.545-2.207l.267-.006a6.3 6.3 0 014.811 2.215l.025.03.206-.081c.945-.39 1.841-.889 2.667-1.487l.175-.132-.022-.075a6.126 6.126 0 01.495-4.501l.136-.244a6.27 6.27 0 014.229-2.975l.062-.011.038-.199c.095-.556.152-1.12.171-1.688l.007-.427c0-.714-.06-1.421-.179-2.115l-.038-.199-.062-.011a6.279 6.279 0 01-4.093-2.756l-.136-.22a6.13 6.13 0 01-.63-4.746l.022-.076-.175-.131a13.05 13.05 0 00-2.668-1.487l-.203-.08-.087.104a6.305 6.305 0 01-4.489 2.134l-.262.005a6.3 6.3 0 01-4.811-2.215l-.026-.032zM16 11a5 5 0 11-.001 10.001A5 5 0 0116 11zm0 2a3 3 0 100 6 3 3 0 000-6z" />
      </svg>
    ),
  ),
);
SettingsBorder.displayName = 'SettingsBorder';
SettingsBorder['iconName'] = 'settings-border';
export default SettingsBorder;
