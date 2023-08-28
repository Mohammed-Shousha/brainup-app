import React, { useState } from "react";
import { View } from "react-native";
import { router } from "expo-router";

import { useUserUseCases } from "@/presentation/context/user.context";

import Heading from "@/presentation/components/heading.component";
import Input from "@/presentation/components/input.component";
import Button from "@/presentation/components/button.component";
import StyledText from "@/presentation/components/text.component";

import globalStyles from "@/presentation/styles/global.styles";

const EnterEmailScreen: React.FC = () => {
  const { resetPassword } = useUserUseCases();

  const [email, setEmail] = useState("");

  const handleSendEmail = async () => {
    const sendEmailResult = await resetPassword.send(email);

    console.log({ sendEmailResult });

    router.push("/enter-code");
  };

  return (
    <View style={globalStyles.container}>
      <Heading bold>Reset your Password</Heading>
      <StyledText paragraph>Enter your email</StyledText>

      <Input
        label="Email"
        placeholder="Enter your email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />

      <Button title="Continue" onPress={handleSendEmail} marginTop />
    </View>
  );
};

export default EnterEmailScreen;
