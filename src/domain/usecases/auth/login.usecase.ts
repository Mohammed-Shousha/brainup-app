import IUserRepository from "@/domain/repositories/user.repository";

export default class LoginUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(username: string, password: string) {
    return await this.userRepository.login(username, password);
  }
}
