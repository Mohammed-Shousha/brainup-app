import ApproveStudentUseCase from "@/domain/usecases/classroom/approve-student.usecase";

import IClassroomRepository from "@/domain/repositories/classroom.repository";

describe("ApproveStudentUseCase", () => {
  let classroomRepository: IClassroomRepository;
  let approveStudentUseCase: ApproveStudentUseCase;

  beforeAll(() => {
    classroomRepository = {
      approveStudent: jest.fn(),
    } as Partial<IClassroomRepository> as IClassroomRepository;

    approveStudentUseCase = new ApproveStudentUseCase(classroomRepository);
  });

  it("should call classroomRepository.approveStudent with the correct requestId", async () => {
    const requestId = "123";

    await approveStudentUseCase.execute(requestId);

    expect(classroomRepository.approveStudent).toHaveBeenCalledWith(requestId);
  });
});
