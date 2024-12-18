import { create } from "zustand";

interface AdminState {
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
}

export const useAdminStore = create<AdminState>((set) => ({
  isAdmin: true, // Default value
  setIsAdmin: (value: boolean) => set({ isAdmin: value }),
}));
