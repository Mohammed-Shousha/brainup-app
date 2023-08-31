import { View } from "react-native";
import { useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";

import { useClassroomUseCases } from "@/presentation/context/classroom.context";

import Heading from "@/presentation/components/heading.component";
import Button from "@/presentation/components/button.component";

import globalStyles from "@/presentation/styles/global.styles";

const StudentClassroomScreen = () => {
  const { classroomId } = useLocalSearchParams();

  const { getClassroom } = useClassroomUseCases();

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
      <Heading>Student Classroom Screen</Heading>
      <Button
        title="To Lesson"
        onPress={() => router.push("/student/lesson/lesson-id")}
      />
      <Button
        title="To Quiz"
        onPress={() => router.push("/student/quiz/quiz-id")}
      />
    </View>
  );
};

export default StudentClassroomScreen;
