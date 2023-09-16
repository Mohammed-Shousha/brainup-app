import GetTeacherQuizzesUseCase from "@/domain/usecases/quiz/get-teacher-quizzes.usecases";

import Quiz from "@/domain/entities/quiz.entity";
import IQuizRepository from "@/domain/repositories/quiz.repository";

const quizzesMock: Quiz[] = [
  {
    id: "1",
    name: "Test Quiz",
    questions: [],
  },
];

describe("GetTeacherQuizzesUseCase", () => {
  let quizRepository: IQuizRepository;
  let getTeacherQuizzesUseCase: GetTeacherQuizzesUseCase;

  beforeAll(() => {
    quizRepository = {
      getTeacherQuizzes: jest.fn().mockResolvedValue(quizzesMock),
    } as Partial<IQuizRepository> as IQuizRepository;

    getTeacherQuizzesUseCase = new GetTeacherQuizzesUseCase(quizRepository);
  });

  it("should call quizRepository.getTeacherQuizzes", async () => {
    await getTeacherQuizzesUseCase.execute();

    expect(quizRepository.getTeacherQuizzes).toHaveBeenCalled();
  });

  it("should return quizzes from repository", async () => {
    const result = await getTeacherQuizzesUseCase.execute();

    expect(result).toEqual(quizzesMock);
  });
});
