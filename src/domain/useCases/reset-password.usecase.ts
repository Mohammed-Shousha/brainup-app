import IUserRepository from "../repositories/user.repository";

export class ResetPasswordUseCase {
  constructor(private userRepository: IUserRepository) {}

  async send(email: string): Promise<void> {
    return await this.userRepository.sendResetPasswordEmail(email);
  }

  async verifyCode(token: string): Promise<string> {
    return await this.userRepository.verifyResetPasswordCode(token);
  }

  async reset(token: string, password: string): Promise<void> {
    return await this.userRepository.resetPassword(token, password);
  }
}
