import { create } from "zustand";

interface ResearchStoreType {
  talent: string;
  setTalent: (talent: string) => void;
  product: string;
  setProduct: (product: string) => void;
  news: string;
  setNews: (news: string) => void;
  other: string;
  setOther: (other: string) => void;
}

export const useResearchStore = create<ResearchStoreType>((set) => ({
  talent: "",
  setTalent: (talent) => {
    set(() => ({ talent }));
  },
  product: "",
  setProduct: (product) => {
    set(() => ({ product }));
  },
  news: "",
  setNews: (news) => {
    set(() => ({ news }));
  },
  other: "",
  setOther: (other) => {
    set(() => ({ other }));
  },
}));
