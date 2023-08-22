import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

import { UserRepository } from "../../../data/repositories/user.repository.impl";
import { ResetPasswordUseCase } from "../../../domain/usecases/reset-password.usecase";

import { formStyles } from "../../styles/form.styles";

type ResetPasswordScreenProps = {
  resetPassword: ResetPasswordUseCase;
};

const userRepository = new UserRepository();
const resetPasswordUseCase = new ResetPasswordUseCase(userRepository);

const ResetPasswordScreen: React.FC<ResetPasswordScreenProps> = ({
  resetPassword = resetPasswordUseCase,
}) => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");

  const handleSendEmail = async () => {
    await resetPassword.send(email);
  };

  const handleVerifyCode = async () => {
    const token = await resetPassword.verifyCode(code);
    setToken(token);
  };

  const handleResetPassword = async () => {
    await resetPassword.reset(token, password);
  };

  return (
    <View style={formStyles.container}>
      <Text style={formStyles.text}>Reset Password</Text>

      <TextInput
        style={formStyles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <Button title="Send Email" onPress={handleSendEmail} />

      <TextInput
        style={formStyles.input}
        placeholder="Code"
        onChangeText={setCode}
        value={code}
      />
      <Button title="Verify Code" onPress={handleVerifyCode} />

      <TextInput
        style={formStyles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Reset Password" onPress={handleResetPassword} />
    </View>
  );
};

export default ResetPasswordScreen;
