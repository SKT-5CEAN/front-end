import { create } from "zustand";

export interface RecapDataType {
  stageName: string;
  question: string;
  content: string;
}

export interface RecapStoreType {
  recapData: Array<RecapDataType>;
  setRecapData: (interviews: Array<RecapDataType>) => void;
}

export const useCompanyRecapStore = create<RecapStoreType>((set) => ({
  recapData: [],
  setRecapData: (recaps) => {
    set(() => ({ recapData: recaps }));
  },
}));
