import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const SummarySlide: React.FC = () => {
  const { steps, answers } = useSelector((store: RootState) => store.pollform);

  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/submit", answers)
      .then((response) => {
        if (response.statusText === "OK") {
          if (window.confirm("Data submitted")) {
            window.location.reload();
          }
        }
        console.log("Submitted", response);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-100 p-4 animate-reveal">
      <div className="flex flex-col space-y-4">
        {steps.map((step, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold">{step.title}</h2>
            <p>{answers[index]}</p>
          </div>
        ))}
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SummarySlide;
