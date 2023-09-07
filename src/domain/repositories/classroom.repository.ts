import ApiResponse from "@/core/types/api-response.type";
import Classroom from "@/domain/entities/classroom.entity";

export default interface IClassroomRepository {
  create(name: string): Promise<Classroom>;
  delete(id: string): Promise<void>;
  getClassroom(id: string): Promise<Classroom>;
  getClassrooms(): Promise<Classroom[]>;
  approveStudent(requestId: string): Promise<ApiResponse>;
  rejectStudent(requestId: string): Promise<ApiResponse>;
  join(code: string): Promise<ApiResponse>;
}
