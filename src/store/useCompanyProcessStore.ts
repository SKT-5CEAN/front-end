import { create } from "zustand";

export type ProcessKind =
  | "서류 전형"
  | "인적성 검사"
  | "필기 전형"
  | "과제 전형"
  | "코딩테스트"
  | "인터뷰"
  | "커피챗"
  | "1차 면접"
  | "2차 면접"
  | "3차 면접"
  | "AI 면접"
  | "영어 면접"
  | "PT 면접"
  | "신체 검사"
  | "최종 발표";

export interface CompanyProcessType {
  company: string;
  processes: Array<ProcessKind>;
  setCompany: (company: string) => void;
  setProcesses: (processes: Array<ProcessKind>) => void;
}

export const useCompanyProcessStore = create<CompanyProcessType>((set) => ({
  company: "",
  processes: [],
  setCompany: (company) => {
    set(() => ({ company: company }));
  },
  setProcesses: (processes) => {
    set(() => ({ processes: processes }));
  },
}));
