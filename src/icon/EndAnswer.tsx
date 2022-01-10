import React, { forwardRef, memo } from 'react';

const EndAnswer = memo(
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
        <path
          fill="var(--color17, #f54c3d)"
          d="M8 0c4.371 0 7.923 3.497 7.999 7.838a12.833 12.833 0 00-8.161 8.159l.162.002c-4.418 0-8-3.573-8-7.98v-.04C0 3.646 3.461.12 7.776.002L8-.001zm0 6.541c-1.621.015-2.615.344-3.437 1.021-.383.315-.53.678-.53 1.156l.003.07.01.06a.866.866 0 00.272.478c.192.158.419.227.751.18l1.121-.188c.382-.072.399-.404.391-.697l-.004-.22.001-.03c.011-.135.104-.213.347-.228.219-.015.89-.001 1.116 0 .183.001.759-.019.954 0 .254.024.348.109.352.261l-.003.218.002.048c.024.286.158.618.555.673l1.123.188.061.006a.964.964 0 00.67-.213.776.776 0 00.276-.443l.018-.113-.002-.077c-.017-.479-.154-.814-.608-1.188-.745-.614-1.815-.978-3.44-.964z"
        />
        <path
          fill="var(--color79, #299e0b)"
          d="M20 8c6.627 0 12 5.373 12 12s-5.373 12-12 12S8 26.627 8 20 13.373 8 20 8zm-2.083 6.541a1.451 1.451 0 00-.853-.123c-.22.034-.486.13-.807.286a3.66 3.66 0 00-.731.444c-.373.314-.6.737-.681 1.26-.085.494-.046 1.052.112 1.669.156.607.425 1.256.807 1.948.38.696.869 1.402 1.466 2.116.453.532.912 1.007 1.379 1.426.459.425.923.789 1.39 1.087.47.301.932.533 1.386.695.465.166.913.25 1.342.25.265 0 .509-.035.731-.105.228-.072.431-.182.606-.327.168-.126.365-.325.582-.588.221-.267.37-.493.447-.685.114-.229.138-.497.064-.775a1.353 1.353 0 00-.463-.703c-.418-.345-.756-.63-1.014-.856s-.506-.453-.746-.679a1.203 1.203 0 00-.786-.362 1.437 1.437 0 00-.868.193 2.097 2.097 0 00-.247.191c-.063.058-.14.134-.23.229l-.03.037-.004.006-.032.031-.087.096a1.693 1.693 0 01-.125-.064 2.47 2.47 0 01-.427-.317 5.516 5.516 0 01-.531-.557 5.786 5.786 0 01-.436-.586 2.595 2.595 0 01-.241-.462 1.307 1.307 0 01-.073-.219.645.645 0 01.058-.027.767.767 0 00.089-.048l.068-.033a.428.428 0 00.087-.055 2.329 2.329 0 00.411-.283c.229-.231.354-.48.391-.76a1.162 1.162 0 00-.194-.807c-.264-.382-.489-.727-.678-1.04s-.356-.615-.503-.906a1.366 1.366 0 00-.631-.6z"
        />
      </svg>
    ),
  ),
);
EndAnswer.displayName = 'EndAnswer';
EndAnswer['iconName'] = 'end--answer';
export default EndAnswer;
