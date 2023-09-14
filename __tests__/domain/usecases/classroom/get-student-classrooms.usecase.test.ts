import GetStudentClassroomsUseCase from "@/domain/usecases/classroom/get-student-classrooms.usecase";

import Classroom from "@/domain/entities/classroom.entity";
import IClassroomRepository from "@/domain/repositories/classroom.repository";

const classroomsMock: Classroom[] = [
  { id: "1", name: "Classroom 1", teacher: "teacher" },
  { id: "2", name: "Classroom 2", teacher: "123456" },
];

describe("GetStudentClassroomsUseCase", () => {
  let classroomRepository: IClassroomRepository;
  let getStudentClassroomsUseCase: GetStudentClassroomsUseCase;

  beforeAll(() => {
    classroomRepository = {
      getStudentClassrooms: jest.fn().mockResolvedValue(classroomsMock),
    } as Partial<IClassroomRepository> as IClassroomRepository;

    getStudentClassroomsUseCase = new GetStudentClassroomsUseCase(
      classroomRepository
    );
  });

  it("should return classrooms from repository", async () => {
    const result = await getStudentClassroomsUseCase.execute();

    expect(classroomRepository.getStudentClassrooms).toHaveBeenCalledTimes(1);
    expect(result).toEqual(classroomsMock);
  });
});
