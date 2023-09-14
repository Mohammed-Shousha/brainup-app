import { View } from "react-native";
import { useEffect, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";

import Classroom from "@/domain/entities/classroom.entity";
import Quiz from "@/domain/entities/quiz.entity";

import { useClassroomUseCases } from "@/presentation/context/classroom.context";
import { useQuizUseCases } from "@/presentation/context/quiz.context";
import { useLessonUseCases } from "@/presentation/context/lesson.context";

import Heading from "@/presentation/components/heading.component";
import Button from "@/presentation/components/button.component";
import StyledText from "@/presentation/components/text.component";

import globalStyles from "@/presentation/styles/global.styles";

const TeacherClassroomScreen = () => {
  const { classroom_id } = useLocalSearchParams();

  const {
    getTeacherClassroom,
    deleteClassroom,
    approveStudent,
    rejectStudent,
  } = useClassroomUseCases();

  const { getTeacherQuizzes, createQuiz } = useQuizUseCases();

  // const { createLesson } = useLessonUseCases();

  const [classroom, setClassroom] = useState<Classroom>();
  const [quizzes, setQuizzes] = useState<Quiz[]>();

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

  const handleCreateQuiz = () => {
    try {
      const quiz = createQuiz.execute({
        classroomId: "6",
        config: {
          time: 10,
          numberOfModels: 1,
          numberOfQuestions: 1,
          numberOfChoices: 2,
          shuffleQuestions: true,
          active: true,
          instantResult: true,
          sendResult: false,
        },
        questions: [
          {
            question: "Question 1",
            choices: ["Choice 1", "Choice 2"],
            answer: "0",
            mark: 1,
          },
        ],
      });
      console.log({ quiz });
    } catch (error) {
      console.error(error);
    }
  };

  // const handleDeleteClassroom = () => {
  //   deleteClassroom.execute("1");
  // };

  const getClassroom = async () => {
    if (!classroom_id) return;

    if (typeof classroom_id !== "string") return;

    try {
      const classroomResult = await getTeacherClassroom.execute(classroom_id);
      setClassroom(classroomResult);
    } catch (error) {
      console.error(error);
    }
  };

  const getQuizzes = async () => {
    try {
      const quizzes = await getTeacherQuizzes.execute();
      setQuizzes(quizzes);
      console.log({ quizzes });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getClassroom();
    getQuizzes();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Heading>Teacher Classroom Screen</Heading>
      {/* <Button title="Add Lesson" onPress={handleCreateLesson} />
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
      <StyledText>{JSON.stringify(quizzes)}</StyledText>

      <Button title="Add Quiz" onPress={handleCreateQuiz} />
      {classroom?.requests?.map((request) => (
        <View key={request.id}>
          <Button
            title={`Approve ${request.id}: ${request.name}`}
            onPress={() => handleApproveStudent(request.id)}
          ></Button>

          <Button
            title={`Reject ${request.id}: ${request.name}`}
            onPress={() => handleRejectStudent(request.id)}
          ></Button>
        </View>
      ))}
    </View>
  );
};

export default TeacherClassroomScreen;
