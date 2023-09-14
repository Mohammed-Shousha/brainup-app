import LoginUserUseCase from "@/domain/usecases/auth/login.usecase";

import IUserRepository from "@/domain/repositories/user.repository";

describe("LoginUserUseCase", () => {
  let userRepository: IUserRepository;
  let loginUserUseCase: LoginUserUseCase;

  beforeAll(() => {
    userRepository = {
      login: jest.fn(),
    } as Partial<IUserRepository> as IUserRepository;

    loginUserUseCase = new LoginUserUseCase(userRepository);
  });

  it("should call userRepository.login with the correct parameters", async () => {
    const username = "testuser";
    const password = "testpassword";

    await loginUserUseCase.execute(username, password);

    expect(userRepository.login).toHaveBeenCalledWith(username, password);
  });
});
