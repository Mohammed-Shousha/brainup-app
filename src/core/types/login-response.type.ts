import ApiResponse from "@/core/types/api-response.type";
import UserType from "@/core/enums/user-type.enum";

export default interface LoginResponse extends ApiResponse {
  userType: UserType;
}
