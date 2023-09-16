import { TEACHER_GET_QUIZZES_URL } from "@/core/utils/constants";
import { sendAuthRequest } from "@/core/utils/helpers";
import QuizRepository from "@/data/repositories/quiz.repository.impl";
import Quiz from "@/domain/entities/quiz.entity";

jest.mock("@/core/utils/helpers", () => ({
  sendAuthRequest: jest.fn(),
}));

describe("QuizRepository", () => {
  let quizRepository: QuizRepository;

  beforeAll(() => {
    quizRepository = new QuizRepository();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getTeacherQuizzes", () => {
    it("should return all teacher quizzes", async () => {
      const expectedResponse = {
        status: "success",
        data: [
          {
            id: "1",
            name: "Quiz 1",
          },
        ],
      };

      (sendAuthRequest as jest.Mock).mockResolvedValueOnce(expectedResponse);

      const quizzes: Quiz[] = await quizRepository.getTeacherQuizzes();

      expect(sendAuthRequest).toHaveBeenCalledWith(
        TEACHER_GET_QUIZZES_URL,
        "GET"
      );

      expect(quizzes).toEqual(expectedResponse.data);
    });

    it("should throw an error if quiz retrieval fails", async () => {
      const expectedResponse = {
        status: "failed",
        message: "Failed to retrieve quizzes",
      };

      (sendAuthRequest as jest.Mock).mockResolvedValueOnce(expectedResponse);

      await expect(quizRepository.getTeacherQuizzes()).rejects.toThrowError(
        expectedResponse.message
      );
    });
  });
});
