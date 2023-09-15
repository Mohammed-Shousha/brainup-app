import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { useAiUseCases } from "@/presentation/context/ai.context";

import Heading from "@/presentation/components/heading.component";
import Input from "@/presentation/components/input.component";
import Button from "@/presentation/components/button.component";

import SendIcon from "@/presentation/components/icons/send.icon";

import colors from "@/presentation/styles/colors.styles";
import fonts from "@/presentation/styles/fonts.styles";

import globalStyles from "@/presentation/styles/global.styles";

const StudentChatScreen = () => {
  const { getAiResponse } = useAiUseCases();

  const [message, setMessage] = useState("");
  const [sentMessage, setSentMessage] = useState("");
  const [receivedMessage, setReceivedMessage] = useState("");

  const handleMessageSend = async () => {
    if (!message) return;

    setSentMessage(message);
    setMessage("");

    setReceivedMessage("AI Assistant is thinking...");

    const aiResponse = await getAiResponse.execute(message);

    setReceivedMessage(aiResponse);
  };

  return (
    <View style={globalStyles.container}>
      <Heading>AI Assistant</Heading>
      <ScrollView style={styles.messagesContainer}>
        {sentMessage ? (
          <Text style={styles.message}>{sentMessage}</Text>
        ) : (
          <Text style={[styles.message, styles.recivedMessage]}>
            Hello, I am your AI Assistant. How can I help you?
          </Text>
        )}

        {receivedMessage && (
          <Text style={[styles.message, styles.recivedMessage]}>
            {receivedMessage}
          </Text>
        )}
      </ScrollView>
      <View style={styles.inputContainer}>
        <Input
          label=""
          onChangeText={setMessage}
          value={message}
          placeholder="Enter your message"
          style={styles.input}
        />
        <Button
          icon={<SendIcon fill={colors.white} />}
          onPress={handleMessageSend}
          style={{ paddingHorizontal: 15 }}
        />
      </View>
    </View>
  );
};

export default StudentChatScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  messagesContainer: {
    flex: 1,
    marginVertical: 10,
  },
  message: {
    fontSize: 20,
    backgroundColor: colors.ultraLightGray,
    fontFamily: fonts.nunitoSemiBold,
    width: "70%",
    borderRadius: 8,
    padding: 8,
    marginVertical: 4,
  },
  recivedMessage: {
    backgroundColor: colors.lightSecondary,
    alignSelf: "flex-end",
  },
});
