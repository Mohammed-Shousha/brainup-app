import IClassroomRepository from "@/domain/repositories/classroom.repository";

export default class GetClassroomsUseCase {
  constructor(private classroomRepository: IClassroomRepository) {}

  async execute() {
    return await this.classroomRepository.getClassrooms();
  }
}
