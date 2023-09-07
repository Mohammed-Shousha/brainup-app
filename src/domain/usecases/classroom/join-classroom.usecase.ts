import IClassroomRepository from "@/domain/repositories/classroom.repository";

export default class JoinClassroomUseCase {
  constructor(private classroomRepository: IClassroomRepository) {}

  async execute(code: string) {
    return await this.classroomRepository.join(code);
  }
}
