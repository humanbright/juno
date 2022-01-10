import React, { forwardRef, memo } from 'react';

const SharedLine = memo(
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
          fill="var(--color2, #066fac)"
          d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
        />
        <path
          fill="var(--color3, #fff)"
          d="M20.567 9.992c.039.107.101.233.188.375.089.145.202.305.339.476.149.183.287.334.414.452.123.114.235.2.333.257.038.022.07.039.097.052l.068-.078.025-.025.003-.005.024-.03c.07-.077.13-.139.179-.186.053-.051.113-.099.192-.155a1.08 1.08 0 01.676-.157c.25.023.462.126.612.294.187.184.38.367.581.551s.464.415.789.695c.183.156.304.348.361.57a.92.92 0 01-.05.629c-.06.156-.176.339-.348.556a2.835 2.835 0 01-.454.477 1.372 1.372 0 01-.472.265 1.813 1.813 0 01-.57.086 2.99 2.99 0 01-1.045-.203 5.266 5.266 0 01-1.08-.564 7.785 7.785 0 01-1.082-.883c-.364-.34-.722-.725-1.074-1.157a10.644 10.644 0 01-1.141-1.718 7.061 7.061 0 01-.629-1.581c-.124-.501-.153-.954-.087-1.355.063-.424.24-.768.531-1.023.135-.117.324-.236.57-.361.25-.127.457-.205.629-.232a1.091 1.091 0 011.155.587c.114.236.244.482.392.735s.323.534.528.844a.97.97 0 01.151.655 1.066 1.066 0 01-.304.617 2.076 2.076 0 01-.32.229.4.4 0 01-.068.045l-.053.027a.774.774 0 01-.114.061.986.986 0 00.057.178zM10.383 18.747c.053.142.139.307.258.495.122.192.278.402.467.628.205.242.395.44.569.596.169.151.323.264.458.339.052.029.097.052.134.068l.093-.102.034-.033c-.002.001 0-.001.004-.006l.032-.04c.097-.102.179-.183.247-.245.073-.067.155-.131.264-.204.282-.166.596-.237.93-.207.344.03.636.167.842.388.257.242.523.485.799.727s.638.548 1.086.918c.251.206.418.46.496.753.079.298.053.585-.069.83-.083.205-.242.447-.479.734a3.94 3.94 0 01-.624.63 1.908 1.908 0 01-.65.35 2.57 2.57 0 01-.784.113c-.46 0-.94-.09-1.438-.268a7.335 7.335 0 01-1.485-.744c-.5-.32-.997-.71-1.489-1.165A15.646 15.646 0 018.6 21.774a14.086 14.086 0 01-1.57-2.268c-.409-.742-.698-1.437-.865-2.087-.17-.662-.211-1.259-.12-1.788.087-.56.33-1.014.73-1.35.186-.155.446-.312.784-.476.344-.167.629-.27.865-.307.315-.049.624-.004.914.132s.516.35.676.643c.157.312.336.636.539.971s.444.706.727 1.115c.177.268.248.56.208.865a1.381 1.381 0 01-.419.814 2.678 2.678 0 01-.441.303.532.532 0 01-.094.059l-.073.036a.878.878 0 01-.095.051.6.6 0 00-.062.029c.011.057.036.133.078.235z"
        />
        <path
          fill="var(--color3, #fff)"
          d="M14.202 17.788a.478.478 0 01-.421.491.504.504 0 01-.574-.465 4.886 4.886 0 011.148-3.42c.182-.215.393-.393.624-.544l-.576-1.835 3.913 1.205c.226.097.273.388.089.54l-2.645 2.566-.447-1.422a2.613 2.613 0 00-.202.206 3.72 3.72 0 00-.907 2.677z"
        />
      </svg>
    ),
  ),
);
SharedLine.displayName = 'SharedLine';
SharedLine['iconName'] = 'Shared-line';
export default SharedLine;
