import React from "react";
import { render } from "@testing-library/react-native";

import StyledText from "@/presentation/components/text.component";

import colors from "@/presentation/styles/colors.styles";
import fonts from "@/presentation/styles/fonts.styles";

describe("StyledText", () => {
  it("renders children correctly", () => {
    const { getByTestId } = render(<StyledText>Hello World</StyledText>);
    expect(getByTestId("text")).toBeDefined();
    expect(getByTestId("text").props.children).toEqual("Hello World");
  });

  it("applies bold style when bold prop is true", () => {
    const { getByTestId } = render(<StyledText bold>Hello World</StyledText>);
    expect(getByTestId("text").props.style).toContainEqual({
      fontFamily: fonts.nunitoBold,
    });
  });

  it("applies paragraph style when paragraph prop is true", () => {
    const { getByTestId } = render(
      <StyledText paragraph>Hello World</StyledText>
    );
    expect(getByTestId("text").props.style).toContainEqual({
      fontFamily: fonts.inter,
      fontSize: 16,
    });
  });

  it("applies center style when center prop is true", () => {
    const { getByTestId } = render(<StyledText center>Hello World</StyledText>);
    expect(getByTestId("text").props.style).toContainEqual({
      textAlign: "center",
    });
  });

  it("applies color style based on color prop", () => {
    const { getByTestId } = render(
      <StyledText color="primary">Hello World</StyledText>
    );
    expect(getByTestId("text").props.style).toContainEqual({
      color: colors.primary,
    });
  });

  it("applies custom style when style prop is provided", () => {
    const { getByTestId } = render(
      <StyledText style={{ fontSize: 24 }}>Hello World</StyledText>
    );
    expect(getByTestId("text").props.style).toContainEqual({
      fontSize: 24,
    });
  });
});
