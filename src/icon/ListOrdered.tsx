import React, { forwardRef, memo } from 'react';

const ListOrdered = memo(
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
        <path d="M5.172 21.127c1.285 0 2.215.561 2.215 1.531 0 .715-.429 1.155-1.075 1.322l-.142.032v.041c.957.082 1.436.615 1.436 1.34 0 1.094-.916 1.791-2.434 1.791-1.053 0-2.256-.492-2.256-1.395 0-.369.26-.602.656-.602.219 0 .369.109.52.273.246.301.602.547 1.08.547.492 0 .875-.287.875-.711 0-.416-.303-.647-.866-.679l-.146-.004h-.219c-.342 0-.561-.205-.561-.52 0-.32.177-.507.462-.541l.099-.006h.205c.574 0 .93-.232.93-.629 0-.438-.328-.67-.793-.67-.328 0-.581.097-.834.368l-.095.11c-.178.219-.301.314-.574.314-.355 0-.602-.232-.602-.574 0-.848 1.094-1.34 2.119-1.34zm-.027-8.285c1.367 0 2.242.711 2.242 1.736 0 .702-.274 1.118-1.077 1.826l-.18.156-1.176.998v.041h2.064c.328 0 .561.219.561.588a.544.544 0 01-.468.554l-.092.007H3.601c-.397 0-.656-.26-.656-.629a.81.81 0 01.237-.6l.091-.084 1.764-1.518c.697-.588.875-.861.875-1.23 0-.396-.314-.684-.738-.684-.377 0-.645.151-.825.434l-.063.112c-.15.301-.342.396-.629.396-.383 0-.643-.205-.643-.602 0-.82.889-1.504 2.133-1.504zM27 24a1 1 0 010 2H11a1 1 0 010-2h16zm0-9a1 1 0 010 2H11a1 1 0 010-2h16zM5.596 4.543c.48 0 .819.28.869.731l.006.116v4.43c0 .533-.314.793-.779.793-.442 0-.732-.221-.774-.675l-.005-.118V6.074h-.027l-.684.492c-.219.15-.301.178-.465.178a.532.532 0 01-.547-.547c0-.223.1-.365.301-.522l.109-.08.984-.684c.301-.219.561-.369 1.012-.369zM27 6a1 1 0 010 2H11a1 1 0 010-2h16z" />
      </svg>
    ),
  ),
);
ListOrdered.displayName = 'ListOrdered';
ListOrdered['iconName'] = 'list-ordered';
export default ListOrdered;
