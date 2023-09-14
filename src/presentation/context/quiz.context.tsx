import { createContext, useContext } from "react";

import QuizRepository from "@/data/repositories/quiz.repository.impl";

import CreateQuizUseCase from "@/domain/usecases/quiz/create-quiz.usecase";
import GetTeacherQuizzesUseCase from "@/domain/usecases/quiz/get-teacher-quizzes.usecases";

const quizRepository = new QuizRepository();

const createQuizUseCase = new CreateQuizUseCase(quizRepository);
const getTeacherQuizzesUseCase = new GetTeacherQuizzesUseCase(quizRepository);

type QuizContextType = {
  useCases: {
    createQuiz: CreateQuizUseCase;
    getTeacherQuizzes: GetTeacherQuizzesUseCase;
  };
};

const quizContextDefaultValue: QuizContextType = {
  useCases: {
    createQuiz: createQuizUseCase,
    getTeacherQuizzes: getTeacherQuizzesUseCase,
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
