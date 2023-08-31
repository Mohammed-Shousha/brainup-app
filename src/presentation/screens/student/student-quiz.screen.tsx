import { View, Text } from "react-native";
import { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";

import { useQuizUseCases } from "@/presentation/context/quiz.context";

import Heading from "@/presentation/components/heading.component";

import globalStyles from "@/presentation/styles/global.styles";

const StudentQuizScreen = () => {
  const { quizId } = useLocalSearchParams();

  const { getQuiz } = useQuizUseCases();

  useEffect(() => {
    const getQuizData = async () => {
      if (!quizId) return;

      if (typeof quizId !== "string") return;

      const quiz = await getQuiz.execute(quizId);
      console.log({ quiz });
    };

    getQuizData();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Heading>Student Quiz Screen</Heading>
    </View>
  );
};

export default StudentQuizScreen;
