import GetStudentQuizUseCase from "@/domain/usecases/quiz/get-student-quiz.usecase";

import IQuizRepository from "@/domain/repositories/quiz.repository";
import Quiz from "@/domain/entities/quiz.entity";

const quizMock: Quiz = {
  id: "1",
  name: "Test Quiz",
  questions: [],
};

describe("GetStudentQuizUseCase", () => {
  let quizRepository: IQuizRepository;
  let getStudentQuizUseCase: GetStudentQuizUseCase;

  beforeAll(() => {
    quizRepository = {
      getStudentQuiz: jest.fn().mockResolvedValue(quizMock),
    } as Partial<IQuizRepository> as IQuizRepository;

    getStudentQuizUseCase = new GetStudentQuizUseCase(quizRepository);
  });

  it("should call quizRepository.getStudentQuiz with the correct quizId", async () => {
    const quizId = "123";

    await getStudentQuizUseCase.execute(quizId);

    expect(quizRepository.getStudentQuiz).toHaveBeenCalledWith(quizId);
  });

  it("should return the result of quizRepository.getStudentQuiz", async () => {
    const result = await getStudentQuizUseCase.execute(quizMock.id);

    expect(result).toEqual(quizMock);
  });
});
