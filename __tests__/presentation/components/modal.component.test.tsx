import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import ModalComponent from "@/presentation/components/modal.component";

describe("ModalComponent", () => {
  const onClose = jest.fn();
  const props = {
    visible: true,
    onClose,
    title: "Test Modal",
    message: "This is a test modal",
    buttonTitle: "Close",
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the modal with the correct title and message", () => {
    const { getByText } = render(<ModalComponent {...props} />);
    expect(getByText(props.title)).toBeDefined();
    expect(getByText(props.message)).toBeDefined();
  });

  it("should call onClose when the button is pressed", () => {
    const { getByText } = render(<ModalComponent {...props} />);
    fireEvent.press(getByText(props.buttonTitle));
    expect(onClose).toHaveBeenCalled();
  });

  it("should not render the modal when visible is false", () => {
    const { queryByText } = render(
      <ModalComponent {...props} visible={false} />
    );
    expect(queryByText(props.title)).toBeNull();
    expect(queryByText(props.message)).toBeNull();
  });
});
