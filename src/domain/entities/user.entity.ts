import { UserType } from "@/core/enums/user-type.enum";

export default interface User {
  name: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  type: UserType;
}
