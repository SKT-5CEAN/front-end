import { create } from "zustand";

interface CompanyStoreType {
  inProgressList: Array<string>;
  setInProgress: (list: Array<string>) => void;
  completedList: Array<string>;
  setCompleted: (list: Array<string>) => void;
  inProgressCompany: string;
  setInProgressCompany: (company: string) => void;
  completedCompany: string;
  setCompletedCompany: (company: string) => void;
}

export const useCompanyStore = create<CompanyStoreType>((set) => ({
  inProgressList: [],
  setInProgress: (list) => {
    set(() => ({ inProgressList: list }));
  },
  completedList: [],
  setCompleted: (list) => {
    set(() => ({ completedList: list }));
  },
  inProgressCompany: "",
  setInProgressCompany: (company) => {
    set(() => ({ inProgressCompany: company }));
  },
  completedCompany: "",
  setCompletedCompany: (company) => {
    set(() => ({ completedCompany: company }));
  },
}));
