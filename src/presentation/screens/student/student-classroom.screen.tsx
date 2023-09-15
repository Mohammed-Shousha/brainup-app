import { View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";

import Classroom from "@/domain/entities/classroom.entity";

import { useClassroomUseCases } from "@/presentation/context/classroom.context";

import Heading from "@/presentation/components/heading.component";
import Header from "@/presentation/components/header.component";
import LessonTile from "@/presentation/components/lesson-tile.component";
import SelectorButton from "@/presentation/components/selector-button.component";

import colors from "@/presentation/styles/colors.styles";

import globalStyles from "@/presentation/styles/global.styles";
import QuizTile from "@/presentation/components/quiz-tile.component";

const StudentClassroomScreen = () => {
  const { classroom_id } = useLocalSearchParams();

  const [activeSelector, setActiveSelector] = useState<"lessons" | "quizzes">(
    "lessons"
  );

  const [classroom, setClassroom] = useState<Classroom>();

  const { getStudentClassroom } = useClassroomUseCases();

  useEffect(() => {
    const getClassroom = async () => {
      if (!classroom_id) return;

      if (typeof classroom_id !== "string") return;

      try {
        const classroom = await getStudentClassroom.execute(classroom_id);
        setClassroom(classroom);
      } catch (getStudentClassroomError) {
        console.log({ getStudentClassroomError });
      }
    };

    getClassroom();
  }, []);

  return (
    <View style={[globalStyles.container, { paddingHorizontal: 20 }]}>
      <Header />

      <Heading bold style={{ fontSize: 24 }}>
        {`${classroom?.name}`}
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
          ? classroom?.lessons?.map((lesson) => (
              <LessonTile
                key={lesson.id}
                lessonName={lesson.name}
                pdf={lesson.pdf?.content}
                video={lesson.video?.content}
              />
            ))
          : classroom?.quizzes?.map((quiz) => (
              <QuizTile key={quiz.id} quizId={quiz.id} quizName={quiz.name} />
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
