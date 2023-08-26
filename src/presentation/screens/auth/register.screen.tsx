import React, { useState } from "react";
import { View } from "react-native";
import { Link } from "expo-router";

import { UserRepository } from "../../../data/repositories/user.repository.impl";
import { RegisterUserUseCase } from "../../../domain/usecases/register.usecase";

import Heading from "../../components/heading.component";
import Input from "../../components/input.component";
import Button from "../../components/button.component";
import StyledText from "../../components/text.component";

import globalStyles from "../../styles/global.styles";

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

  const handleSubmit = async () => {
    await register.execute({
      username,
      name,
      email,
      password,
      phone,
    });
  };

  return (
    <View style={globalStyles.container}>
      <Heading>Register</Heading>

      <Input
        label="Username"
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />

      <Input
        label="Name"
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />

      <Input
        label="Email"
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />

      <Input
        label="Password"
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      <Input
        label="Phone"
        placeholder="Phone"
        onChangeText={setPhone}
        value={phone}
        keyboardType="phone-pad"
      />

      <Button title="Register" onPress={handleSubmit} />

      <StyledText color={"gray"} center>
        Already have an account ?
        <StyledText color={"lightPrimary"}>
          <Link href="/login"> Sign in</Link>
        </StyledText>
      </StyledText>
    </View>
  );
};

export default RegisterScreen;
