import GetClassroomsUseCase from "@/domain/usecases/classroom/get-classrooms.usecase";

import Classroom from "@/domain/entities/classroom.entity";
import IClassroomRepository from "@/domain/repositories/classroom.repository";

const classroomsMock: Classroom[] = [
  { id: "1", name: "Classroom 1", code: "123456" },
  { id: "2", name: "Classroom 2", code: "123456" },
];

describe("GetClassroomsUseCase", () => {
  let classroomRepository: IClassroomRepository;
  let getClassroomsUseCase: GetClassroomsUseCase;

  beforeAll(() => {
    classroomRepository = {
      getClassrooms: jest.fn().mockResolvedValue(classroomsMock),
    } as Partial<IClassroomRepository> as IClassroomRepository;

    getClassroomsUseCase = new GetClassroomsUseCase(classroomRepository);
  });

  it("should return classrooms from repository", async () => {
    const result = await getClassroomsUseCase.execute();

    expect(classroomRepository.getClassrooms).toHaveBeenCalledTimes(1);
    expect(result).toEqual(classroomsMock);
  });
});
