import { View } from "react-native";
import { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";

import { useQuizUseCases } from "@/presentation/context/quiz.context";

import Heading from "@/presentation/components/heading.component";

import globalStyles from "@/presentation/styles/global.styles";

const TeacherQuizScreen = () => {
  const { quizId } = useLocalSearchParams();

  return (
    <View style={globalStyles.container}>
      <Heading>Teacher Quiz Screen</Heading>
    </View>
  );
};

export default TeacherQuizScreen;
