import { useState } from "react";
import { Text, TextInput, StyleSheet } from "react-native";

import colors from "@/presentation/styles/colors.styles";
import fonts from "@/presentation/styles/fonts.styles";

type InputProps = {
  label: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  secureTextEntry?: boolean;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad";
};

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  onChangeText,
  value,
  secureTextEntry = false,
  keyboardType = "default",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  return (
    <>
      <Text style={styles.label} testID="label">
        {label}
      </Text>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={colors.lightGray}
        onFocus={handleFocus}
        onBlur={handleBlur}
        keyboardType={keyboardType}
        testID="input"
      />
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.nunitoBold,
    color: colors.black,
    fontSize: 20,
    marginBottom: 5,
  },
  input: {
    fontFamily: fonts.nunitoSemiBold,
    fontSize: 20,
    color: colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 15,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: colors.extraLightGray,
    marginBottom: 20,
  },
  inputFocused: {
    borderColor: colors.primary,
  },
});
