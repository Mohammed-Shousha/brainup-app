import Classroom from "@/domain/entities/classroom.entity";
import IClassroomRepository from "@/domain/repositories/classroom.repository";

export default class ClassroomRepository implements IClassroomRepository {
  constructor() {}

  async create(classroom: Classroom): Promise<Classroom> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async getById(id: string): Promise<Classroom> {
    throw new Error("Method not implemented.");
  }

  async getByUser(): Promise<Classroom[]> {
    throw new Error("Method not implemented.");
  }

  async addStudent(classroomId: string, studentId: string): Promise<Classroom> {
    throw new Error("Method not implemented.");
  }

  async removeStudent(
    classroomId: string,
    studentId: string
  ): Promise<Classroom> {
    throw new Error("Method not implemented.");
  }
}
