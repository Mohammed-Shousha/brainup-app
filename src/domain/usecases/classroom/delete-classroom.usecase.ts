import IClassroomRepository from "@/domain/repositories/classroom.repository";

export default class DeleteClassroomUseCase {
  constructor(private classroomRepository: IClassroomRepository) {}

  async execute(id: string) {
    return await this.classroomRepository.delete(id);
  }
}
