import React from "react";
import { render } from "@testing-library/react-native";

import Heading from "@/presentation/components/heading.component";

import fonts from "@/presentation//styles/fonts.styles";

describe("Heading component", () => {
  it("should render the text correctly", () => {
    const { getByTestId } = render(<Heading>Test Heading</Heading>);
    expect(getByTestId("heading-text")).toBeDefined();
    expect(getByTestId("heading-text").props.children).toEqual("Test Heading");
  });

  it("should render bold text when bold prop is true", () => {
    const { getByTestId } = render(<Heading bold>Test Heading</Heading>);
    expect(getByTestId("heading-text").props.style).toContainEqual({
      fontFamily: fonts.nunitoBold,
    });
  });

  it("should apply custom styles", () => {
    const { getByTestId } = render(
      <Heading style={{ color: "red" }}>Test Heading</Heading>
    );
    expect(getByTestId("heading-text").props.style).toContainEqual({
      color: "red",
    });
  });
});
