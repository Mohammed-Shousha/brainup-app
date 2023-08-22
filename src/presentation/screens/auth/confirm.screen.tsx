import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

import { UserRepository } from "../../../data/repositories/user.repository.impl";
import { ConfirmEmailUseCase } from "../../../domain/usecases/confirm-email.usecase";

import { formStyles } from "../../styles/form.styles";

type ConfirmScreenProps = {
  confirmEmail: ConfirmEmailUseCase;
};

const userRepository = new UserRepository();
const confirmEmailUseCase = new ConfirmEmailUseCase(userRepository);

const ConfirmScreen: React.FC<ConfirmScreenProps> = ({
  confirmEmail = confirmEmailUseCase,
}) => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleSendEmail = async () => {
    await confirmEmail.send(email);
  };

  const handleVerifyCode = async () => {
    await confirmEmail.verifyCode(code);
  };

  return (
    <View style={formStyles.container}>
      <Text style={formStyles.text}>Confirm Email</Text>

      <TextInput
        style={formStyles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <Button title={"Send Email"} onPress={handleSendEmail} />

      <TextInput
        style={formStyles.input}
        placeholder="Code"
        onChangeText={setCode}
        value={code}
      />
      <Button title={"Verify Code"} onPress={handleVerifyCode} />
    </View>
  );
};

export default ConfirmScreen;
