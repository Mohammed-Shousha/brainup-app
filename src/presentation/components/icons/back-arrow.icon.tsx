import colors from "@/presentation/styles/colors.styles";

import Svg, { SvgProps, Path } from "react-native-svg";

const BackArrowIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill={colors.white} {...props}>
    <Path fill="none" d="M0 0h24v24H0V0z" opacity={0.87} />
    <Path d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z" />
  </Svg>
);

export default BackArrowIcon;
