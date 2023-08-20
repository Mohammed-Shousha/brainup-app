import IUserRepository from "../repositories/user.repository";

export class LoginUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(username: string, password: string): Promise<void> {
    return await this.userRepository.login(username, password);
  }
}
