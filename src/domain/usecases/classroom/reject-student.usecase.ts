import IClassroomRepository from "@/domain/repositories/classroom.repository";

export default class RejectStudentUseCase {
  constructor(private classroomRepository: IClassroomRepository) {}

  async execute(requestId: string) {
    return await this.classroomRepository.rejectStudent(requestId);
  }
}
