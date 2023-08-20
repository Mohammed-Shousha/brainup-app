import User from "../entities/user.entity";
import IUserRepository from "../repositories/user.repository";

export class RegisterUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(user: User): Promise<User | null> {
    return await this.userRepository.register(user);
  }
}
