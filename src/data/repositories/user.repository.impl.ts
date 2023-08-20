import User from "../../domain/entities/user.entity";
import IUserRepository from "../../domain/repositories/user.repository";

import { LOGIN_URL, REGISTER_URL } from "../../core/utils/constants";

export class UserRepository implements IUserRepository {
  constructor() {}

  async register(user: User): Promise<User> {
    const { username, name, email, password, phone } = user;
    const result = await fetch(REGISTER_URL, {
      method: "POST",
      body: JSON.stringify({
        username,
        name,
        email,
        password,
        user_type: "student",
        phone_number: phone,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await result.json();

    console.log(data);

    return user;
  }

  async login(username: string, password: string): Promise<void> {
    const result = await fetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify({
        user: username,
        password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await result.json();

    console.log(data);
  }
}
