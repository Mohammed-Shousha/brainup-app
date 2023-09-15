import IQuizRepository from "@/domain/repositories/quiz.repository";

export default class GetStudentQuizUseCase {
  constructor(private readonly quizRepository: IQuizRepository) {}

  async execute(id: string) {
    return await this.quizRepository.getStudentQuiz(id);
  }
}
