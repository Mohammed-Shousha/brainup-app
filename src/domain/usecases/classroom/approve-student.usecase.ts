import IClassroomRepository from "@/domain/repositories/classroom.repository";

export default class ApproveStudentUseCase {
  constructor(private classroomRepository: IClassroomRepository) {}

  async execute(requestId: string) {
    return await this.classroomRepository.approveStudent(requestId);
  }
}
