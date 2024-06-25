import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Option from "../Option";

const option = {
  icon: "⭐️",
  label: "Star",
  value: "star",
};

const onOptionClickMock = jest.fn();

describe("Option", () => {
  beforeEach(() => {
    render(<Option option={option} onOptionClick={onOptionClickMock} />);
  });

  it("renders the option icon and label", () => {
    // Check if the icon is rendered
    expect(screen.getByText("⭐️")).toBeInTheDocument();

    // Check if the label is present in the DOM (it might be hidden initially)
    expect(screen.getByText("Star")).toBeInTheDocument();
  });

  it("calls onOptionClick with the correct value when clicked", () => {
    // Simulate a click event
    fireEvent.click(screen.getByText("⭐️"));

    // Check if the mock function was called with the correct value
    expect(onOptionClickMock).toHaveBeenCalledWith("star");
  });

  it("shows the label on hover", () => {
    // Hover over the option
    fireEvent.mouseOver(screen.getByText("⭐️"));

    // Check if the label is visible
    expect(screen.getByText("Star")).toBeVisible();
  });
});
