import ILessonRepository from "@/domain/repositories/lesson.repository";

export default class DeleteLessonUseCase {
  constructor(private lessonRepository: ILessonRepository) {}

  async execute(lessonId: string) {
    return await this.lessonRepository.delete(lessonId);
  }
}
