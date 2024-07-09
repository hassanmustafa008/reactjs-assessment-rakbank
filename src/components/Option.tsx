import React from "react";
import { IOption } from "../models/IOption";

interface OptionProps {
  option: IOption;
  onOptionClick: (value: string) => void;
}

const Option: React.FC<OptionProps> = ({ option, onOptionClick }) => {
  return (
    <div
      className={`relative group flex items-center justify-center p-4 cursor-pointer`}
      onClick={() => onOptionClick(option.value)}
    >
      <span className="text-6xl">{option.icon}</span>
      <div className="absolute bottom-14 flex-col items-center hidden mb-6 group-hover:flex">
        <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
          {option.label}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
      </div>
    </div>
  );
};

export default Option;
