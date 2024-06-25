import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const LeftIndicators: React.FC = () => {
  const { steps, currentStep } = useSelector(
    (store: RootState) => store.pollform
  );
  return (
    <div className="absolute left-4 flex flex-col space-y-2">
      {steps.map((_, index) => (
        <div
          key={index}
          role="listitem"
          className={`w-4 h-4 rounded-full ${
            index === currentStep ? "bg-white" : "bg-gray-300"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default LeftIndicators;
