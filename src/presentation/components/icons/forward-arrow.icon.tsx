import Svg, { SvgProps, Path } from "react-native-svg";

import colors from "@/presentation/styles/colors.styles";

const ForwardArrowIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill={colors.white} {...props}>
    <Path fill="none" d="M24 24H0V0h24v24z" opacity={0.87} />
    <Path d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z" />
  </Svg>
);

export default ForwardArrowIcon;
