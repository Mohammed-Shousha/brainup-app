import React, { useState } from "react";
import { View } from "react-native";
import { Link } from "expo-router";

import { useUserUseCases } from "@/presentation/context/user.context";

import Button from "@/presentation/components/button.component";
import Input from "@/presentation/components/input.component";
import Heading from "@/presentation/components/heading.component";
import StyledText from "@/presentation/components/text.component";

import globalStyles from "@/presentation/styles/global.styles";

const LoginScreen: React.FC = () => {
  const { login } = useUserUseCases();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    await login.execute(email, password);
  };

  return (
    <View style={globalStyles.container}>
      <Heading marginBottom={40}>Welcome Back !</Heading>
      <Input
        label="Email"
        placeholder="Enter your email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <Input
        label="Password"
        placeholder="Enter your Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <StyledText color={"lightPrimary"}>
        <Link href="/reset-password">Forget your password ?</Link>
      </StyledText>
      <Button title="Sign in" onPress={handleSubmit} />
      <StyledText color={"gray"} center>
        Don't have an account ?
        <StyledText color={"lightPrimary"}>
          <Link href="/register"> Sign up</Link>
        </StyledText>
      </StyledText>
    </View>
  );
};

export default LoginScreen;
