import { create } from "zustand";

export type HeaderMenu =
  | "홈"
  | "캘린더"
  | "지원 준비"
  | "보관함"
  | "회고 / 복기"
  | "통계";

interface HeaderStoreType {
  selectedMenu: HeaderMenu;
  setSelectedMenu: (menu: HeaderMenu) => void;
}

export const useHeaderStore = create<HeaderStoreType>((set) => ({
  selectedMenu: "홈",
  setSelectedMenu: (menu) => {
    set(() => ({ selectedMenu: menu }));
  },
}));
