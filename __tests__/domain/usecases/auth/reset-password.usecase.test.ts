import ResetPasswordUseCase from "@/domain/usecases/auth/reset-password.usecase";

import IUserRepository from "@/domain/repositories/user.repository";

describe("ResetPasswordUseCase", () => {
  let userRepository: IUserRepository;
  let resetPasswordUseCase: ResetPasswordUseCase;

  beforeAll(() => {
    userRepository = {
      verifyResetPasswordCode: jest.fn(),
      resetPassword: jest.fn(),
      sendResetPasswordEmail: jest.fn(),
    } as Partial<IUserRepository> as IUserRepository;

    resetPasswordUseCase = new ResetPasswordUseCase(userRepository);
  });

  describe("verifyCode", () => {
    it("should call userRepository.verifyResetPasswordCode with the provided code", async () => {
      const code = "123456";

      await resetPasswordUseCase.verifyCode(code);

      expect(userRepository.verifyResetPasswordCode).toHaveBeenCalledWith(code);
    });
  });

  describe("reset", () => {
    it("should call userRepository.resetPassword with the provided new password", async () => {
      const newPassword = "newPassword123";

      await resetPasswordUseCase.reset(newPassword);

      expect(userRepository.resetPassword).toHaveBeenCalledWith(newPassword);
    });
  });

  describe("send", () => {
    it("should call userRepository.sendResetPasswordEmail with the provided email", async () => {
      const email = "test@example.com";

      await resetPasswordUseCase.send(email);

      expect(userRepository.sendResetPasswordEmail).toHaveBeenCalledWith(email);
    });
  });
});
