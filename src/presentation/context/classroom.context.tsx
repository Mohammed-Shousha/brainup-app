import { createContext, useContext } from "react";

import ClassroomRepository from "@/data/repositories/classroom.repository.impl";

import CreateClassroomUseCase from "@/domain/usecases/classroom/create-classroom.usecase";
import DeleteClassroomUseCase from "@/domain/usecases/classroom/delete-classroom.usecase";
import GetClassroomUseCase from "@/domain/usecases/classroom/get-classroom.usecase";
import GetUserClassroomsUseCase from "@/domain/usecases/classroom/get-user-classrooms.usecase";

const classroomRepository = new ClassroomRepository();

const createClassroomUseCase = new CreateClassroomUseCase(classroomRepository);
const deleteClassroomUseCase = new DeleteClassroomUseCase(classroomRepository);
const getClassroomUseCase = new GetClassroomUseCase(classroomRepository);
const getUserClassroomsUseCase = new GetUserClassroomsUseCase(
  classroomRepository
);

type ClassroomContextType = {
  useCases: {
    createClassroom: CreateClassroomUseCase;
    deleteClassroom: DeleteClassroomUseCase;
    getClassroom: GetClassroomUseCase;
    getUserClassrooms: GetUserClassroomsUseCase;
  };
};

export const ClassroomContext = createContext<ClassroomContextType>({
  useCases: {
    createClassroom: createClassroomUseCase,
    deleteClassroom: deleteClassroomUseCase,
    getClassroom: getClassroomUseCase,
    getUserClassrooms: getUserClassroomsUseCase,
  },
});

export const useClassroomUseCases = () => useContext(ClassroomContext).useCases;

type ClassroomProviderProps = {
  children: React.ReactNode;
};

export const ClassroomProvider: React.FC<ClassroomProviderProps> = ({
  children,
}) => {
  return (
    <ClassroomContext.Provider
      value={{
        useCases: {
          createClassroom: createClassroomUseCase,
          deleteClassroom: deleteClassroomUseCase,
          getClassroom: getClassroomUseCase,
          getUserClassrooms: getUserClassroomsUseCase,
        },
      }}
    >
      {children}
    </ClassroomContext.Provider>
  );
};
