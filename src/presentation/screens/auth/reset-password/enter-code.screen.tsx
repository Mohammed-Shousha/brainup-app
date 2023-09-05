import React, { useState } from "react";
import { View } from "react-native";
import { router } from "expo-router";

import { useUserUseCases } from "@/presentation/context/user.context";

import Heading from "@/presentation/components/heading.component";
import Input from "@/presentation/components/input.component";
import Button from "@/presentation/components/button.component";
import StyledText from "@/presentation/components/text.component";

import globalStyles from "@/presentation/styles/global.styles";

const ResetPasswordScreen: React.FC = () => {
  const { resetPassword } = useUserUseCases();

  const [code, setCode] = useState("");

  const handleVerifyCode = async () => {
    const verifyCodeResult = await resetPassword.verifyCode(code);

    console.log({ verifyCodeResult });

    if (verifyCodeResult.status === "failed") {
      alert(verifyCodeResult.message);
      return;
    }

    router.push("/enter-new-password");
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
