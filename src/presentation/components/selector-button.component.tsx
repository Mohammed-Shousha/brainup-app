import { StyleSheet, Pressable } from "react-native";

import StyledText from "./text.component";

import colors from "@/presentation/styles/colors.styles";

interface SelectorButtonProps {
  title: string;
  onPress: () => void;
  active?: boolean;
}

const SelectorButton: React.FC<SelectorButtonProps> = ({
  title,
  onPress,
  active,
}) => {
  return (
    <Pressable
      style={[styles.button, active && styles.active]}
      onPress={onPress}
    >
      <StyledText style={{ fontSize: 24, marginBottom: 0 }}>{title}</StyledText>
    </Pressable>
  );
};

export default SelectorButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderWidth: 5,
    borderRadius: 15,
    borderColor: colors.lightSecondary,
    marginTop: 12,
    marginBottom: 32,
  },
  button: {
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 35,
    height: 54,
  },
  active: {
    backgroundColor: colors.lightSecondary,
  },
});
