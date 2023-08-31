import { createContext, useContext } from "react";

import LessonRepository from "@/data/repositories/lesson.repository.impl";

import CreateLessonUseCase from "@/domain/usecases/lesson/create-lesson.usecase";
import UpdateLessonUseCase from "@/domain/usecases/lesson/update-lesson.usecase";
import DeleteLessonUseCase from "@/domain/usecases/lesson/delete-lesson.usecase";
import GetLessonUseCase from "@/domain/usecases/lesson/get-lesson.usecase";

const lessonRepository = new LessonRepository();

const createLessonUseCase = new CreateLessonUseCase(lessonRepository);
const updateLessonUseCase = new UpdateLessonUseCase(lessonRepository);
const deleteLessonUseCase = new DeleteLessonUseCase(lessonRepository);
const getLessonUseCase = new GetLessonUseCase(lessonRepository);

type LessonContextType = {
  useCases: {
    createLesson: CreateLessonUseCase;
    updateLesson: UpdateLessonUseCase;
    deleteLesson: DeleteLessonUseCase;
    getLesson: GetLessonUseCase;
  };
};

export const LessonContext = createContext<LessonContextType>({
  useCases: {
    createLesson: createLessonUseCase,
    updateLesson: updateLessonUseCase,
    deleteLesson: deleteLessonUseCase,
    getLesson: getLessonUseCase,
  },
});

export const useLessonUseCases = () => useContext(LessonContext).useCases;

type LessonProviderProps = {
  children: React.ReactNode;
};

export const LessonProvider: React.FC<LessonProviderProps> = ({ children }) => {
  return (
    <LessonContext.Provider
      value={{
        useCases: {
          createLesson: createLessonUseCase,
          updateLesson: updateLessonUseCase,
          deleteLesson: deleteLessonUseCase,
          getLesson: getLessonUseCase,
        },
      }}
    >
      {children}
    </LessonContext.Provider>
  );
};
