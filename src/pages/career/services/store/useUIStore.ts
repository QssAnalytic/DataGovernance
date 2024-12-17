import { create } from 'zustand';
import { ReactNode } from 'react';

interface UIStore {
  buttonLabel: string;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  pageCustomHeader: string;
  modalContent: ReactNode;
  setModalContent: (content: ReactNode) => void;
  setButtonLabel: (label: string) => void;
  setPageCustomHeader: (header: string) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  buttonLabel: '',
  isModalOpen: false,
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
  pageCustomHeader: '',
  modalContent: null,
  setModalContent: (content) => set({ modalContent: content }),
  setButtonLabel: (label) => set({ buttonLabel: label }),
  setPageCustomHeader: (header) => set({ pageCustomHeader: header }),
})); 