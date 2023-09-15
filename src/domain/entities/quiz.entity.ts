import Question from "@/domain/entities/question.entity";

interface QuizConfig {
  time: number;
  numberOfQuestions: number;
  numberOfChoices: number;
  numberOfModels: number;
  shuffleQuestions: boolean;
  active: boolean;
  instantResult: boolean;
  sendResult: boolean;
}

export default interface Quiz {
  id: string;
  name: string;
  classroomId?: string;
  classroomName?: string;
  config?: QuizConfig;
  questions?: Question[];
}
