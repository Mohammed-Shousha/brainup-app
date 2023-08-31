import Question from "@/domain/entities/question.entity";

export default interface Quiz {
  id: string;
  classroomId: string;
  title: string;
  description: string;
  questions?: Question[];
}
