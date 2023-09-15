import IAiRepository from "@/domain/repositories/ai.repository";

export default class GetAiResponseUseCase {
  constructor(private readonly aiRepository: IAiRepository) {}

  async execute(message: string) {
    return await this.aiRepository.getResponse(message);
  }
}
