import { View } from "react-native";
import { Slot, Stack } from "expo-router";
import Heading from "../../../presentation/components/heading.component";
import globalStyles from "../../../presentation/styles/global.styles";

const ResetPasswordLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default ResetPasswordLayout;
