import ApiResponse from "@/core/types/api-response.type";
import Classroom from "@/domain/entities/classroom.entity";

export default interface IClassroomRepository {
  create(name: string): Promise<Classroom>;
  delete(id: string): Promise<void>;
  getTeacherClassroom(id: string): Promise<Classroom>;
  getTeacherClassrooms(): Promise<Classroom[]>;
  approveStudent(requestId: string): Promise<ApiResponse>;
  rejectStudent(requestId: string): Promise<ApiResponse>;
  join(code: string): Promise<ApiResponse>;
  getStudentClassrooms(): Promise<Classroom[]>;
}
