import Quiz from "@/domain/entities/quiz.entity";
import IQuizRepository from "@/domain/repositories/quiz.repository";

import { sendAuthRequest } from "@/core/utils/helpers";

import {
  TEACHER_CREATE_QUIZ_URL,
  TEACHER_GET_QUIZZES_URL,
  STUDENT_GET_QUIZ_URL,
} from "@/core/utils/constants";
import ApiResponse from "@/core/types/api-response.type";

export default class QuizRepository implements IQuizRepository {
  constructor() {}

  async create(quiz: Quiz): Promise<ApiResponse> {
    throw new Error("Method not implemented.");
  }

  async getTeacherQuizzes(): Promise<Quiz[]> {
    const getTeacherQuizzesResponse = await sendAuthRequest(
      TEACHER_GET_QUIZZES_URL,
      "GET"
    );

    console.log({ getTeacherQuizzesResponse });

    if (getTeacherQuizzesResponse.status === "failed")
      throw new Error(getTeacherQuizzesResponse.message);

    const quizzes: Quiz[] = getTeacherQuizzesResponse.data;

    return quizzes;
  }

  async getStudentQuiz(id: string): Promise<Quiz> {
    throw new Error("Method not implemented.");
  }
}
