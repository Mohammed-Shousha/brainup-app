import React, { useState } from "react";
import { View } from "react-native";
import { Link } from "expo-router";

import { UserRepository } from "@/data/repositories/user.repository.impl";
import { LoginUserUseCase } from "@/domain/usecases/login.usecase";

import Button from "@/presentation/components/button.component";
import Input from "@/presentation/components/input.component";
import Heading from "@/presentation/components/heading.component";
import StyledText from "@/presentation/components/text.component";

import globalStyles from "@/presentation/styles/global.styles";

type LoginScreenProps = {
  login: LoginUserUseCase;
};

const userRepository = new UserRepository();
const loginUserUseCase = new LoginUserUseCase(userRepository);

const LoginScreen: React.FC<LoginScreenProps> = ({
  login = loginUserUseCase,
}) => {
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
