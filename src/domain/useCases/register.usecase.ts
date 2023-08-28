import User from "@/domain/entities/user.entity";
import IUserRepository from "@/domain/repositories/user.repository";

export class RegisterUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(user: User) {
    return await this.userRepository.register(user);
  }
}
