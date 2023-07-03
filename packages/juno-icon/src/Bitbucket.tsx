import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Bitbucket = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M17.924 15.51a1.928 1.928 0 0 1-1.933 1.916 1.92 1.92 0 0 1-1.911-1.932 1.914 1.914 0 0 1 1.928-1.914 1.922 1.922 0 0 1 1.915 1.93zm7.177 6.578a.833.833 0 0 1-.019.238c-.268 1.412-.54 2.82-.802 4.232a2.287 2.287 0 0 1-.637 1.212c-.371.38-.807.661-1.274.899-.862.438-1.776.714-2.713.907-1.212.252-2.438.364-3.135.358-2.12-.005-3.681-.174-5.205-.614a8.728 8.728 0 0 1-2.023-.838 4.434 4.434 0 0 1-.916-.695 2.283 2.283 0 0 1-.652-1.228c-.261-1.411-.536-2.821-.805-4.231a1.034 1.034 0 0 1-.017-.215c.017-.346.326-.525.637-.372.032.019.063.036.092.055 1.033.75 2.185 1.251 3.394 1.633 1.11.352 2.248.564 3.407.667 1.337.121 2.667.091 3.993-.097 1.76-.247 3.441-.749 5.003-1.608.311-.171.603-.378.901-.568.049-.032.096-.067.148-.092.298-.133.592.034.622.355zM23.636 5.93a1.59 1.59 0 0 1-.383.314c-.396.236-.837.36-1.279.477-.837.213-1.692.337-2.547.426a33.041 33.041 0 0 1-3.335.165c-1.311-.007-2.564-.059-3.811-.209-.936-.114-1.868-.256-2.768-.557a6.127 6.127 0 0 1-.777-.335 1.236 1.236 0 0 1-.339-.267c-.173-.19-.173-.397.004-.583.103-.111.228-.204.358-.278.373-.216.783-.343 1.196-.45.865-.225 1.746-.354 2.634-.448a33.199 33.199 0 0 1 4.369-.151c1.34.04 2.679.139 4.003.379.62.112 1.238.241 1.825.48.207.084.408.191.601.304a.952.952 0 0 1 .253.234c.124.16.13.349-.004.5zm-7.654 13.412a3.835 3.835 0 0 1-3.812-3.855 3.82 3.82 0 0 1 3.843-3.816 3.828 3.828 0 0 1 3.827 3.859c-.01 2.109-1.741 3.819-3.858 3.812zM27.759 5.16a3.03 3.03 0 0 0-.641-.648c-.537-.419-1.141-.717-1.769-.97-1.334-.537-2.724-.854-4.136-1.081-1.722-.275-3.459-.385-5.284-.396-1.631.014-3.34.118-5.036.382-1.204.189-2.393.445-3.549.836-.764.262-1.504.571-2.179 1.025a3.656 3.656 0 0 0-.859.764c-.303.386-.432.815-.354 1.301.152.961.293 1.923.452 2.879.232 1.417.472 2.834.713 4.247.269 1.571.546 3.143.808 4.715.062.366.216.676.462.941.157.171.326.332.505.478.642.519 1.374.889 2.139 1.191 1.831.73 3.746 1.06 5.705 1.169 1.422.079 2.842.029 4.256-.165 1.204-.163 2.384-.421 3.529-.834.849-.307 1.662-.682 2.397-1.215.312-.229.601-.482.831-.794.16-.209.268-.443.312-.708.349-2.059.712-4.116 1.052-6.177.318-1.91.616-3.823.93-5.734a1.564 1.564 0 0 0-.285-1.206z" />
    </svg>
  )),
);
Bitbucket.displayName = 'Bitbucket';
Bitbucket['iconName'] = 'bitbucket';
export default Bitbucket;
