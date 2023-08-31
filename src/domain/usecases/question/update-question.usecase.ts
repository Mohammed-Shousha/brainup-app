import Question from "@/domain/entities/question.entity";
import IQuestionRepository from "@/domain/repositories/question.repository";

export default class UpdateQuestionUseCase {
  constructor(private readonly questionRepository: IQuestionRepository) {}

  async execute(question: Question) {
    return await this.questionRepository.update(question);
  }
}
