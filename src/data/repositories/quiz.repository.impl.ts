import Quiz from "@/domain/entities/quiz.entity";
import IQuizRepository from "@/domain/repositories/quiz.repository";

export default class QuizRepository implements IQuizRepository {
  constructor() {}

  async create(quiz: Quiz): Promise<Quiz> {
    throw new Error("Method not implemented.");
  }

  async update(quiz: Quiz): Promise<Quiz> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async getByClassroom(): Promise<Quiz[]> {
    throw new Error("Method not implemented.");
  }

  async getById(id: string): Promise<Quiz> {
    throw new Error("Method not implemented.");
  }
}
