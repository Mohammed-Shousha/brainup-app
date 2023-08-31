import { View } from "react-native";
import { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";

import { useLessonUseCases } from "@/presentation/context/lesson.context";

import Heading from "@/presentation/components/heading.component";

import globalStyles from "@/presentation/styles/global.styles";

const StudentLessonScreen = () => {
  const { lessonId } = useLocalSearchParams();

  const { getLesson } = useLessonUseCases();

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
      <Heading>Student Lesson Screen</Heading>
    </View>
  );
};

export default StudentLessonScreen;
