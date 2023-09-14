import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";

import colors from "@/presentation/styles/colors.styles";
import fonts from "@/presentation/styles/fonts.styles";

type HeadingProps = {
  children: string;
  bold?: boolean;
  style?: StyleProp<TextStyle>;
};

const Heading: React.FC<HeadingProps> = ({ children, bold, style }) => {
  return (
    <Text
      style={[styles.heading, bold && styles.bold, style]}
      testID="heading-text"
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
    marginBottom: 16,
    fontSize: 32,
  },
  bold: {
    fontFamily: fonts.nunitoBold,
  },
});
