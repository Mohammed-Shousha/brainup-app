import { createContext, useContext } from "react";

import QuizRepository from "@/data/repositories/quiz.repository.impl";

import CreateQuizUseCase from "@/domain/usecases/quiz/create-quiz.usecase";
import UpdateQuizUseCase from "@/domain/usecases/quiz/update-quiz.usecase";
import DeleteQuizUseCase from "@/domain/usecases/quiz/delete-quiz.usecase";
import GetQuizUseCase from "@/domain/usecases/quiz/get-quiz.usecases";

const quizRepository = new QuizRepository();

const createQuizUseCase = new CreateQuizUseCase(quizRepository);
const updateQuizUseCase = new UpdateQuizUseCase(quizRepository);
const deleteQuizUseCase = new DeleteQuizUseCase(quizRepository);
const getQuizUseCase = new GetQuizUseCase(quizRepository);

type QuizContextType = {
  useCases: {
    createQuiz: CreateQuizUseCase;
    updateQuiz: UpdateQuizUseCase;
    deleteQuiz: DeleteQuizUseCase;
    getQuiz: GetQuizUseCase;
  };
};

export const QuizContext = createContext<QuizContextType>({
  useCases: {
    createQuiz: createQuizUseCase,
    updateQuiz: updateQuizUseCase,
    deleteQuiz: deleteQuizUseCase,
    getQuiz: getQuizUseCase,
  },
});

export const useQuizUseCases = () => useContext(QuizContext).useCases;

type QuizProviderProps = {
  children: React.ReactNode;
};

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  return (
    <QuizContext.Provider
      value={{
        useCases: {
          createQuiz: createQuizUseCase,
          updateQuiz: updateQuizUseCase,
          deleteQuiz: deleteQuizUseCase,
          getQuiz: getQuizUseCase,
        },
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
