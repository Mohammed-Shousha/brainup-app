import Question from "@/domain/entities/question.entity";
import IQuestionRepository from "@/domain/repositories/question.repository";

export default class QuestionRepository implements IQuestionRepository {
  constructor() {}

  async create(question: Question): Promise<Question> {
    throw new Error("Method not implemented.");
  }

  async update(question: Question): Promise<Question> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
