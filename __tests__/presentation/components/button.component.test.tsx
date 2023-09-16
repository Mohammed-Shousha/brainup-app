import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import Button from "@/presentation/components/button.component";

import colors from "@/presentation/styles/colors.styles";

describe("Button", () => {
  it("renders correctly with title", () => {
    const { getByTestId } = render(<Button title="Press me" />);
    expect(getByTestId("button")).toBeDefined();
    expect(getByTestId("button-text")).toBeDefined();
    expect(getByTestId("button-text").props.children).toEqual("Press me");
  });

  it("calls onPress when pressed", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <Button title="Press me" onPress={onPress} />
    );
    fireEvent.press(getByTestId("button"));
    expect(onPress).toHaveBeenCalled();
  });

  it("is disabled when isLoading is true", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <Button title="Press me" isLoading onPress={onPress} />
    );
    fireEvent.press(getByTestId("button"));
    expect(onPress).not.toHaveBeenCalled();
  });

  it("shows loading indicator when isLoading is true", () => {
    const { getByTestId } = render(<Button title="Press me" isLoading />);
    expect(getByTestId("loading-indicator")).toBeDefined();
  });

  it("doesn't show loading indicator when isLoading is false", () => {
    const { queryByTestId } = render(<Button title="Press me" />);
    expect(queryByTestId("loading-indicator")).toBeNull();
  });

  it("shows icon when passed", () => {
    const { getByTestId } = render(
      <Button title="Press me" icon={<></>} isLoading />
    );
    expect(getByTestId("button-icon")).toBeDefined();
  });

  it("should apply inverted style when inverted prop is true", () => {
    const { getByTestId } = render(<Button title="Press me" inverted />);

    expect(getByTestId("button").props.style).toContainEqual({
      backgroundColor: colors.white,
      borderWidth: 2,
      borderColor: colors.primary,
    });

    expect(getByTestId("button-text").props.style).toContainEqual({
      color: colors.primary,
    });
  });
});
