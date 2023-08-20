import { Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

import { homeStyles } from "../styles/home.styles";

const HomeScreen = () => {
  return (
    <>
      <Text style={homeStyles.text}>Home</Text>
      <Link href="/login" asChild>
        <Button title="Login" />
      </Link>
      <Link href="/register" asChild>
        <Button title="Register" />
      </Link>
      <StatusBar style="auto" />
    </>
  );
};

export default HomeScreen;
