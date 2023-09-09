import GetTeacherClassroomUseCase from "@/domain/usecases/classroom/get-teacher-classroom.usecase";

import Classroom from "@/domain/entities/classroom.entity";
import IClassroomRepository from "@/domain/repositories/classroom.repository";

const classroomMock: Classroom = {
  id: "classroom-id",
  name: "Math",
  code: "123456",
};

describe("GetTeacherClassroomUseCase", () => {
  let getTeacherClassroomUseCase: GetTeacherClassroomUseCase;
  let classroomRepository: IClassroomRepository;

  beforeAll(() => {
    classroomRepository = {
      getTeacherClassroom: jest.fn().mockResolvedValue(classroomMock),
    } as Partial<IClassroomRepository> as IClassroomRepository;

    getTeacherClassroomUseCase = new GetTeacherClassroomUseCase(
      classroomRepository
    );
  });

  describe("execute", () => {
    it("should call classroomRepository.getTeacherClassroom with the given id", async () => {
      await getTeacherClassroomUseCase.execute(classroomMock.id);

      expect(classroomRepository.getTeacherClassroom).toHaveBeenCalledWith(
        classroomMock.id
      );
    });

    it("should return the result of classroomRepository.getTeacherClassroom", async () => {
      const result = await getTeacherClassroomUseCase.execute(classroomMock.id);

      expect(result).toEqual(classroomMock);
    });
  });
});
