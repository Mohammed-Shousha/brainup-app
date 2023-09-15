import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";

import colors from "@/presentation/styles/colors.styles";
import fonts from "@/presentation/styles/fonts.styles";

type StyledTextProps = {
  children: string | React.ReactNode;
  paragraph?: boolean;
  bold?: boolean;
  color?: keyof typeof colors;
  center?: boolean;
  style?: StyleProp<TextStyle>;
  selectable?: boolean;
};

const StyledText: React.FC<StyledTextProps> = ({
  children,
  paragraph,
  bold,
  color = "black",
  center,
  selectable,
  style,
}) => {
  return (
    <Text
      style={[
        styles.text,
        bold && styles.bold,
        paragraph && styles.paragraph,
        center && styles.center,
        { color: colors[color] },
        style,
      ]}
      testID="text"
      selectable={selectable}
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
