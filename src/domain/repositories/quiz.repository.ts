import Quiz from "@/domain/entities/quiz.entity";

export default interface IQuizRepository {
  create(quiz: Quiz): Promise<Quiz>;
  update(quiz: Quiz): Promise<Quiz>;
  delete(id: string): Promise<void>;
  getById(id: string): Promise<Quiz>;
}
