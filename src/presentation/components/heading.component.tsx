import { Text, StyleSheet } from "react-native";

import { colors } from "../styles/colors.styles";
import { fonts } from "../styles/fonts.styles";

type HeadingProps = {
  children: string;
  bold?: boolean;
  marginBottom?: number;
};

const Heading: React.FC<HeadingProps> = ({
  children,
  bold,
  marginBottom = 16,
}) => {
  return (
    <Text
      style={[
        styles.heading,
        bold && styles.bold,
        { marginBottom: marginBottom },
      ]}
    >
      {children}
    </Text>
  );
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    fontFamily: fonts.nunitoSemiBold,
    color: colors.black,
    fontSize: 32,
  },
  bold: {
    fontFamily: fonts.nunitoBold,
  },
});
