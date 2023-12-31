import IClassroomRepository from "@/domain/repositories/classroom.repository";

export default class CreateClassroomUseCase {
  constructor(private classroomRepository: IClassroomRepository) {}

  async execute(name: string) {
    return await this.classroomRepository.create(name);
  }
}
