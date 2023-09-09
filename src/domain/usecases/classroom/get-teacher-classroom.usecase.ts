import IClassroomRepository from "@/domain/repositories/classroom.repository";

export default class GetTeacherClassroomUseCase {
  constructor(private classroomRepository: IClassroomRepository) {}

  async execute(id: string) {
    return await this.classroomRepository.getTeacherClassroom(id);
  }
}
