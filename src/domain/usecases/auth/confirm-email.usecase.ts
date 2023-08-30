import IUserRepository from "@/domain/repositories/user.repository";

export default class ConfirmEmailUseCase {
  constructor(private userRepository: IUserRepository) {}

  async send(email: string) {
    return await this.userRepository.sendConfirmEmail(email);
  }

  async verifyCode(token: string) {
    return await this.userRepository.verifyConfirmCode(token);
  }
}
