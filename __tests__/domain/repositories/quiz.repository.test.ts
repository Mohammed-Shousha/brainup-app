import IQuizRepository from "@/domain/repositories/quiz.repository";

import Quiz from "@/domain/entities/quiz.entity";

import ApiResponse from "@/core/types/api-response.type";

const quizMock: Quiz = {
  id: "1",
  name: "Test Quiz",
  questions: [],
};

const quizzesMock: Quiz[] = [quizMock];

const apiResponseMock: ApiResponse = {
  status: "success",
  message: "Request successful",
};

describe("IQuizRepository", () => {
  let quizRepository: IQuizRepository;

  beforeAll(() => {
    quizRepository = {
      create: jest.fn().mockResolvedValue(apiResponseMock),
      getTeacherQuizzes: jest.fn().mockResolvedValue(quizzesMock),
      getStudentQuiz: jest.fn().mockResolvedValue(quizMock),
    };
  });

  describe("create", () => {
    it("should create a new quiz ", async () => {
      const result = await quizRepository.create(quizMock);

      expect(result).toEqual(apiResponseMock);
    });
  });

  describe("getTeacherQuizzes", () => {
    it("should retrieve all teacher quizzes", async () => {
      const result = await quizRepository.getTeacherQuizzes();

      expect(result).toEqual(quizzesMock);
    });
  });

  describe("getStudentQuiz", () => {
    it("should retrieve a quiz with the specified ID", async () => {
      const quizId = "1";

      const result = await quizRepository.getStudentQuiz(quizId);

      expect(result).toEqual(quizMock);
    });
  });
});
