import IClassroomRepository from "@/domain/repositories/classroom.repository";

export default class AddStudentUseCase {
  constructor(private classroomRepository: IClassroomRepository) {}

  async execute(classroomId: string, studentId: string) {
    return await this.classroomRepository.addStudent(classroomId, studentId);
  }
}
