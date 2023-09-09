import RegisterUserUseCase from "@/domain/usecases/auth/register.usecase";

import User from "@/domain/entities/user.entity";
import IUserRepository from "@/domain/repositories/user.repository";

describe("RegisterUserUseCase", () => {
  let userRepository: IUserRepository;
  let registerUserUseCase: RegisterUserUseCase;

  beforeAll(() => {
    userRepository = {
      register: jest.fn(),
    } as Partial<IUserRepository> as IUserRepository;

    registerUserUseCase = new RegisterUserUseCase(userRepository);
  });

  describe("execute", () => {
    it("should call userRepository.register with the provided user", async () => {
      const mockUser: User = {
        name: "student",
        username: "student",
        email: "student@test.com",
        password: "password",
        phone: "01234567890",
        type: "student",
      };

      await registerUserUseCase.execute(mockUser);

      expect(userRepository.register).toHaveBeenCalledWith(mockUser);
    });
  });
});
