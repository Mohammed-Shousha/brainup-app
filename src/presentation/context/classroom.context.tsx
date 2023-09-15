import { createContext, useContext } from "react";

import ClassroomRepository from "@/data/repositories/classroom.repository.impl";

import CreateClassroomUseCase from "@/domain/usecases/classroom/create-classroom.usecase";
import DeleteClassroomUseCase from "@/domain/usecases/classroom/delete-classroom.usecase";
import GetTeacherClassroomUseCase from "@/domain/usecases/classroom/get-teacher-classroom.usecase";
import GetTeacherClassroomsUseCase from "@/domain/usecases/classroom/get-teacher-classrooms.usecase";
import ApproveStudentUseCase from "@/domain/usecases/classroom/approve-student.usecase";
import RejectStudentUseCase from "@/domain/usecases/classroom/reject-student.usecase";
import JoinClassroomUseCase from "@/domain/usecases/classroom/join-classroom.usecase";
import GetStudentClassroomsUseCase from "@/domain/usecases/classroom/get-student-classrooms.usecase";
import GetStudentClassroomUseCase from "@/domain/usecases/classroom/get-student-classsroom.usecase";

const classroomRepository = new ClassroomRepository();

const createClassroomUseCase = new CreateClassroomUseCase(classroomRepository);
const deleteClassroomUseCase = new DeleteClassroomUseCase(classroomRepository);
const getTeacherClassroomUseCase = new GetTeacherClassroomUseCase(
  classroomRepository
);
const getTeacherClassroomsUseCase = new GetTeacherClassroomsUseCase(
  classroomRepository
);
const approveStudentUseCase = new ApproveStudentUseCase(classroomRepository);
const rejectStudentUseCase = new RejectStudentUseCase(classroomRepository);
const joinClassroomUseCase = new JoinClassroomUseCase(classroomRepository);
const getStudentClassroomsUseCase = new GetStudentClassroomsUseCase(
  classroomRepository
);
const getStudentClassroomUseCase = new GetStudentClassroomUseCase(
  classroomRepository
);

type ClassroomContextType = {
  useCases: {
    createClassroom: CreateClassroomUseCase;
    deleteClassroom: DeleteClassroomUseCase;
    getTeacherClassroom: GetTeacherClassroomUseCase;
    getTeacherClassrooms: GetTeacherClassroomsUseCase;
    approveStudent: ApproveStudentUseCase;
    rejectStudent: RejectStudentUseCase;
    joinClassroom: JoinClassroomUseCase;
    getStudentClassrooms: GetStudentClassroomsUseCase;
    getStudentClassroom: GetStudentClassroomUseCase;
  };
};

const classroomContextDefaultValue: ClassroomContextType = {
  useCases: {
    createClassroom: createClassroomUseCase,
    deleteClassroom: deleteClassroomUseCase,
    getTeacherClassroom: getTeacherClassroomUseCase,
    getTeacherClassrooms: getTeacherClassroomsUseCase,
    approveStudent: approveStudentUseCase,
    rejectStudent: rejectStudentUseCase,
    joinClassroom: joinClassroomUseCase,
    getStudentClassrooms: getStudentClassroomsUseCase,
    getStudentClassroom: getStudentClassroomUseCase,
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
