import React, { useState } from "react";
import { View } from "react-native";
import { router } from "expo-router";

import { UserRepository } from "@/data/repositories/user.repository.impl";
import { ResetPasswordUseCase } from "@/domain/usecases/reset-password.usecase";

import Heading from "@/presentation/components/heading.component";
import Input from "@/presentation/components/input.component";
import Button from "@/presentation/components/button.component";
import StyledText from "@/presentation/components/text.component";

import globalStyles from "@/presentation/styles/global.styles";

type ResetPasswordScreenProps = {
  resetPassword: ResetPasswordUseCase;
};

const userRepository = new UserRepository();
const resetPasswordUseCase = new ResetPasswordUseCase(userRepository);

const EnterEmailScreen: React.FC<ResetPasswordScreenProps> = ({
  resetPassword = resetPasswordUseCase,
}) => {
  const [email, setEmail] = useState("");

  const handleSendEmail = async () => {
    await resetPassword.send(email);
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
