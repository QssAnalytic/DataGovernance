import { create } from 'zustand';

interface UIStore {
  buttonLabel: string;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  pageCustomHeader: string;
  modalContent: React.ReactNode;
}

export const useUIStore = create<UIStore>((set) => ({
  buttonLabel: '',
  isModalOpen: false,
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
  pageCustomHeader: '',
  modalContent: null,
})); 