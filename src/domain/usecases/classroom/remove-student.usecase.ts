import IClassroomRepository from "@/domain/repositories/classroom.repository";

export default class RemoveStudentUseCase {
  constructor(private classroomRepository: IClassroomRepository) {}

  async execute(classroomId: string, studentId: string) {
    return await this.classroomRepository.removeStudent(classroomId, studentId);
  }
}
