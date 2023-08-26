import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

import Heading from "@/presentation/components/heading.component";
import Button from "@/presentation/components/button.component";

import globalStyles from "@/presentation/styles/global.styles";

const HomeScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Heading>Home</Heading>

      <Link href="/login" asChild>
        <Button title="Login" />
      </Link>

      <Link href="/register" asChild>
        <Button title="Register" />
      </Link>

      <Link href="/confirm" asChild>
        <Button title="Confirm" />
      </Link>

      <Link href="/enter-email" asChild>
        <Button title="Reset Password" />
      </Link>

      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
