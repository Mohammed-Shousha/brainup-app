import CreateQuizUseCase from "@/domain/usecases/quiz/create-quiz.usecase";

import IQuizRepository from "@/domain/repositories/quiz.repository";

describe("CreateQuizUseCase", () => {
  let quizRepository: IQuizRepository;
  let createQuizUseCase: CreateQuizUseCase;

  beforeAll(() => {
    quizRepository = {
      create: jest.fn(),
    } as Partial<IQuizRepository> as IQuizRepository;

    createQuizUseCase = new CreateQuizUseCase(quizRepository);
  });

  it("should call quizRepository.create with the correct quiz", async () => {
    const quiz = {
      id: "1",
      name: "Test Quiz",
      questions: [],
    };

    await createQuizUseCase.execute(quiz);

    expect(quizRepository.create).toHaveBeenCalledWith(quiz);
  });
});
