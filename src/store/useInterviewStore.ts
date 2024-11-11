import { create } from "zustand";

export interface InterviewDataType {
  question: string;
  content: string;
}

export interface InterviewStoreType {
  interviewData: Array<InterviewDataType>;
  setInterviewData: (interviews: Array<InterviewDataType>) => void;
}

export const useInterviewStore = create<InterviewStoreType>((set) => ({
  interviewData: [],
  setInterviewData: (interviews) => {
    set(() => ({ interviewData: interviews }));
  },
}));
