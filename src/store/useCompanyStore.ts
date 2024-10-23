import { create } from "zustand";

interface CompanyStoreType {
  inProgressList: Array<string>;
  setInProgress: (list: Array<string>) => void;
  completedList: Array<string>;
  setCompleted: (list: Array<string>) => void;
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
}));
