import IUserRepository from "@/domain/repositories/user.repository";

import User from "@/domain/entities/user.entity";

import ApiResponse from "@/core/types/api-response.type";
import LoginResponse from "@/core/types/login-response.type";

const apiResponseMock: ApiResponse = {
  status: "success",
  message: "Request successful",
};

const loginResponseMock: LoginResponse = {
  status: "success",
  userType: "teacher",
};

const userMock: User = {
  username: "testuser",
  name: "Test User",
  email: "email@test.com",
  password: "password",
  phone: "01234567890",
  type: "student",
};

describe("IUserRepository", () => {
  let userRepository: IUserRepository;

  beforeAll(() => {
    userRepository = {
      register: jest.fn().mockResolvedValue(apiResponseMock),
      login: jest.fn().mockResolvedValue(loginResponseMock),
      sendConfirmEmail: jest.fn().mockResolvedValue(apiResponseMock),
      verifyConfirmCode: jest.fn().mockResolvedValue(apiResponseMock),
      sendResetPasswordEmail: jest.fn().mockResolvedValue(apiResponseMock),
      verifyResetPasswordCode: jest.fn().mockResolvedValue(apiResponseMock),
      resetPassword: jest.fn().mockResolvedValue(apiResponseMock),
    };
  });

  describe("register", () => {
    it("should register a new user", async () => {
      const response = await userRepository.register(userMock);

      expect(response.status).toBe("success");
    });
  });

  describe("login", () => {
    it("should log in a user with valid credentials", async () => {
      const response = await userRepository.login(
        userMock.username,
        userMock.password
      );

      expect(response.status).toBe("success");
    });
  });

  describe("sendConfirmEmail", () => {
    it("should send a confirmation email to the user", async () => {
      const response = await userRepository.sendConfirmEmail(userMock.email);

      expect(response.status).toBe("success");
    });
  });

  describe("verifyConfirmCode", () => {
    it("should verify a confirmation code", async () => {
      const code = "123456";

      const response = await userRepository.verifyConfirmCode(code);

      expect(response.status).toBe("success");
    });
  });

  describe("sendResetPasswordEmail", () => {
    it("should send a reset password email to the user", async () => {
      const response = await userRepository.sendResetPasswordEmail(
        userMock.email
      );

      expect(response.status).toBe("success");
    });
  });

  describe("verifyResetPasswordCode", () => {
    it("should verify a reset password code", async () => {
      const code = "123456";

      const response = await userRepository.verifyResetPasswordCode(code);

      expect(response.status).toBe("success");
    });
  });

  describe("resetPassword", () => {
    it("should reset the user's password", async () => {
      const newPassword = "newpassword";

      const response = await userRepository.resetPassword(newPassword);

      expect(response.status).toBe("success");
    });
  });
});
