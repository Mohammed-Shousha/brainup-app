import IClassroomRepository from "@/domain/repositories/classroom.repository";

export default class GetStudentClassroomUseCase {
  constructor(private classroomRepository: IClassroomRepository) {}

  async execute(id: string) {
    return await this.classroomRepository.getStudentClassroom(id);
  }
}
