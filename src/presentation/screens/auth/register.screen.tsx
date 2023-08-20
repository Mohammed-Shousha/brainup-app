import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Link } from "expo-router";

import { RegisterUserUseCase } from "../../../domain/useCases/register.usecase";
import { UserRepository } from "../../../data/repositories/user.repository.impl";

import { formStyles } from "../../styles/form.styles";

type RegisterScreenProps = {
  register: RegisterUserUseCase;
};

const userRepository = new UserRepository();
const registerUserUseCase = new RegisterUserUseCase(userRepository);

const RegisterScreen: React.FC<RegisterScreenProps> = ({
  register = registerUserUseCase,
}) => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    register.execute({
      username,
      name,
      email,
      password,
      phone,
    });
  };

  return (
    <View style={formStyles.container}>
      <Text style={formStyles.text}>Register</Text>
      <TextInput
        style={formStyles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={formStyles.input}
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={formStyles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={formStyles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TextInput
        style={formStyles.input}
        placeholder="Phone"
        onChangeText={setPhone}
        value={phone}
        keyboardType="phone-pad"
      />
      <Button title="Register" onPress={handleSubmit} />
      <Link style={formStyles.link} href="/login">
        Login
      </Link>
    </View>
  );
};

export default RegisterScreen;
