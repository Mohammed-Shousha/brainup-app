import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import SelectorButton from "@/presentation/components/selector-button.component";

import colors from "@/presentation/styles/colors.styles";

describe("SelectorButton", () => {
  const onPressMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the title correctly", () => {
    const { getByText } = render(
      <SelectorButton title="Test Title" onPress={onPressMock} />
    );
    expect(getByText("Test Title")).toBeDefined();
  });

  it("should call onPress when the button is pressed", () => {
    const { getByText } = render(
      <SelectorButton title="Test Title" onPress={onPressMock} />
    );
    fireEvent.press(getByText("Test Title"));
    expect(onPressMock).toHaveBeenCalled();
  });

  it("should apply active styles when active prop is true", () => {
    const { getByTestId } = render(
      <SelectorButton title="Test Title" onPress={onPressMock} active />
    );
    const button = getByTestId("selector-button");
    expect(button.props.style).toContainEqual({
      backgroundColor: colors.lightSecondary,
    });
  });
});
