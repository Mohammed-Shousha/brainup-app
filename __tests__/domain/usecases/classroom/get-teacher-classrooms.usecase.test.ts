import GetTeacherClassroomsUseCase from "@/domain/usecases/classroom/get-teacher-classrooms.usecase";

import Classroom from "@/domain/entities/classroom.entity";
import IClassroomRepository from "@/domain/repositories/classroom.repository";

const classroomsMock: Classroom[] = [
  { id: "1", name: "Classroom 1", code: "123456" },
  { id: "2", name: "Classroom 2", code: "123456" },
];

describe("GetTeacherClassroomsUseCase", () => {
  let classroomRepository: IClassroomRepository;
  let getTeacherClassroomsUseCase: GetTeacherClassroomsUseCase;

  beforeAll(() => {
    classroomRepository = {
      getTeacherClassrooms: jest.fn().mockResolvedValue(classroomsMock),
    } as Partial<IClassroomRepository> as IClassroomRepository;

    getTeacherClassroomsUseCase = new GetTeacherClassroomsUseCase(
      classroomRepository
    );
  });

  it("should return classrooms from repository", async () => {
    const result = await getTeacherClassroomsUseCase.execute();

    expect(classroomRepository.getTeacherClassrooms).toHaveBeenCalledTimes(1);
    expect(result).toEqual(classroomsMock);
  });
});
