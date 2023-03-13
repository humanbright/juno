import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const RcApp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M21.015 2h-10.03c-2.649 0-3.921.246-5.244.953a6.715 6.715 0 0 0-2.788 2.788C2.246 7.063 2 8.336 2 10.985v10.03c0 2.649.246 3.921.953 5.244a6.715 6.715 0 0 0 2.788 2.788c1.322.707 2.595.953 5.244.953h10.03c2.649 0 3.921-.246 5.244-.953a6.715 6.715 0 0 0 2.788-2.788c.707-1.322.953-2.595.953-5.244v-10.03c0-2.649-.246-3.921-.953-5.244a6.715 6.715 0 0 0-2.788-2.788C24.937 2.246 23.664 2 21.015 2zM10.948 4.406l11.645.044.054.004.054.004.053.004.052.004.051.004.051.004.05.005.074.007.048.005.048.005.047.005.046.005.046.006.045.006.045.006.044.006.043.006.043.006.042.006.041.007.041.007a.918.918 0 0 1 .02.003l.04.007.04.007.039.007.019.004c.524.101.9.24 1.355.483a4.314 4.314 0 0 1 1.801 1.801c.244.456.382.832.483 1.355l.007.039.007.039a.142.142 0 0 0 .004.02l.007.04.007.041.007.041.003.021.006.042.006.043.006.043.006.044.006.044.006.045.006.046.005.046.005.047.005.048.005.048.005.049.007.075.004.051.004.051.004.052.004.053.004.054.004.054.004.055.003.056.003.056.003.057.003.058.003.059.004.09.002.061.002.062.002.062.003.095.003.097.002.099.002.101.001.068.001.104.001.07.001.107v10.4l-.001.109-.001.071-.001.07-.001.104-.001.068-.001.067-.002.099-.003.098-.002.064-.003.094-.003.093-.002.061-.004.09-.004.088-.003.058-.005.085-.003.056-.004.055-.004.054-.004.054-.004.053-.004.052-.004.051-.004.051-.005.05-.007.074-.005.048-.005.048-.005.047-.005.046-.006.046-.006.045-.006.044-.006.044-.006.043-.006.043-.006.042-.007.041-.007.041a.918.918 0 0 1-.003.02l-.007.04-.007.04-.007.039-.004.019c-.101.524-.24.9-.483 1.355a4.314 4.314 0 0 1-1.801 1.801 4.417 4.417 0 0 1-1.355.483l-.039.007-.039.007a.142.142 0 0 0-.02.004l-.04.007-.041.007-.041.007-.021.003-.042.006-.043.006-.043.006-.044.006-.045.006-.045.006-.046.006-.046.005-.047.005-.048.005-.048.005-.049.005-.075.007-.051.004-.051.004-.052.004-.053.004-.054.004-.054.004-.055.004-.056.003-.056.003-.057.003-.058.003-.059.003-.09.004-.061.002-.062.002-.062.002-.095.003-.097.003-.099.002-.101.002-.068.001-.174.002-.18.001h-.111l-11.645-.044-.054-.004-.054-.004-.053-.004-.052-.004-.051-.004-.051-.004-.05-.005-.074-.007-.048-.005-.048-.005-.047-.005-.046-.005-.046-.006-.045-.006-.045-.006-.044-.006-.043-.006-.043-.006-.042-.006-.041-.007-.041-.007a.918.918 0 0 1-.02-.003l-.04-.007-.04-.007-.039-.007-.019-.004c-.524-.101-.9-.24-1.355-.483a4.314 4.314 0 0 1-1.801-1.801 4.417 4.417 0 0 1-.483-1.355l-.007-.039-.007-.039a.142.142 0 0 0-.004-.02l-.007-.04-.007-.041-.007-.041-.003-.021-.006-.042-.006-.043-.006-.043-.006-.044-.006-.045-.006-.045-.006-.046-.005-.046-.005-.047-.005-.048-.005-.048-.005-.049-.007-.075-.004-.051-.004-.051-.004-.052-.004-.053-.004-.054-.004-.054-.004-.055-.003-.056-.003-.056-.003-.057-.003-.058-.003-.059-.004-.09-.002-.061-.002-.062-.002-.062-.003-.095-.003-.097-.002-.099-.002-.101-.001-.068-.001-.104-.001-.07-.001-.107v-10.4l.001-.109.001-.071.001-.07.001-.104.001-.068.001-.067.002-.099.002-.098.002-.064.003-.094.003-.093.002-.061.004-.09.004-.088.003-.058.005-.085.003-.056.004-.055.004-.054.004-.054.004-.053.004-.052.004-.051.004-.051.005-.05.007-.074.005-.048.005-.048.005-.047.005-.046.006-.046.006-.045.006-.044.006-.044.006-.043.006-.043.006-.042.007-.041.007-.041a.918.918 0 0 1 .003-.02l.007-.04.007-.04.007-.039.004-.019c.101-.524.24-.9.483-1.355a4.314 4.314 0 0 1 1.801-1.801 4.417 4.417 0 0 1 1.355-.483l.039-.007.039-.007a.142.142 0 0 0 .02-.004l.04-.007.041-.007.041-.007.021-.003.042-.006.043-.006.043-.006.044-.006.045-.006.045-.006.046-.006.046-.005.047-.005.048-.005.048-.005.049-.005.075-.007.051-.004.051-.004.052-.004.053-.004.054-.004.054-.004.055-.004.056-.003.056-.003.057-.003.058-.003.059-.003.09-.004.061-.002.062-.002.062-.002.095-.003.097-.003.099-.002.101-.002.068-.001.174-.002.18-.001h.111z" />
      <path d="M11.426 24.081c.055.002.11-.007.162-.026a.381.381 0 0 0 .227-.227.41.41 0 0 0 .027-.162V11.98a.327.327 0 0 1 .368-.37h7.577c.049-.005.099.001.146.017s.089.044.124.08a.32.32 0 0 1 .089.273v3.648a.332.332 0 0 1-.088.274.327.327 0 0 1-.271.097h-3.413a.33.33 0 0 0-.375.37v1.617a4.86 4.86 0 0 0 .104 1.096c.079.326.216.635.404.912l2.355 3.695a.84.84 0 0 0 .785.393h3.072c.154 0 .255-.041.302-.128.021-.051.028-.107.02-.162s-.031-.106-.067-.149l-2.335-3.772c-.108-.154-.068-.277.117-.37l1.638-.738a2.751 2.751 0 0 0 1.283-1.063 3.168 3.168 0 0 0 .406-1.654v-5.358c0-.909-.235-1.598-.704-2.067s-1.159-.704-2.068-.704H10.687c-.89 0-1.574.235-2.053.704s-.719 1.159-.719 2.067v12.979a.41.41 0 0 0 .115.3c.04.039.087.069.138.088s.107.029.162.027h3.095z" />
    </svg>
  )),
);
RcApp.displayName = 'RcApp';
RcApp['iconName'] = 'rc-app';
export default RcApp;
