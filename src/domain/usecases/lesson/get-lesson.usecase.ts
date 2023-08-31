import ILessonRepository from "@/domain/repositories/lesson.repository";

export default class GetLessonUseCase {
  constructor(private lessonRepository: ILessonRepository) {}

  async execute(lessonId: string) {
    return await this.lessonRepository.getById(lessonId);
  }
}
