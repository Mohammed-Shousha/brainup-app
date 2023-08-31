import Classroom from "@/domain/entities/classroom.entity";

export default interface IClassroomRepository {
  create(classroom: Classroom): Promise<Classroom>;
  delete(id: string): Promise<void>;
  getById(id: string): Promise<Classroom>;
  getByUser(userId: string): Promise<Classroom[]>;
  addStudent(classroomId: string, studentId: string): Promise<Classroom>;
  removeStudent(classroomId: string, studentId: string): Promise<Classroom>;
}
