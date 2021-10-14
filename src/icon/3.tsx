import React, { forwardRef, memo } from 'react';

const Icon3 = memo(
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
          fill="var(--color15, #000)"
          d="M16.193 7c.378 0 .728.053 1.048.16s.596.258.826.455c.231.197.411.434.54.713s.193.588.193.928c0 .278-.036.527-.109.746a1.802 1.802 0 01-.802.998 2.721 2.721 0 01-.642.276c.582.152 1.02.405 1.313.762s.44.803.44 1.339c0 .405-.078.77-.234 1.094s-.369.599-.639.826c-.27.227-.585.401-.945.522s-.745.181-1.157.181c-.474 0-.879-.058-1.216-.175s-.622-.277-.854-.482c-.233-.205-.424-.447-.574-.728s-.277-.585-.38-.912l.474-.197a.666.666 0 01.262-.055c.083 0 .157.017.221.052a.31.31 0 01.108.096l.051.093.037.085c.058.119.129.253.212.402s.195.29.337.421c.141.131.317.242.527.332s.471.135.783.135c.312 0 .585-.05.82-.15s.43-.23.586-.39a1.637 1.637 0 00.471-1.118c0-.238-.032-.455-.097-.651s-.181-.367-.349-.51c-.168-.143-.401-.256-.699-.338s-.679-.123-1.145-.123v-.793c.378-.004.702-.045.97-.123s.488-.184.658-.319c.17-.135.294-.297.371-.485s.115-.397.115-.627c0-.254-.041-.475-.122-.663s-.192-.344-.334-.467c-.141-.123-.309-.215-.502-.276s-.402-.092-.627-.092c-.225 0-.432.033-.624.098s-.361.157-.508.273c-.148.117-.271.256-.371.418s-.175.337-.225.525c-.033.119-.083.205-.15.258s-.152.08-.256.08l-.066-.003a1.577 1.577 0 01-.078-.009l-.58-.098c.058-.401.17-.757.337-1.066s.377-.568.633-.777c.256-.209.549-.368.879-.476s.687-.163 1.07-.163z"
        />
        <path
          fill="var(--color81, #9e9e9e)"
          d="M14.54 22.21c0 .268-.043.512-.127.733s-.205.408-.36.565c-.155.157-.341.278-.557.364s-.457.129-.72.129h-1.34v-3.582h1.34c.263 0 .503.043.72.129a1.587 1.587 0 01.917.931c.085.22.127.464.127.733zm-.497 0c0-.22-.03-.417-.09-.59s-.145-.32-.255-.44c-.11-.12-.243-.212-.4-.275s-.331-.095-.523-.095h-.852v2.797h.852c.192 0 .366-.032.523-.095s.29-.155.4-.274c.11-.119.195-.265.255-.439s.09-.37.09-.59zm3.364-1.792v.395h-1.72v1.19h1.393v.38h-1.393v1.223h1.72v.395H15.2v-3.582h2.207zm2.906 0v.395h-1.72v1.253h1.47v.395h-1.47v1.54h-.488v-3.582h2.207z"
        />
      </svg>
    ),
  ),
);
Icon3.displayName = 'Icon3';
Icon3['iconName'] = '3';
export default Icon3;
