import { create } from "zustand";

interface ResumeDataType {
  question: string;
  content: string;
}

interface ResumeStoreType {
  resumeData: Array<ResumeDataType>;
  setResumeData: (resumes: Array<ResumeDataType>) => void;
}

export const useResumeStore = create<ResumeStoreType>((set) => ({
  resumeData: [],
  setResumeData: (resumes) => {
    set(() => ({ resumeData: resumes }));
  },
}));
