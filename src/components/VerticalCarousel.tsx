import React, { useEffect } from "react";
import Step from "./Step";
import SummarySlide from "./SummarySlide";
import { handleNextStep, setQuestions } from "../store/pollform";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import STEPS from "../data.json";

const VerticalCarousel: React.FC = () => {
  const { steps, currentStep } = useSelector(
    (store: RootState) => store.pollform
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setQuestions(STEPS.steps));
  }, []);

  const handleOptionClick = (value: string) => {
    dispatch(handleNextStep({ [currentStep]: value }));
  };

  return (
    <div className="flex h-screen w-screen">
      {steps.length > 0 && currentStep < steps.length && (
        <Step step={steps[currentStep]} onOptionClick={handleOptionClick} />
      )}
      {currentStep === steps.length && <SummarySlide />}
    </div>
  );
};

export default VerticalCarousel;
