import React, { useEffect, useState } from "react";
import LeftIndicators from "./LeftIndicators";
import Option from "./Option";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { IStep } from "../models/IStep";

interface IStepProps {
  step: IStep;
  onOptionClick: (value: string) => void;
}

const Step: React.FC<IStepProps> = ({ step, onOptionClick }) => {
  const { currentStep } = useSelector((store: RootState) => store.pollform);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500); // Duration of the animation
    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <div className="flex h-full w-full">
      <div className="flex items-center justify-center w-1/2 bg-purple-600 text-white p-4">
        <LeftIndicators />
        <div
          className={`flex items-center justify-center h-full ${
            animate ? "animate-slide-in" : ""
          }`}
        >
          <h2 className="text-4xl font-bold">{step.title}</h2>
        </div>
      </div>
      <div
        className={`flex items-center justify-center w-1/2 p-4 ${
          animate ? "animate-slide-in" : ""
        }`}
      >
        <div className="flex flex-row space-x-4">
          {step.options.map((option, index) => (
            <Option key={index} option={option} onOptionClick={onOptionClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step;
