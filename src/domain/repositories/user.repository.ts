import User from "../entities/user.entity";

export default interface IUserRepository {
  register(user: User): Promise<User>;
  login(username: string, password: string): Promise<void>;
}
