import React from "react";
import { render } from "@testing-library/react-native";

import QuizTile from "@/presentation/components/quiz-tile.component";

describe("QuizTile", () => {
  const quizId = "123";
  const quizName = "Test Quiz";

  it("should render quiz name", () => {
    const { getByText } = render(
      <QuizTile quizId={quizId} quizName={quizName} />
    );
    expect(getByText(quizName)).toBeDefined();
  });

  it("should render attempt button", () => {
    const { getByText } = render(
      <QuizTile quizId={quizId} quizName={quizName} />
    );
    expect(getByText("Attempt")).toBeDefined();
  });
});
