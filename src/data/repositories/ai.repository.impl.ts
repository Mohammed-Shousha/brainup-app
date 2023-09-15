import IAiRepository from "@/domain/repositories/ai.repository";

export default class AiRepository implements IAiRepository {
  constructor() {}

  async getResponse(message: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
}
