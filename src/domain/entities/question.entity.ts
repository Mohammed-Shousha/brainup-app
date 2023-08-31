type Question =
  | MultipleChoiceQuestion
  | TrueFalseQuestion
  | FillInBlankQuestion
  | ShortAnswerQuestion;

export default Question;

interface MultipleChoiceQuestion {
  type: "multiple-choice";
  options: string[];
  answer: string;
}

interface TrueFalseQuestion {
  type: "true-false";
  answer: boolean;
}

interface FillInBlankQuestion {
  type: "fill-in-blank";
  answer: string;
}

interface ShortAnswerQuestion {
  type: "short-answer";
  answer: string;
}
