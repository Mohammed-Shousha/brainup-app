import { Pressable, Text, StyleSheet } from "react-native";

import { colors } from "@/presentation/styles/colors.styles";
import { fonts } from "@/presentation/styles/fonts.styles";

type ButtonProps = {
  title: string;
  onPress?: () => void;
  marginTop?: boolean;
};

const Button: React.FC<ButtonProps> = ({ title, onPress, marginTop }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, marginTop && styles.marginTop]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    display: "flex",
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
