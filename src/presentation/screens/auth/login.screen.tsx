import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Link } from "expo-router";

import { UserRepository } from "../../../data/repositories/user.repository.impl";
import { LoginUserUseCase } from "../../../domain/usecases/login.usecase";

import { formStyles } from "../../styles/form.styles";

type LoginScreenProps = {
  login: LoginUserUseCase;
};

const userRepository = new UserRepository();
const loginUserUseCase = new LoginUserUseCase(userRepository);

const LoginScreen: React.FC<LoginScreenProps> = ({
  login = loginUserUseCase,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    await login.execute(username, password);
  };

  return (
    <View style={formStyles.container}>
      <Text style={formStyles.text}>Login</Text>
      <TextInput
        style={formStyles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={formStyles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title={"Login"} onPress={handleSubmit} />
      <Link style={formStyles.link} href="/register">
        Register
      </Link>
    </View>
  );
};

export default LoginScreen;
