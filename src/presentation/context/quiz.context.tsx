import { createContext, useContext } from "react";

import QuizRepository from "@/data/repositories/quiz.repository.impl";

import CreateQuizUseCase from "@/domain/usecases/quiz/create-quiz.usecase";
import GetTeacherQuizzesUseCase from "@/domain/usecases/quiz/get-teacher-quizzes.usecases";
import GetStudentQuizUseCase from "@/domain/usecases/quiz/get-student-quiz.usecase";

const quizRepository = new QuizRepository();

const createQuizUseCase = new CreateQuizUseCase(quizRepository);
const getTeacherQuizzesUseCase = new GetTeacherQuizzesUseCase(quizRepository);
const getStudentQuizUseCase = new GetStudentQuizUseCase(quizRepository);

type QuizContextType = {
  useCases: {
    createQuiz: CreateQuizUseCase;
    getTeacherQuizzes: GetTeacherQuizzesUseCase;
    getStudentQuiz: GetStudentQuizUseCase;
  };
};

const quizContextDefaultValue: QuizContextType = {
  useCases: {
    createQuiz: createQuizUseCase,
    getTeacherQuizzes: getTeacherQuizzesUseCase,
    getStudentQuiz: getStudentQuizUseCase,
  },
};

export const QuizContext = createContext<QuizContextType>(
  quizContextDefaultValue
);

export const useQuizUseCases = () => useContext(QuizContext).useCases;

type QuizProviderProps = {
  children: React.ReactNode;
};

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  return (
    <QuizContext.Provider value={quizContextDefaultValue}>
      {children}
    </QuizContext.Provider>
  );
};
