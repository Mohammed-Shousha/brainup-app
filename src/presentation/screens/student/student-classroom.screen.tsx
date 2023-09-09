import { View } from "react-native";
import { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";

import Classroom from "@/domain/entities/classroom.entity";

import { useClassroomUseCases } from "@/presentation/context/classroom.context";

import Heading from "@/presentation/components/heading.component";
import Button from "@/presentation/components/button.component";
import StyledText from "@/presentation/components/text.component";

import globalStyles from "@/presentation/styles/global.styles";

const StudentClassroomScreen = () => {
  const { classroomId } = useLocalSearchParams();

  const [classroom, setClassroom] = useState<Classroom>();

  // const { getTeacherClassroom: getClassroom } = useClassroomUseCases();

  // useEffect(() => {
  //   const getClassroomData = async () => {
  //     if (!classroomId) return;

  //     if (typeof classroomId !== "string") return;

  //     try {
  //       const classroom = await getClassroom.execute(classroomId);
  //       setClassroom(classroom);
  //       console.log({ classroom });
  //     } catch (error) {
  //       alert(error);
  //     }
  //   };

  //   getClassroomData();
  // }, []);

  return (
    <View style={globalStyles.container}>
      <Heading>Student Classroom Screen</Heading>
      {/* <StyledText>{JSON.stringify(classroom)}</StyledText> */}
      {/* <Button
        title="To Lesson"
        onPress={() => router.push("/student/lesson/lesson-id")}
      />
      <Button
        title="To Quiz"
        onPress={() => router.push("/student/quiz/quiz-id")}
      /> */}
    </View>
  );
};

export default StudentClassroomScreen;
