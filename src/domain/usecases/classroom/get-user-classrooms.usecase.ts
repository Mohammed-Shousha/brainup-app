import User from "@/domain/entities/user.entity";
import IClassroomRepository from "@/domain/repositories/classroom.repository";

export default class GetUserClassroomsUseCase {
  constructor(private classroomRepository: IClassroomRepository) {}

  async execute(user: User) {
    return await this.classroomRepository.getByUser(user);
  }
}
