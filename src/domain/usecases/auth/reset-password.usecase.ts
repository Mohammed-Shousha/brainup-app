import IUserRepository from "@/domain/repositories/user.repository";

export default class ResetPasswordUseCase {
  constructor(private userRepository: IUserRepository) {}

  async send(email: string) {
    return await this.userRepository.sendResetPasswordEmail(email);
  }

  async verifyCode(code: string) {
    return await this.userRepository.verifyResetPasswordCode(code);
  }

  async reset(newPassword: string) {
    return await this.userRepository.resetPassword(newPassword);
  }
}
