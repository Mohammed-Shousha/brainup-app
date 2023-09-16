import IAiRepository from "@/domain/repositories/ai.repository";

describe("IAiRepository", () => {
  let aiRepository: IAiRepository;

  beforeAll(() => {
    aiRepository = {
      getResponse: jest.fn().mockResolvedValue("Hello, Human"),
    };
  });

  describe("getResponse", () => {
    it("should return a  response", async () => {
      const message = "Hello, AI!";
      const response = await aiRepository.getResponse(message);

      expect(response).toBeDefined();
      expect(typeof response).toBe("string");
      expect(response).toEqual("Hello, Human");
    });
  });
});
