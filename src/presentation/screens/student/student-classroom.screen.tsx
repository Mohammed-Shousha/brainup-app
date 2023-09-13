import { View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";

import Classroom from "@/domain/entities/classroom.entity";

import { useClassroomUseCases } from "@/presentation/context/classroom.context";

import Heading from "@/presentation/components/heading.component";
import Header from "@/presentation/components/header.component";
import LessonTile from "@/presentation/components/lesson-tile.component";
import SelectorButton from "@/presentation/components/selector-button.component";

import colors from "@/presentation/styles/colors.styles";

import globalStyles from "@/presentation/styles/global.styles";

const StudentClassroomScreen = () => {
  const { classroom_id } = useLocalSearchParams();

  const [activeSelector, setActiveSelector] = useState<"lessons" | "quizzes">(
    "lessons"
  );

  const [classroom, setClassroom] = useState<Classroom>();

  const [lessons, setLessons] = useState([
    {
      id: "1",
      name: "Lesson 1",
    },
    {
      id: "2",
      name: "Lesson 2",
    },
    {
      id: "3",
      name: "Lesson 3",
    },
  ]);

  const [quizzes, setQuizzes] = useState([
    {
      id: "1",
      name: "Quiz 1",
    },
    {
      id: "2",
      name: "Quiz 2",
    },
    {
      id: "3",
      name: "Quiz 3",
    },
  ]);

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
    <View style={[globalStyles.container, { paddingHorizontal: 20 }]}>
      <Header />

      <Heading bold style={{ fontSize: 24 }}>
        {`${classroom_id}`}
      </Heading>

      <View style={styles.selectorContainer}>
        <SelectorButton
          title="Lessons"
          onPress={() => {
            setActiveSelector("lessons");
          }}
          active={activeSelector === "lessons"}
        />

        <SelectorButton
          title="Quizzes"
          onPress={() => {
            setActiveSelector("quizzes");
          }}
          active={activeSelector === "quizzes"}
        />
      </View>

      <View style={{ flex: 1 }}>
        {activeSelector === "lessons"
          ? lessons.map((lesson) => (
              <LessonTile key={lesson.id} lessonName={lesson.name} />
            ))
          : quizzes.map((quiz) => (
              <LessonTile key={quiz.id} lessonName={quiz.name} />
            ))}
      </View>
    </View>
  );
};

export default StudentClassroomScreen;

const styles = StyleSheet.create({
  selectorContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderWidth: 5,
    borderRadius: 15,
    borderColor: colors.lightSecondary,
    marginTop: 12,
    marginBottom: 32,
  },
});
