import RejectStudentUseCase from "@/domain/usecases/classroom/reject-student.usecase";

import IClassroomRepository from "@/domain/repositories/classroom.repository";

describe("RejectStudentUseCase", () => {
  let classroomRepository: IClassroomRepository;
  let rejectStudentUseCase: RejectStudentUseCase;

  beforeAll(() => {
    classroomRepository = {
      rejectStudent: jest.fn(),
    } as Partial<IClassroomRepository> as IClassroomRepository;

    rejectStudentUseCase = new RejectStudentUseCase(classroomRepository);
  });

  it("should call classroomRepository.rejectStudent with the given requestId", async () => {
    const requestId = "123";

    await rejectStudentUseCase.execute(requestId);

    expect(classroomRepository.rejectStudent).toHaveBeenCalledWith(requestId);
  });
});
