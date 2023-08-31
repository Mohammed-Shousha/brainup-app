import IQuestionRepository from "@/domain/repositories/question.repository";

export default class DeleteQuestionUseCase {
  constructor(private readonly questionRepository: IQuestionRepository) {}

  async execute(id: string) {
    return await this.questionRepository.delete(id);
  }
}
