import CreateClassroomUseCase from "@/domain/usecases/classroom/create-classroom.usecase";

import Classroom from "@/domain/entities/classroom.entity";
import IClassroomRepository from "@/domain/repositories/classroom.repository";

const createdClassroomMock: Classroom = {
  id: "classroom-id",
  name: "Math",
  code: "123456",
};

describe("CreateClassroomUseCase", () => {
  let createClassroomUseCase: CreateClassroomUseCase;
  let classroomRepository: IClassroomRepository;

  beforeAll(() => {
    classroomRepository = {
      create: jest.fn().mockResolvedValue(createdClassroomMock),
    } as Partial<IClassroomRepository> as IClassroomRepository;

    createClassroomUseCase = new CreateClassroomUseCase(classroomRepository);
  });

  it("should call classroomRepository.create with the provided name", async () => {
    const name = "Math";

    await createClassroomUseCase.execute(name);

    expect(classroomRepository.create).toHaveBeenCalledWith(name);
  });

  it("should return the created classroom", async () => {
    const result = await createClassroomUseCase.execute("Math");

    expect(result).toEqual(createdClassroomMock);
  });
});
