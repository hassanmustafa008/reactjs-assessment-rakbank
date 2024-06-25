import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Step from "../Step";
import pollformReducer, { IPollForm } from "../../store/pollform";

const renderWithStore = (
  component: React.ReactElement,
  initialState: IPollForm
) => {
  const store = configureStore({
    reducer: {
      pollform: pollformReducer,
    },
    preloadedState: {
      pollform: initialState,
    },
  });

  return render(<Provider store={store}>{component}</Provider>);
};

describe("Step", () => {
  const initialState: IPollForm = {
    currentStep: 0,
    steps: [
      {
        title: "Step 1",
        options: [
          { icon: "⭐️", label: "Option 1", value: "option1" },
          { icon: "🌟", label: "Option 2", value: "option2" },
        ],
      },
    ],
    answers: {},
  };

  it("renders the step and options correctly", () => {
    const mockOnOptionClick = jest.fn();

    renderWithStore(
      <Step step={initialState.steps[0]} onOptionClick={mockOnOptionClick} />,
      initialState
    );

    // Check if the step title and options are rendered
    expect(screen.getByText("Step 1")).toBeInTheDocument();
    expect(screen.getByText("⭐️")).toBeInTheDocument();
    expect(screen.getByText("🌟")).toBeInTheDocument();
  });

  it("calls onOptionClick when an option is clicked", () => {
    const mockOnOptionClick = jest.fn();

    renderWithStore(
      <Step step={initialState.steps[0]} onOptionClick={mockOnOptionClick} />,
      initialState
    );

    // Click the first option
    fireEvent.click(screen.getByText("⭐️"));

    // Check if onOptionClick is called with the correct value
    expect(mockOnOptionClick).toHaveBeenCalledWith("option1");
  });

  it("animates the step on change", () => {
    const mockOnOptionClick = jest.fn();

    const { rerender } = renderWithStore(
      <Step step={initialState.steps[0]} onOptionClick={mockOnOptionClick} />,
      initialState
    );

    // Check if the animation class is applied initially
    expect(screen.getByText("Step 1").parentElement).toHaveClass(
      "animate-slide-in"
    );

    // Update the current step to trigger the animation
    const newState = {
      ...initialState,
      currentStep: 1,
    };

    rerender(
      <Provider
        store={configureStore({
          reducer: { pollform: pollformReducer },
          preloadedState: { pollform: newState },
        })}
      >
        <Step step={initialState.steps[0]} onOptionClick={mockOnOptionClick} />
      </Provider>
    );

    // Check if the animation class is applied after the update
    expect(screen.getByText("Step 1").parentElement).toHaveClass(
      "animate-slide-in"
    );
  });
});
