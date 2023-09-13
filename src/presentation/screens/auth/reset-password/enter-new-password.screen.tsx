import React, { useState } from "react";
import { View } from "react-native";
import { router } from "expo-router";

import { useUserUseCases } from "@/presentation/context/user.context";

import Heading from "@/presentation/components/heading.component";
import Input from "@/presentation/components/input.component";
import Button from "@/presentation/components/button.component";

import globalStyles from "@/presentation/styles/global.styles";

const EnterNewPasswordScreen: React.FC = ({}) => {
  const { resetPassword } = useUserUseCases();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = async () => {
    const resetPasswordResult = await resetPassword.reset(confirmPassword);
    console.log({ resetPasswordResult });

    if (resetPasswordResult.status === "failed") {
      alert(resetPasswordResult.message);
      return;
    }

    router.replace("/login");
  };

  return (
    <View style={globalStyles.container}>
      <Heading bold style={{ marginBottom: 40 }}>
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
