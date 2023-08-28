import IUserRepository from "@/domain/repositories/user.repository";

export class ResetPasswordUseCase {
  constructor(private userRepository: IUserRepository) {}

  async send(email: string) {
    return await this.userRepository.sendResetPasswordEmail(email);
  }

  async verifyCode(token: string) {
    return await this.userRepository.verifyResetPasswordCode(token);
  }

  async reset(token: string, password: string) {
    return await this.userRepository.resetPassword(token, password);
  }
}
