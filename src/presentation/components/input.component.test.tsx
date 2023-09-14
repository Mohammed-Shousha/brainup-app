import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import Input from "@/presentation/components/input.component";

describe("Input component", () => {
  const onChangeText = jest.fn();
  it("should render the label and placeholder correctly", () => {
    const { getByTestId } = render(
      <Input
        label="Username"
        placeholder="Enter your username"
        onChangeText={onChangeText}
        value=""
      />
    );

    expect(getByTestId("input")).toBeDefined();
    expect(getByTestId("label")).toBeDefined();
  });

  it("should call the onChangeText function when the input value changes", () => {
    const { getByTestId } = render(
      <Input
        label="Username"
        placeholder="Enter your username"
        onChangeText={onChangeText}
        value=""
      />
    );

    fireEvent.changeText(getByTestId("input"), "testuser");

    expect(onChangeText).toHaveBeenCalledWith("testuser");
    expect(onChangeText).toHaveBeenCalledTimes(1);
  });

  it("should render the input value correctly", () => {
    const { getByTestId } = render(
      <Input
        label="Username"
        placeholder="Enter your username"
        onChangeText={onChangeText}
        value="testuser"
      />
    );

    expect(getByTestId("input").props.value).toEqual("testuser");
  });

  it("should render the input as secure text when secureTextEntry prop is true", () => {
    const { getByTestId } = render(
      <Input
        label="Password"
        placeholder="Enter your password"
        onChangeText={onChangeText}
        value=""
        secureTextEntry
      />
    );

    expect(getByTestId("input").props.secureTextEntry).toEqual(true);
  });

  it("should render the keyboard type correctly", () => {
    const { getByTestId } = render(
      <Input
        label="Username"
        placeholder="Enter your username"
        onChangeText={onChangeText}
        value=""
        keyboardType="email-address"
      />
    );

    expect(getByTestId("input").props.keyboardType).toEqual("email-address");
  });
});
