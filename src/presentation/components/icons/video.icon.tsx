import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const VideoIcon = (props: SvgProps) => (
  <Svg width={15} height={17} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M0 16.244V.759C0 .625.036.493.106.377A.773.773 0 0 1 .4.099a.812.812 0 0 1 .794.01L14.62 7.851a.771.771 0 0 1 .278.276.734.734 0 0 1 0 .744.771.771 0 0 1-.278.276L1.193 16.892a.811.811 0 0 1-.793.01.773.773 0 0 1-.293-.277.734.734 0 0 1-.107-.381Z"
    />
  </Svg>
);

export default VideoIcon;
