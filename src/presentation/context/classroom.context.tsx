import { createContext, useContext } from "react";

import ClassroomRepository from "@/data/repositories/classroom.repository.impl";

import CreateClassroomUseCase from "@/domain/usecases/classroom/create-classroom.usecase";
import DeleteClassroomUseCase from "@/domain/usecases/classroom/delete-classroom.usecase";
import GetClassroomUseCase from "@/domain/usecases/classroom/get-classroom.usecase";
import GetClassroomsUseCase from "@/domain/usecases/classroom/get-classrooms.usecase";
import JoinClassroomUseCase from "@/domain/usecases/classroom/join-classroom.usecase";
import ApproveStudentUseCase from "@/domain/usecases/classroom/approve-student.usecase";
import RejectStudentUseCase from "@/domain/usecases/classroom/reject-student.usecase";

const classroomRepository = new ClassroomRepository();

const createClassroomUseCase = new CreateClassroomUseCase(classroomRepository);
const deleteClassroomUseCase = new DeleteClassroomUseCase(classroomRepository);
const getClassroomUseCase = new GetClassroomUseCase(classroomRepository);
const getClassroomsUseCase = new GetClassroomsUseCase(classroomRepository);
const joinClassroomUseCase = new JoinClassroomUseCase(classroomRepository);
const approveStudentUseCase = new ApproveStudentUseCase(classroomRepository);
const rejectStudentUseCase = new RejectStudentUseCase(classroomRepository);

type ClassroomContextType = {
  useCases: {
    createClassroom: CreateClassroomUseCase;
    deleteClassroom: DeleteClassroomUseCase;
    getClassroom: GetClassroomUseCase;
    getClassrooms: GetClassroomsUseCase;
    joinClassroom: JoinClassroomUseCase;
    approveStudent: ApproveStudentUseCase;
    rejectStudent: RejectStudentUseCase;
  };
};

const classroomContextDefaultValue: ClassroomContextType = {
  useCases: {
    createClassroom: createClassroomUseCase,
    deleteClassroom: deleteClassroomUseCase,
    getClassroom: getClassroomUseCase,
    getClassrooms: getClassroomsUseCase,
    joinClassroom: joinClassroomUseCase,
    approveStudent: approveStudentUseCase,
    rejectStudent: rejectStudentUseCase,
  },
};

export const ClassroomContext = createContext<ClassroomContextType>(
  classroomContextDefaultValue
);

export const useClassroomUseCases = () => useContext(ClassroomContext).useCases;

type ClassroomProviderProps = {
  children: React.ReactNode;
};

export const ClassroomProvider: React.FC<ClassroomProviderProps> = ({
  children,
}) => {
  return (
    <ClassroomContext.Provider value={classroomContextDefaultValue}>
      {children}
    </ClassroomContext.Provider>
  );
};
