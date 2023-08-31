import Lesson from "@/domain/entities/lesson.entity";

export default interface ILessonRepository {
  create(lesson: Lesson): Promise<Lesson>;
  update(lesson: Lesson): Promise<Lesson>;
  delete(id: string): Promise<void>;
  getById(id: string): Promise<Lesson>;
}
