import { create } from "zustand";

interface MenuState {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (open) => set({ isMenuOpen: open }),
}));
