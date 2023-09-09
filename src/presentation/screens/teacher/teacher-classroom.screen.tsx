import { View } from "react-native";
import { useEffect, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";

import Classroom from "@/domain/entities/classroom.entity";

import { useClassroomUseCases } from "@/presentation/context/classroom.context";
import { useQuizUseCases } from "@/presentation/context/quiz.context";
import { useLessonUseCases } from "@/presentation/context/lesson.context";

import Heading from "@/presentation/components/heading.component";
import Button from "@/presentation/components/button.component";

import globalStyles from "@/presentation/styles/global.styles";
import StyledText from "@/presentation/components/text.component";

const TeacherClassroomScreen = () => {
  const { classroom_id } = useLocalSearchParams();

  const {
    getTeacherClassroom,
    deleteClassroom,
    approveStudent,
    rejectStudent,
  } = useClassroomUseCases();

  // const { createLesson } = useLessonUseCases();

  // const { createQuiz } = useQuizUseCases();

  const [classroom, setClassroom] = useState<Classroom>();

  const handleApproveStudent = async (requestId: string) => {
    const approveStudentResult = await approveStudent.execute(requestId);

    alert(approveStudentResult.message);
  };

  const handleRejectStudent = async (requestId: string) => {
    const rejectStudentResult = await rejectStudent.execute(requestId);

    alert(rejectStudentResult.message);
  };

  // const handleCreateLesson = () => {
  //   const lesson = createLesson.execute({
  //     id: "1",
  //     classroomId: "1",
  //     title: "Lesson 1",
  //     description: "Lesson 1 description",
  //     content: "Lesson 1 content",
  //   });

  //   console.log({ lesson });
  // };

  // const handleCreateQuiz = () => {
  //   const quiz = createQuiz.execute({
  //     id: "1",
  //     classroomId: "1",
  //     title: "Quiz 1",
  //     description: "Quiz 1 description",
  //   });

  //   console.log({ quiz });
  // };

  // const handleDeleteClassroom = () => {
  //   deleteClassroom.execute("1");
  // };

  useEffect(() => {
    const getClassroom = async () => {
      if (!classroom_id) return;

      if (typeof classroom_id !== "string") return;

      try {
        const classroomResult = await getTeacherClassroom.execute(classroom_id);
        setClassroom(classroomResult);
      } catch (error) {
        console.log(error);
      }
    };

    getClassroom();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Heading>Teacher Classroom Screen</Heading>
      {/* <Button title="Add Lesson" onPress={handleCreateLesson} />
      <Button title="Add Quiz" onPress={handleCreateQuiz} />
      <Button title="Delete Classroom" onPress={handleDeleteClassroom} />
      <Button
        title="To Lesson"
        onPress={() => router.push("/teacher/lesson/lesson-id")}
      />
      <Button
        title="To Quiz"
        onPress={() => router.push("/teacher/quiz/quiz-id")}
      /> */}
      <StyledText>{JSON.stringify(classroom)}</StyledText>

      {classroom?.requests?.map((request) => (
        <>
          <Button
            key={request.id + "a"}
            title={`Approve ${request.id}: ${request.name}`}
            onPress={() => handleApproveStudent(request.id)}
          ></Button>

          <Button
            key={request.id + "r"}
            title={`Reject ${request.id}: ${request.name}`}
            onPress={() => handleRejectStudent(request.id)}
          ></Button>
        </>
      ))}
    </View>
  );
};

export default TeacherClassroomScreen;
