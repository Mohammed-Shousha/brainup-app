import IClassroomRepository from "@/domain/repositories/classroom.repository";

export default class GetTeacherClassroomsUseCase {
  constructor(private classroomRepository: IClassroomRepository) {}

  async execute() {
    return await this.classroomRepository.getTeacherClassrooms();
  }
}
