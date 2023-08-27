import React, { useState } from "react";
import { View } from "react-native";
import { Link, router } from "expo-router";

import { useUserUseCases } from "@/context/user.context";

import Heading from "@/presentation/components/heading.component";
import Input from "@/presentation/components/input.component";
import Button from "@/presentation/components/button.component";
import StyledText from "@/presentation/components/text.component";

import globalStyles from "@/presentation/styles/global.styles";
import { ScrollView } from "react-native-gesture-handler";

const RegisterScreen: React.FC = () => {
  const { register } = useUserUseCases();

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
    router.replace("/confirm");
  };

  return (
    <ScrollView>
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
    </ScrollView>
  );
};

export default RegisterScreen;
