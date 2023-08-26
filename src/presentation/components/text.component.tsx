import { Text, StyleSheet } from "react-native";

import { colors } from "../styles/colors.styles";
import { fonts } from "../styles/fonts.styles";

type TextProps = {
  children: string | React.ReactNode;
  paragraph?: boolean;
  bold?: boolean;
  color?: keyof typeof colors;
  center?: boolean;
};

const StyledText: React.FC<TextProps> = ({
  children,
  paragraph,
  bold,
  color = "black",
  center,
}) => {
  return (
    <Text
      style={[
        styles.text,
        bold && styles.bold,
        paragraph && styles.paragraph,
        center && styles.center,
        { color: colors[color] },
      ]}
    >
      {children}
    </Text>
  );
};

export default StyledText;

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.nunitoSemiBold,
    color: colors.black,
    fontSize: 20,
    marginBottom: 20,
  },
  bold: {
    fontFamily: fonts.nunitoBold,
  },
  paragraph: {
    fontFamily: fonts.inter,
    fontSize: 16,
  },
  center: {
    textAlign: "center",
  },
});
