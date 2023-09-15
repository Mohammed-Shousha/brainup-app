import { View, StyleSheet } from "react-native";
import { router } from "expo-router";

import Button from "@/presentation/components/button.component";
import StyledText from "@/presentation/components/text.component";

import colors from "@/presentation/styles/colors.styles";
import QuizIcon from "@/presentation/components/icons/quiz.icon";

interface QuizTileProps {
  quizId: string;
  quizName: string;
}

const QuizTile: React.FC<QuizTileProps> = ({ quizId, quizName }) => {
  const handleAttemptQuiz = () => {
    router.push(`/student/quiz/${quizId}`);
  };

  return (
    <>
      <View style={styles.container}>
        <StyledText>{quizName}</StyledText>
        <Button
          title="Attempt"
          icon={<QuizIcon fill={colors.white} />}
          style={{ paddingHorizontal: 20 }}
          onPress={handleAttemptQuiz}
        />
      </View>
    </>
  );
};

export default QuizTile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: colors.wheat,
    borderBottomWidth: 3,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
