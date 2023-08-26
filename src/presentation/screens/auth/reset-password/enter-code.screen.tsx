import React, { useState } from "react";
import { View } from "react-native";
import { router } from "expo-router";

import { UserRepository } from "../../../../data/repositories/user.repository.impl";
import { ResetPasswordUseCase } from "../../../../domain/usecases/reset-password.usecase";

import Heading from "../../../components/heading.component";
import Input from "../../../components/input.component";
import Button from "../../../components/button.component";
import StyledText from "../../../components/text.component";

import globalStyles from "../../../styles/global.styles";

type ResetPasswordScreenProps = {
  resetPassword: ResetPasswordUseCase;
};

const userRepository = new UserRepository();
const resetPasswordUseCase = new ResetPasswordUseCase(userRepository);

const ResetPasswordScreen: React.FC<ResetPasswordScreenProps> = ({
  resetPassword = resetPasswordUseCase,
}) => {
  const [code, setCode] = useState("");

  const handleVerifyCode = async () => {
    const token = await resetPassword.verifyCode(code);
    router.push({ pathname: "/enter-new-password", params: { token } });
  };

  return (
    <View style={globalStyles.container}>
      <Heading bold>Reset your Password</Heading>
      <StyledText paragraph>Enter the code sent to your email</StyledText>

      <Input
        label="Code"
        placeholder="Enter the 6-digit code"
        onChangeText={setCode}
        value={code}
        keyboardType="number-pad"
      />

      <Button title="Continue" onPress={handleVerifyCode} marginTop />
    </View>
  );
};

export default ResetPasswordScreen;
