import Lesson from "@/domain/entities/lesson.entity";
import Quiz from "@/domain/entities/quiz.entity";

interface ClassroomRequest {
  id: string;
  name: string;
}

interface Student {
  id: string;
  name: string;
}

export default interface Classroom {
  id: string;
  code?: string;
  name?: string;
  teacher?: string;
  students?: Student[];
  requests?: ClassroomRequest[];
  announcments?: string[];
  quizzes?: Quiz[];
  lessons?: Lesson[];
}
