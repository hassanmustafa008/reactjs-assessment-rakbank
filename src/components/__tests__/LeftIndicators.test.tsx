import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import pollformReducer, { IPollForm } from "../../store/pollform";
import LeftIndicators from "../LeftIndicators";

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

describe("LeftIndicators", () => {
  it("renders indicators based on steps", () => {
    const initialState: IPollForm = {
      currentStep: 0,
      steps: [
        {
          title: "Step 1",
          options: [{ icon: "icon1", label: "Option 1", value: "option1" }],
        },
        {
          title: "Step 2",
          options: [{ icon: "icon2", label: "Option 2", value: "option2" }],
        },
      ],
      answers: {},
    };

    renderWithStore(<LeftIndicators />, initialState);

    const indicators = screen.getAllByRole("listitem");
    expect(indicators).toHaveLength(2);
    expect(indicators[0]).toHaveClass("bg-white");
    expect(indicators[1]).toHaveClass("bg-gray-300");
  });

  it("highlights the current step", () => {
    const initialState: IPollForm = {
      currentStep: 1,
      steps: [
        {
          title: "Step 1",
          options: [{ icon: "icon1", label: "Option 1", value: "option1" }],
        },
        {
          title: "Step 2",
          options: [{ icon: "icon2", label: "Option 2", value: "option2" }],
        },
      ],
      answers: {},
    };

    renderWithStore(<LeftIndicators />, initialState);

    const indicators = screen.getAllByRole("listitem");
    expect(indicators).toHaveLength(2);
    expect(indicators[0]).toHaveClass("bg-gray-300");
    expect(indicators[1]).toHaveClass("bg-white");
  });
});
