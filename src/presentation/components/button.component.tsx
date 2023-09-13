import {
  Pressable,
  Text,
  StyleSheet,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from "react-native";

import colors from "@/presentation/styles/colors.styles";
import fonts from "@/presentation/styles/fonts.styles";

type ButtonProps = {
  title: string;
  icon?: React.ReactNode;
  onPress?: () => void;
  isLoading?: boolean;
  inverted?: boolean;
  style?: StyleProp<ViewStyle>;
};

const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  onPress,
  isLoading,
  inverted,
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, inverted && styles.inverted, style]}
      disabled={isLoading}
    >
      {isLoading && <ActivityIndicator size="small" color={colors.white} />}
      {icon}
      <Text style={[styles.buttonText, inverted && styles.invertedText]}>
        {isLoading ? "Loading..." : title}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 15,
    marginBottom: 20,
    gap: 8,
  },
  buttonText: {
    fontFamily: fonts.nunitoSemiBold,
    color: colors.white,
    fontSize: 20,
  },
  inverted: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  invertedText: {
    color: colors.primary,
  },
});
