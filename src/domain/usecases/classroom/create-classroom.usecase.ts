import IClassroomRepository from "@/domain/repositories/classroom.repository";
import Classroom from "@/domain/entities/classroom.entity";

export default class CreateClassroomUseCase {
  constructor(private classroomRepository: IClassroomRepository) {}

  async execute(classroom: Classroom) {
    return await this.classroomRepository.create(classroom);
  }
}
