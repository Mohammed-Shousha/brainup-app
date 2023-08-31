import { View } from "react-native";
import { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";

import { useQuizUseCases } from "@/presentation/context/quiz.context";

import Heading from "@/presentation/components/heading.component";
import Button from "@/presentation/components/button.component";

import globalStyles from "@/presentation/styles/global.styles";

const TeacherQuizScreen = () => {
  const { quizId } = useLocalSearchParams();

  const { updateQuiz, deleteQuiz, getQuiz } = useQuizUseCases();

  const handleUpdateQuiz = () => {
    const quiz = updateQuiz.execute({
      id: "1",
      classroomId: "1",
      title: "Quiz 1",
      description: "Quiz 1 description",
    });

    console.log({ quiz });
  };

  const handleDeleteQuiz = () => {
    deleteQuiz.execute("1");
  };

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
      <Heading>Teacher Quiz Screen</Heading>
      <Button title="Update Quiz" onPress={handleUpdateQuiz} />
      <Button title=" Delete Quiz" onPress={handleDeleteQuiz} />
    </View>
  );
};

export default TeacherQuizScreen;
