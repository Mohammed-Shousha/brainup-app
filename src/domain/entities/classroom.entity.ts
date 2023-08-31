import User from "@/domain/entities/user.entity";
import Lesson from "@/domain/entities/lesson.entity";
import Quiz from "@/domain/entities/quiz.entity";

export default interface Classroom {
  id: string;
  name: string;
  teacher: User;
  description?: string;
  students?: User[];
  lessons?: Lesson[];
  quizzes?: Quiz[];
}
