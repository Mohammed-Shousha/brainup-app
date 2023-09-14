import IQuizRepository from "@/domain/repositories/quiz.repository";

export default class GetTeacherQuizzesUseCase {
  constructor(private readonly quizRepository: IQuizRepository) {}

  async execute() {
    return await this.quizRepository.getTeacherQuizzes();
  }
}
