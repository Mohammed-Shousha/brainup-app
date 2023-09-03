import { Pressable, Text, StyleSheet, ActivityIndicator } from "react-native";

import { colors } from "@/presentation/styles/colors.styles";
import { fonts } from "@/presentation/styles/fonts.styles";

type ButtonProps = {
  title: string;
  onPress?: () => void;
  isLoading?: boolean;
  marginTop?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  isLoading,
  marginTop,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, marginTop && styles.marginTop]}
      disabled={isLoading}
    >
      {isLoading && (
        <ActivityIndicator
          size="small"
          color={colors.white}
          style={{ marginRight: 10 }}
        />
      )}
      <Text style={styles.buttonText}>{isLoading ? "Loading..." : title}</Text>
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
  },
  buttonText: {
    fontFamily: fonts.nunitoSemiBold,
    color: colors.white,
    fontSize: 20,
  },
  marginTop: {
    marginTop: 50,
  },
});
