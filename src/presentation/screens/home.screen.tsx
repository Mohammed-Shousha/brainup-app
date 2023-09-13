import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

import Heading from "@/presentation/components/heading.component";
import Button from "@/presentation/components/button.component";

import globalStyles from "@/presentation/styles/global.styles";

const HomeScreen = () => {
  const navigate = (route: string) => {
    router.push(route);
  };

  return (
    <View style={globalStyles.container}>
      <Heading style={{ marginBottom: 40 }}>Home</Heading>

      <Button title="Login" onPress={() => navigate("/login")} />

      <Button title="Register" onPress={() => navigate("/register")} />

      <Button title="Confirm" onPress={() => navigate("/confirm")} />

      <Button title="Reset Password" onPress={() => navigate("/enter-email")} />

      <Button title="Teacher Home" onPress={() => navigate("/teacher")} />

      <Button title="Student Home" onPress={() => navigate("/student")} />

      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
