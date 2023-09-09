import GetClassroomUseCase from "@/domain/usecases/classroom/get-classroom.usecase";

import Classroom from "@/domain/entities/classroom.entity";
import IClassroomRepository from "@/domain/repositories/classroom.repository";

const classroomMock: Classroom = {
  id: "classroom-id",
  name: "Math",
  code: "123456",
};

describe("GetClassroomUseCase", () => {
  let getClassroomUseCase: GetClassroomUseCase;
  let classroomRepository: IClassroomRepository;

  beforeAll(() => {
    classroomRepository = {
      getClassroom: jest.fn().mockResolvedValue(classroomMock),
    } as Partial<IClassroomRepository> as IClassroomRepository;

    getClassroomUseCase = new GetClassroomUseCase(classroomRepository);
  });

  describe("execute", () => {
    it("should call classroomRepository.getClassroom with the given id", async () => {
      await getClassroomUseCase.execute(classroomMock.id);

      expect(classroomRepository.getClassroom).toHaveBeenCalledWith(
        classroomMock.id
      );
    });

    it("should return the result of classroomRepository.getClassroom", async () => {
      const result = await getClassroomUseCase.execute(classroomMock.id);

      expect(result).toEqual(classroomMock);
    });
  });
});
