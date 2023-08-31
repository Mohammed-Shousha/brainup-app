import Quiz from "@/domain/entities/quiz.entity";
import IQuizRepository from "@/domain/repositories/quiz.repository";

export default class CreateQuizUseCase {
  constructor(private readonly quizRepository: IQuizRepository) {}

  async execute(quiz: Quiz) {
    return await this.quizRepository.create(quiz);
  }
}
