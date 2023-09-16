import { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

import Quiz from "@/domain/entities/quiz.entity";
import Question from "@/domain/entities/question.entity";

import { useQuizUseCases } from "@/presentation/context/quiz.context";

import Heading from "@/presentation/components/heading.component";
import Button from "@/presentation/components/button.component";
import StyledText from "@/presentation/components/text.component";
import ModalComponent from "@/presentation/components/modal.component";

import BackArrowIcon from "@/presentation/components/icons/back-arrow.icon";
import ForwardArrowIcon from "@/presentation/components/icons/forward-arrow.icon";
import DoneIcon from "@/presentation/components/icons/done.icon";

import colors from "@/presentation/styles/colors.styles";

import globalStyles from "@/presentation/styles/global.styles";

const StudentQuizScreen = () => {
  const { quiz_id } = useLocalSearchParams();

  const { getStudentQuiz } = useQuizUseCases();

  const [quiz, setQuiz] = useState<Quiz>();
  const [quizQuestions, setQuizQuestions] = useState<Question[]>();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [answersResult, setAnswersResult] = useState<boolean[]>([]); // [true, false, true]
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5 * 60);

  const [modalVisible, setModalVisible] = useState(false);

  const handleOptionPress = (option: number, questionNumber: number) => {
    if (isQuizFinished) return;

    const answersCopy = [...answers];
    answersCopy[questionNumber] = option;

    setAnswers(answersCopy);
  };

  const handleNextPress = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleBackPress = () => {
    if (currentQuestion === 0) return;

    setCurrentQuestion(currentQuestion - 1);
  };

  const checkAnswers = () => {
    const correctAnswers = quizQuestions?.map((question) => question.answer);

    const correctAnswersResult = answers.map((answer, index) => {
      return answer === correctAnswers?.[index];
    });

    return correctAnswersResult;
  };

  const calculateScore = (answersResult: boolean[]) => {
    const score = answersResult.filter((answer) => answer).length;

    return score;
  };

  const handleSubmitQuiz = () => {
    const answersResult = checkAnswers();

    const score = calculateScore(answersResult);

    setAnswersResult(answersResult);
    setScore(score);
    setModalVisible(true);
    setCurrentQuestion(0);
    setTimeLeft(0);
    setIsQuizFinished(true);
  };

  const IsLastQuestion = () => currentQuestion === quizQuestions?.length! - 1;

  const IsFirstQuestion = () => currentQuestion === 0;

  const showCorrectAnswerStyle = (index: number) => {
    if (isQuizFinished && quizQuestions?.[currentQuestion].answer === index) {
      return styles.correctAnswer;
    }
  };

  const showWrongAnswerStyle = (index: number) => {
    if (
      isQuizFinished &&
      !answersResult[currentQuestion] &&
      answers[currentQuestion] === index
    ) {
      return styles.wrongAnswer;
    }
  };

  useEffect(() => {
    const getQuiz = async () => {
      if (!quiz_id) return;

      if (typeof quiz_id !== "string") return;

      try {
        const quiz = await getStudentQuiz.execute(quiz_id);
        setQuiz(quiz);
        setQuizQuestions(quiz.questions);
      } catch (getStudentQuizError) {
        console.log({ getStudentQuizError });
      }
    };

    getQuiz();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => (prevTimeLeft > 0 ? prevTimeLeft - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0 && !isQuizFinished) {
      handleSubmitQuiz();
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <View style={globalStyles.container}>
      <ModalComponent
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Great Job"
        message={`You have scored ${score} out of ${quizQuestions?.length}`}
      />
      <Heading>{`${quiz?.name}`}</Heading>
      <View style={styles.header}>
        <View>
          <StyledText style={styles.questionNumber}>
            Question {currentQuestion + 1} of {quizQuestions?.length}
          </StyledText>

          {isQuizFinished && (
            <StyledText style={styles.questionNumber}>
              Score: {score}
            </StyledText>
          )}
        </View>
        {IsLastQuestion() && !isQuizFinished && (
          <Button
            icon={<DoneIcon />}
            onPress={handleSubmitQuiz}
            style={[styles.button, styles.sumitButton]}
          />
        )}
      </View>
      <View style={styles.timerContainer}>
        <StyledText bold style={styles.timer}>
          {`${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`}
        </StyledText>
      </View>

      <View style={styles.content}>
        <StyledText style={styles.question} selectable>
          {quizQuestions?.[currentQuestion].question}
        </StyledText>

        {quizQuestions?.[currentQuestion].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              answers[currentQuestion] === index && styles.selectedOption,
              showCorrectAnswerStyle(index),
              showWrongAnswerStyle(index),
            ]}
            onPress={() => handleOptionPress(index, currentQuestion)}
          >
            <StyledText style={styles.optionText}>{option}</StyledText>
          </TouchableOpacity>
        ))}

        <View style={styles.buttonsContainer}>
          {!IsFirstQuestion() && (
            <Button
              icon={<BackArrowIcon />}
              onPress={handleBackPress}
              style={[styles.button, styles.backButton]}
            />
          )}

          {!IsLastQuestion() && (
            <Button
              icon={<ForwardArrowIcon />}
              onPress={handleNextPress}
              style={[styles.button, styles.nextButton]}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default StudentQuizScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  questionNumber: {
    fontSize: 16,
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  question: {
    fontSize: 24,
  },
  option: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.extraLightGray,
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedOption: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  optionText: {
    fontSize: 16,
    marginBottom: 0,
  },
  button: {
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  nextButton: {
    marginLeft: "auto",
  },
  backButton: {
    marginRight: "auto",
  },
  sumitButton: {
    marginBottom: 0,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  correctAnswer: {
    backgroundColor: "lightgreen",
  },
  wrongAnswer: {
    backgroundColor: "lightcoral",
  },
  timerContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  timer: {
    fontSize: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    marginTop: "auto",
  },
});
