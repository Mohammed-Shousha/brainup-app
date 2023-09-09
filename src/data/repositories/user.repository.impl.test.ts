import UserRepository from "@/data/repositories/user.repository.impl";

import User from "@/domain/entities/user.entity";

import ApiResponse from "@/core/types/api-response.type";
import LoginResponse from "@/core/types/login-response.type";

import { sendRequest } from "@/core/utils/helpers";
import {
  SEND_CONFIRM_EMAIL_URL,
  SEND_RESET_PASSWORD_URL,
  LOGIN_URL,
  REGISTER_URL,
  VERIFY_CONFIRM_EMAIL_URL,
  VERIFY_RESET_PASSWORD_URL,
  RESET_PASSWORD_URL,
} from "@/core/utils/constants";

jest.mock("@/core/utils/helpers", () => ({
  sendRequest: jest.fn(),
}));

jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

describe("UserRepository", () => {
  let userRepository: UserRepository;

  beforeAll(() => {
    userRepository = new UserRepository();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("register", () => {
    it("should register a user", async () => {
      const user: User = {
        username: "testuser",
        name: "Test User",
        email: "testuser@example.com",
        password: "password",
        phone: "1234567890",
        type: "student",
      };

      const expectedResponse: ApiResponse = {
        status: "success",
        message: "User registered successfully",
      };

      (sendRequest as jest.Mock).mockResolvedValueOnce(expectedResponse);

      const response = await userRepository.register(user);

      expect(sendRequest).toHaveBeenCalledWith(REGISTER_URL, "POST", {
        username: "testuser",
        name: "Test User",
        email: "testuser@example.com",
        password: "password",
        user_type: "student",
        phone_number: "1234567890",
      });

      expect(response).toEqual(expectedResponse);
    });
  });

  describe("login", () => {
    it("should login a user", async () => {
      const expectedResponse: LoginResponse = {
        status: "success",
        message: "User logged in successfully",
        userType: "student",
      };

      (sendRequest as jest.Mock).mockResolvedValueOnce({
        status: "success",
        message: "User logged in successfully",
        "user-type": "student",
        token: "token",
      });

      const response = await userRepository.login("testuser", "password");

      expect(sendRequest).toHaveBeenCalledWith(LOGIN_URL, "POST", {
        user: "testuser",
        password: "password",
      });

      expect(response).toEqual(expectedResponse);
    });
  });

  describe("sendConfirmEmail", () => {
    it("should send a confirmation email", async () => {
      const expectedResponse: ApiResponse = {
        status: "success",
        message: "Confirmation email sent successfully",
      };

      (sendRequest as jest.Mock).mockResolvedValueOnce(expectedResponse);

      const response = await userRepository.sendConfirmEmail(
        "testuser@example.com"
      );

      expect(sendRequest).toHaveBeenCalledWith(SEND_CONFIRM_EMAIL_URL, "POST", {
        email: "testuser@example.com",
      });

      expect(response).toEqual(expectedResponse);
    });
  });

  describe("verifyConfirmCode", () => {
    it("should verify a confirmation code", async () => {
      const expectedResponse: ApiResponse = {
        status: "success",
        message: "Confirmation code verified successfully",
      };

      (sendRequest as jest.Mock).mockResolvedValueOnce(expectedResponse);

      const response = await userRepository.verifyConfirmCode("123456");

      expect(sendRequest).toHaveBeenCalledWith(
        VERIFY_CONFIRM_EMAIL_URL,
        "POST",
        {
          code: "123456",
        }
      );

      expect(response).toEqual(expectedResponse);
    });
  });

  describe("sendResetPasswordEmail", () => {
    it("should send a reset password email", async () => {
      const expectedResponse: ApiResponse = {
        status: "success",
        message: "Reset password email sent successfully",
      };

      (sendRequest as jest.Mock).mockResolvedValueOnce(expectedResponse);

      const response = await userRepository.sendResetPasswordEmail(
        "testuser@example.com"
      );

      expect(sendRequest).toHaveBeenCalledWith(
        SEND_RESET_PASSWORD_URL,
        "POST",
        {
          email: "testuser@example.com",
        }
      );

      expect(response).toEqual(expectedResponse);
    });
  });

  describe("verifyResetPasswordCode", () => {
    it("should verify a reset password code", async () => {
      const expectedResponse: ApiResponse = {
        status: "success",
        message: "Reset password code verified successfully",
      };

      (sendRequest as jest.Mock).mockResolvedValueOnce(expectedResponse);

      const response = await userRepository.verifyResetPasswordCode("123456");

      expect(sendRequest).toHaveBeenCalledWith(
        VERIFY_RESET_PASSWORD_URL,
        "POST",
        {
          code: "123456",
        }
      );

      expect(response).toEqual(expectedResponse);
    });
  });

  describe("resetPassword", () => {
    it("should reset a password", async () => {
      const expectedResponse: ApiResponse = {
        status: "success",
        message: "Password reset successfully",
      };

      (sendRequest as jest.Mock).mockResolvedValueOnce(expectedResponse);

      const response = await userRepository.resetPassword("password");

      expect(sendRequest).toHaveBeenCalledWith(RESET_PASSWORD_URL, "POST", {
        token: "",
        password: "password",
      });

      expect(response).toEqual(expectedResponse);
    });
  });
});
