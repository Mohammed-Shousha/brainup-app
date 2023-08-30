import User from "@/domain/entities/user.entity";
import IUserRepository from "@/domain/repositories/user.repository";

import ApiResponse from "@/core/types/api-response.type";

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

export class UserRepository implements IUserRepository {
  constructor() {}

  async register(user: User): Promise<ApiResponse> {
    const { username, name, email, password, phone, type } = user;

    const registerResponse = await sendRequest(REGISTER_URL, "POST", {
      username,
      name,
      email,
      password,
      user_type: type,
      phone_number: phone,
    });

    console.log({ registerResponse });

    return {
      status: registerResponse.status,
      message: registerResponse.message,
      token: registerResponse.token,
    };
  }

  async login(username: string, password: string): Promise<ApiResponse> {
    const loginResponse = await sendRequest(LOGIN_URL, "POST", {
      user: username,
      password,
    });

    console.log({ loginResponse });

    return {
      status: loginResponse.status,
      message: loginResponse.message,
      token: loginResponse.token,
    };
  }

  async sendConfirmEmail(email: string): Promise<ApiResponse> {
    const sendConfirmEmailResponse = await sendRequest(
      SEND_CONFIRM_EMAIL_URL,
      "POST",
      {
        email,
      }
    );

    console.log({ sendConfirmEmailResponse });

    return {
      status: sendConfirmEmailResponse.status,
      message: sendConfirmEmailResponse.message,
    };
  }

  async verifyConfirmCode(code: string): Promise<ApiResponse> {
    const verifyConfirmCodeResponse = await sendRequest(
      VERIFY_CONFIRM_EMAIL_URL,
      "POST",
      {
        code,
      }
    );

    console.log({ verifyConfirmCodeResponse });

    return {
      status: verifyConfirmCodeResponse.status,
      message: verifyConfirmCodeResponse.message,
    };
  }

  async sendResetPasswordEmail(email: string): Promise<ApiResponse> {
    const sendResetPasswordEmailResponse = await sendRequest(
      SEND_RESET_PASSWORD_URL,
      "POST",
      {
        email,
      }
    );

    console.log({ sendResetPasswordEmailResponse });

    return {
      status: sendResetPasswordEmailResponse.status,
      message: sendResetPasswordEmailResponse.message,
    };
  }

  async verifyResetPasswordCode(code: string): Promise<ApiResponse> {
    const verifyResetPasswordCodeResponse = await sendRequest(
      VERIFY_RESET_PASSWORD_URL,
      "POST",
      {
        code,
      }
    );

    console.log({ verifyResetPasswordCodeResponse });

    return {
      status: verifyResetPasswordCodeResponse.status,
      message: verifyResetPasswordCodeResponse.message,
      token: verifyResetPasswordCodeResponse.token,
    };
  }

  async resetPassword(token: string, password: string): Promise<ApiResponse> {
    const resetPasswordResponse = await sendRequest(
      RESET_PASSWORD_URL,
      "POST",
      {
        token,
        password,
      }
    );

    console.log({ resetPasswordResponse });

    return {
      status: resetPasswordResponse.status,
      message: resetPasswordResponse.message,
    };
  }
}
