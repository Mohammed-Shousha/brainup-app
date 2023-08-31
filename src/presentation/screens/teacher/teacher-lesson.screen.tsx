import { View } from "react-native";
import { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";

import { useLessonUseCases } from "@/presentation/context/lesson.context";

import Heading from "@/presentation/components/heading.component";
import Button from "@/presentation/components/button.component";

import globalStyles from "@/presentation/styles/global.styles";

const TeacherLessonScreen = () => {
  const { lessonId } = useLocalSearchParams();

  const { updateLesson, deleteLesson, getLesson } = useLessonUseCases();

  const handleUpdateLesson = () => {
    const lesson = updateLesson.execute({
      id: "1",
      classroomId: "1",
      title: "Lesson 1",
      description: "Lesson 1 description",
      content: "Lesson 1 content",
    });

    console.log({ lesson });
  };

  const handleDeleteLesson = () => {
    deleteLesson.execute("1");
  };

  useEffect(() => {
    const getLessonData = async () => {
      if (!lessonId) return;

      if (typeof lessonId !== "string") return;

      const lesson = await getLesson.execute(lessonId);
      console.log({ lesson });
    };

    getLessonData();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Heading>Teacher Lesson Screen</Heading>
      <Button title="Update Lesson" onPress={handleUpdateLesson} />
      <Button title=" Delete Lesson" onPress={handleDeleteLesson} />
    </View>
  );
};

export default TeacherLessonScreen;
