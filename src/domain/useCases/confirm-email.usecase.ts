import IUserRepository from "../repositories/user.repository";

export class ConfirmEmailUseCase {
  constructor(private userRepository: IUserRepository) {}

  async send(email: string): Promise<void> {
    return await this.userRepository.sendConfirmEmail(email);
  }

  async verifyCode(token: string): Promise<void> {
    return await this.userRepository.verifyConfirmCode(token);
  }
}
