import ConfirmEmailUseCase from "@/domain/usecases/auth/confirm-email.usecase";

import IUserRepository from "@/domain/repositories/user.repository";

describe("ConfirmEmailUseCase", () => {
  let userRepository: IUserRepository;
  let confirmEmailUseCase: ConfirmEmailUseCase;

  beforeAll(() => {
    userRepository = {
      sendConfirmEmail: jest.fn(),
      verifyConfirmCode: jest.fn(),
    } as Partial<IUserRepository> as IUserRepository;

    confirmEmailUseCase = new ConfirmEmailUseCase(userRepository);
  });

  describe("send", () => {
    it("should call userRepository.sendConfirmEmail with the provided email", async () => {
      const email = "test@example.com";

      await confirmEmailUseCase.send(email);

      expect(userRepository.sendConfirmEmail).toHaveBeenCalledWith(email);
    });
  });

  describe("verifyCode", () => {
    it("should call userRepository.verifyConfirmCode with the provided token", async () => {
      const token = "test-token";

      await confirmEmailUseCase.verifyCode(token);

      expect(userRepository.verifyConfirmCode).toHaveBeenCalledWith(token);
    });
  });
});
