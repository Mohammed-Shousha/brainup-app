import IClassroomRepository from "@/domain/repositories/classroom.repository";

export default class GetStudentClassroomsUseCase {
  constructor(private classroomRepository: IClassroomRepository) {}

  async execute() {
    return await this.classroomRepository.getStudentClassrooms();
  }
}
