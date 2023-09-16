import GetStudentClassroomUseCase from "@/domain/usecases/classroom/get-student-classsroom.usecase";

import Classroom from "@/domain/entities/classroom.entity";
import IClassroomRepository from "@/domain/repositories/classroom.repository";

const classroomMock: Classroom = {
  id: "classroom-id",
  name: "Math",
};

describe("GetStudentClassroomUseCase", () => {
  let getStudentClassroomUseCase: GetStudentClassroomUseCase;
  let classroomRepository: IClassroomRepository;

  beforeAll(() => {
    classroomRepository = {
      getStudentClassroom: jest.fn().mockResolvedValue(classroomMock),
    } as Partial<IClassroomRepository> as IClassroomRepository;

    getStudentClassroomUseCase = new GetStudentClassroomUseCase(
      classroomRepository
    );
  });

  describe("execute", () => {
    it("should call classroomRepository.getStudentClassroom with the given id", async () => {
      await getStudentClassroomUseCase.execute(classroomMock.id);

      expect(classroomRepository.getStudentClassroom).toHaveBeenCalledWith(
        classroomMock.id
      );
    });

    it("should return the result of classroomRepository.getStudentClassroom", async () => {
      const result = await getStudentClassroomUseCase.execute(classroomMock.id);

      expect(result).toEqual(classroomMock);
    });
  });
});
