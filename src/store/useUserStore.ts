import { create } from "zustand";

interface UserStoreType {
  accessTkn: string;
  setAccessTkn: (token: string) => void;
}

export const useUserStore = create<UserStoreType>((set) => ({
  accessTkn: "",
  setAccessTkn: (token) => {
    set(() => ({ accessTkn: token }));
  },
}));
