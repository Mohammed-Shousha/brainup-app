import JoinClassroomUseCase from "@/domain/usecases/classroom/join-classroom.usecase";

import IClassroomRepository from "@/domain/repositories/classroom.repository";

describe("JoinClassroomUseCase", () => {
  let joinClassroomUseCase: JoinClassroomUseCase;
  let classroomRepository: IClassroomRepository;

  beforeAll(() => {
    classroomRepository = {
      join: jest.fn(),
    } as Partial<IClassroomRepository> as IClassroomRepository;

    joinClassroomUseCase = new JoinClassroomUseCase(classroomRepository);
  });

  it("should call classroomRepository.join with the provided code", async () => {
    const code = "123456";

    await joinClassroomUseCase.execute(code);

    expect(classroomRepository.join).toHaveBeenCalledWith(code);
  });
});
