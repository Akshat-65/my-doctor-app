import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import CustomButton from "./Button";

describe("Button Component", () => {
  test("renders with the correct label", () => {
    const { getByText } = render(<CustomButton label="Click me" />);
    const buttonElement = getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
  });
  test('click event works as expected', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(<CustomButton label="Click me" onClick={mockOnClick} />);
    const buttonElement = getByText(/Click me/i);
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
