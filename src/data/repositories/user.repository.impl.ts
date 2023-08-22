import User from "../../domain/entities/user.entity";
import IUserRepository from "../../domain/repositories/user.repository";

import { sendRequest } from "../../core/utils/helpers";

import {
  SEND_CONFIRM_EMAIL_URL,
  SEND_RESET_PASSWORD_URL,
  LOGIN_URL,
  REGISTER_URL,
  VERIFY_CONFIRM_EMAIL_URL,
  VERIFY_RESET_PASSWORD_URL,
  RESET_PASSWORD_URL,
} from "../../core/utils/constants";

export class UserRepository implements IUserRepository {
  constructor() {}

  async register(user: User): Promise<User> {
    const { username, name, email, password, phone } = user;

    const data = await sendRequest(REGISTER_URL, "POST", {
      username,
      name,
      email,
      password,
      user_type: "student",
      phone_number: phone,
    });

    console.log(data);

    return user;
  }

  async login(username: string, password: string): Promise<void> {
    const data = await sendRequest(LOGIN_URL, "POST", {
      user: username,
      password,
    });

    console.log(data);
  }

  async sendConfirmEmail(email: string): Promise<void> {
    const data = await sendRequest(SEND_CONFIRM_EMAIL_URL, "POST", {
      email,
    });

    console.log(data);
  }

  async verifyConfirmCode(code: string): Promise<void> {
    const data = await sendRequest(VERIFY_CONFIRM_EMAIL_URL, "POST", {
      code,
    });

    console.log(data);
  }

  async sendResetPasswordEmail(email: string): Promise<void> {
    const data = await sendRequest(SEND_RESET_PASSWORD_URL, "POST", {
      email,
    });

    console.log(data);
  }

  async verifyResetPasswordCode(code: string): Promise<string> {
    const data = await sendRequest(VERIFY_RESET_PASSWORD_URL, "POST", {
      code,
    });

    console.log(data);

    return data.token;
  }

  async resetPassword(token: string, password: string): Promise<void> {
    const data = await sendRequest(RESET_PASSWORD_URL, "POST", {
      token,
      password,
    });

    console.log(data);
  }
}
