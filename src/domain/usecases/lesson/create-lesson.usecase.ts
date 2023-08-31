import Lesson from "@/domain/entities/lesson.entity";
import ILessonRepository from "@/domain/repositories/lesson.repository";

export default class CreateLessonUseCase {
  constructor(private lessonRepository: ILessonRepository) {}

  async execute(lesson: Lesson) {
    return await this.lessonRepository.create(lesson);
  }
}
