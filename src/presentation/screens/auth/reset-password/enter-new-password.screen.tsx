import React, { useState } from "react";
import { View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import { UserRepository } from "@/data/repositories/user.repository.impl";
import { ResetPasswordUseCase } from "@/domain/usecases/reset-password.usecase";

import Heading from "@/presentation/components/heading.component";
import Input from "@/presentation/components/input.component";
import Button from "@/presentation/components/button.component";

import globalStyles from "@/presentation/styles/global.styles";

type ResetPasswordScreenProps = {
  resetPassword: ResetPasswordUseCase;
};

const userRepository = new UserRepository();
const resetPasswordUseCase = new ResetPasswordUseCase(userRepository);

const EnterNewPasswordScreen: React.FC<ResetPasswordScreenProps> = ({
  resetPassword = resetPasswordUseCase,
}) => {
  const { token } = useLocalSearchParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = async () => {
    if (token && typeof token === "string") {
      console.log({ token });
      await resetPassword.reset(token, confirmPassword);
      router.replace("/login");
    }
  };

  return (
    <View style={globalStyles.container}>
      <Heading bold marginBottom={40}>
        Enter your new password
      </Heading>

      <Input
        label="Password"
        placeholder="Enter new password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      <Input
        label="Confirm Password"
        placeholder="Confirm new password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry
      />

      <Button title="Reset Password" onPress={handleResetPassword} />
    </View>
  );
};

export default EnterNewPasswordScreen;
