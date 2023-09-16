import React from "react";
import { render } from "@testing-library/react-native";

import LessonTile from "@/presentation/components/lesson-tile.component";

describe("LessonTile", () => {
  const lessonName = "Test Lesson";
  const pdf = "test.pdf";
  const video = "test.mp4";

  it("renders the lesson name", () => {
    const { getByText } = render(<LessonTile lessonName={lessonName} />);
    expect(getByText(lessonName)).toBeDefined();
  });

  it("renders the video button", () => {
    const { getByText } = render(
      <LessonTile lessonName={lessonName} video={video} />
    );
    expect(getByText("Video")).toBeDefined();
  });

  it("renders the pdf button", () => {
    const { getByText } = render(
      <LessonTile lessonName={lessonName} pdf={pdf} />
    );
    expect(getByText("PDF")).toBeDefined();
  });
});
