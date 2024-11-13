// useReviewStore.ts
import { create } from "zustand";

export interface ReviewDataType {
  stageName: string;
  preparation: string;
  difficulty: string;
  strength: string;
  weakness: string;
}

export interface ReviewStoreType {
  reviewData: Array<ReviewDataType>;
  setReviewData: (reviews: Array<ReviewDataType>) => void;
  addReviewData: (review: ReviewDataType) => void;
}

export const useReviewStore = create<ReviewStoreType>((set) => ({
  reviewData: [],
  setReviewData: (reviews) => set(() => ({ reviewData: reviews })),
  addReviewData: (review) =>
    set((state) => ({ reviewData: [...state.reviewData, review] })),
}));
