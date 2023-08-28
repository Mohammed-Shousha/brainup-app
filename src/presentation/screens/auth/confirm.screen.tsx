import React, { useState } from "react";
import { View } from "react-native";

import { useUserUseCases } from "@/presentation/context/user.context";

import Heading from "@/presentation/components/heading.component";
import StyledText from "@/presentation/components/text.component";
import Input from "@/presentation/components/input.component";
import Button from "@/presentation/components/button.component";

import globalStyles from "@/presentation/styles/global.styles";

const ConfirmScreen: React.FC = () => {
  const { confirmEmail } = useUserUseCases();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleSendEmail = async () => {
    await confirmEmail.send(email);
  };

  const handleVerifyCode = async () => {
    await confirmEmail.verifyCode(code);
  };

  return (
    <View style={globalStyles.container}>
      <Heading bold>Confirm Your Email</Heading>
      <StyledText paragraph>Enter the code sent to you email</StyledText>
      {/* 
      <Input
        label="Email"
        placeholder="Enter your email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <Button title="Send Email" onPress={handleSendEmail} marginTop /> */}

      <Input
        label="Code"
        placeholder="Enter the 6-digit code"
        onChangeText={setCode}
        value={code}
      />
      <Button title="Continue" onPress={handleVerifyCode} marginTop />
    </View>
  );
};

export default ConfirmScreen;
