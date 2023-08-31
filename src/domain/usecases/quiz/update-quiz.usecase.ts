import Quiz from "@/domain/entities/quiz.entity";
import IQuizRepository from "@/domain/repositories/quiz.repository";

export default class UpdateQuizUseCase {
  constructor(private readonly quizRepository: IQuizRepository) {}

  async execute(quiz: Quiz) {
    return await this.quizRepository.update(quiz);
  }
}
