import IQuizRepository from "@/domain/repositories/quiz.repository";

export default class DeleteQuizUseCase {
  constructor(private readonly quizRepository: IQuizRepository) {}

  async execute(quizId: string) {
    return await this.quizRepository.delete(quizId);
  }
}
