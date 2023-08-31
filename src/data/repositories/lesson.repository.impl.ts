import Lesson from "@/domain/entities/lesson.entity";
import ILessonRepository from "@/domain/repositories/lesson.repository";

export default class LessonRepository implements ILessonRepository {
  constructor() {}

  async create(lesson: Lesson): Promise<Lesson> {
    throw new Error("Method not implemented.");
  }

  async update(lesson: Lesson): Promise<Lesson> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async getById(id: string): Promise<Lesson> {
    throw new Error("Method not implemented.");
  }
}
