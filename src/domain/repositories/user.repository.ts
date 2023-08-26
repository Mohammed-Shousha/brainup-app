import User from "@/domain/entities/user.entity";

export default interface IUserRepository {
  register(user: User): Promise<User>;
  login(username: string, password: string): Promise<void>;
  sendConfirmEmail(email: string): Promise<void>;
  verifyConfirmCode(code: string): Promise<void>;
  sendResetPasswordEmail(email: string): Promise<void>;
  verifyResetPasswordCode(code: string): Promise<string>; // token
  resetPassword(token: string, password: string): Promise<void>;
}
