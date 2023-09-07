import IClassroomRepository from "@/domain/repositories/classroom.repository";

export default class GetClassroomUseCase {
  constructor(private classroomRepository: IClassroomRepository) {}

  async execute(id: string) {
    return await this.classroomRepository.getClassroom(id);
  }
}
