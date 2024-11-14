// useCompanyBookmarkStore.ts
import { create } from "zustand";

export interface BookmarkDataType {
  title: string;
  url: string;
  tag: string; // 태그 필드 추가
}

export interface CompanyBookmarkStoreType {
  companyBookmarks: { [key: string]: BookmarkDataType[] };
  addBookmark: (companyId: string, bookmark: BookmarkDataType) => void;
  getCompanyBookmarks: (companyId: string) => BookmarkDataType[];
}

export const useCompanyBookmarkStore = create<CompanyBookmarkStoreType>((set, get) => ({
  companyBookmarks: {},
  
  addBookmark: (companyId, bookmark) =>
    set((state) => ({
      companyBookmarks: {
        ...state.companyBookmarks,
        [companyId]: [...(state.companyBookmarks[companyId] || []), bookmark],
      },
    })),

  getCompanyBookmarks: (companyId) => {
    const state = get();
    return state.companyBookmarks[companyId] || [];
  }
}));
