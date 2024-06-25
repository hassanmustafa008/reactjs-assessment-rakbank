import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStep } from "../../models/IStep";

export interface IPollForm {
  currentStep: number;
  steps: IStep[],
  answers: { [key: string]: string }
}

const initialState: IPollForm = {
  currentStep: 0,
  steps: [],
  answers: {}
};

const PollFormSlice = createSlice({
  name: 'pollform',
  initialState,
  reducers: {
    handleNextStep: (state, action) => {
      return {
        ...state,
        currentStep: state.currentStep + 1,
        answers: { ...state.answers, ...action.payload }
      }
    },
    setQuestions: (state, action) => {
      return {
        ...state,
        steps: action.payload
      }
    }
  }
});

export const { handleNextStep, setQuestions } = PollFormSlice.actions;
export default PollFormSlice.reducer;
