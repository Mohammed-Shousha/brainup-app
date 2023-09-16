import GetAiResponseUseCase from "@/domain/usecases/ai/get-ai-response.usecase";

import IAiRepository from "@/domain/repositories/ai.repository";

describe("GetAiResponseUseCase", () => {
  let aiRepository: IAiRepository;
  let getAiResponseUseCase: GetAiResponseUseCase;

  beforeAll(() => {
    aiRepository = {
      getResponse: jest.fn().mockResolvedValue("Hello, Human"),
    } as Partial<IAiRepository> as IAiRepository;

    getAiResponseUseCase = new GetAiResponseUseCase(aiRepository);
  });

  describe("execute", () => {
    it("should call aiRepository.getResponse with the given message", async () => {
      const message = "Hello, AI!";

      await getAiResponseUseCase.execute(message);

      expect(aiRepository.getResponse).toHaveBeenCalledWith(message);
    });

    it("should return the result of aiRepository.getResponse", async () => {
      const result = await getAiResponseUseCase.execute("Hello, AI!");

      expect(result).toEqual("Hello, Human");
    });
  });
});
