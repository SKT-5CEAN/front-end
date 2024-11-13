// useCompanyReviewStore.ts
import { create } from "zustand";

export interface ReviewDataType {
  stageName: string;
  preparation: string;
  difficulty: string;
  strength: string;
  weakness: string;
}

export interface CompanyReviewStoreType {
  companyReviews: Record<string, ReviewDataType[]>;
  addReviewData: (companyId: string, review: ReviewDataType) => void;
  getCompanyReviews: (companyId: string) => ReviewDataType[];
}

export const useCompanyReviewStore = create<CompanyReviewStoreType>((set, get) => ({
  companyReviews: {},

  addReviewData: (companyId, review) =>
    set((state) => ({
      companyReviews: {
        ...state.companyReviews,
        [companyId]: [...(state.companyReviews[companyId] || []), review],
      },
    })),

  getCompanyReviews: (companyId) => {
    const state = get(); // 현재 상태를 가져옴
    return state.companyReviews[companyId] || []; // 상태를 읽어서 반환
  },
}));
