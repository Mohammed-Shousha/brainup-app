import { View } from "react-native";
import { useEffect } from "react";
import { useLocalSearchParams, router } from "expo-router";

import { useClassroomUseCases } from "@/presentation/context/classroom.context";
import { useQuizUseCases } from "@/presentation/context/quiz.context";
import { useLessonUseCases } from "@/presentation/context/lesson.context";

import Heading from "@/presentation/components/heading.component";
import Button from "@/presentation/components/button.component";

import globalStyles from "@/presentation/styles/global.styles";

const TeacherClassroomScreen = () => {
  const { classroomId } = useLocalSearchParams();

  const { getClassroom, deleteClassroom } = useClassroomUseCases();

  const { createLesson } = useLessonUseCases();

  const { createQuiz } = useQuizUseCases();

  const handleCreateLesson = () => {
    const lesson = createLesson.execute({
      id: "1",
      classroomId: "1",
      title: "Lesson 1",
      description: "Lesson 1 description",
      content: "Lesson 1 content",
    });

    console.log({ lesson });
  };

  const handleCreateQuiz = () => {
    const quiz = createQuiz.execute({
      id: "1",
      classroomId: "1",
      title: "Quiz 1",
      description: "Quiz 1 description",
    });

    console.log({ quiz });
  };

  const handleDeleteClassroom = () => {
    deleteClassroom.execute("1");
  };

  useEffect(() => {
    const getClassroomData = async () => {
      if (!classroomId) return;

      if (typeof classroomId !== "string") return;

      const classroom = await getClassroom.execute(classroomId);
      console.log({ classroom });
    };

    getClassroomData();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Heading>Teacher Classroom Screen</Heading>
      <Button title="Add Lesson" onPress={handleCreateLesson} />
      <Button title="Add Quiz" onPress={handleCreateQuiz} />
      <Button title="Delete Classroom" onPress={handleDeleteClassroom} />
      <Button
        title="To Lesson"
        onPress={() => router.push("/teacher/lesson/lesson-id")}
      />
      <Button
        title="To Quiz"
        onPress={() => router.push("/teacher/quiz/quiz-id")}
      />
    </View>
  );
};

export default TeacherClassroomScreen;
