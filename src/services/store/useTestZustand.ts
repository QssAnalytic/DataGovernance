import { create } from "zustand";

//! State tipini müəyyənləşdiririk
interface BearState {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
}

//! Zustand store yaradılması
const useStore = create<BearState>((set) => ({
  bears: 0,
  increasePopulation: () =>
    set((state) => ({ bears: state.bears + 1 })), 
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears: number) => set({ bears: newBears }),
}));

export default useStore;