import ApiResponse from "@/core/types/api-response.type";
import Quiz from "@/domain/entities/quiz.entity";

export default interface IQuizRepository {
  create(quiz: Quiz): Promise<ApiResponse>;
  getTeacherQuizzes(): Promise<Quiz[]>;
}
