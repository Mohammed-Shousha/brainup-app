import Question from "@/domain/entities/question.entity";

export default interface IQuestionRepository {
  create(question: Question): Promise<Question>;
  update(question: Question): Promise<Question>;
  delete(id: string): Promise<void>;
}
