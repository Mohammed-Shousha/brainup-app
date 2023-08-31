import IQuizRepository from "@/domain/repositories/quiz.repository";

export default class GetQuizUseCase {
  constructor(private readonly quizRepository: IQuizRepository) {}

  async execute(quizId: string) {
    return await this.quizRepository.getById(quizId);
  }
}
