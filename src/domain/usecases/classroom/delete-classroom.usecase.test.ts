import DeleteClassroomUseCase from "@/domain/usecases/classroom/delete-classroom.usecase";

import IClassroomRepository from "@/domain/repositories/classroom.repository";

describe("DeleteClassroomUseCase", () => {
  let classroomRepository: IClassroomRepository;
  let deleteClassroomUseCase: DeleteClassroomUseCase;

  beforeAll(() => {
    classroomRepository = {
      delete: jest.fn(),
    } as Partial<IClassroomRepository> as IClassroomRepository;

    deleteClassroomUseCase = new DeleteClassroomUseCase(classroomRepository);
  });

  it("should delete a classroom", async () => {
    const classroomId = "classroomId";

    await deleteClassroomUseCase.execute(classroomId);

    expect(classroomRepository.delete).toHaveBeenCalledWith(classroomId);
  });
});
