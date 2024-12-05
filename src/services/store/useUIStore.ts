import { create } from "zustand";

type UIState = {
  isModalOpen: boolean; // New state to control modal visibility
  buttonLabel: string;
  modalContent: React.ReactNode;
  pageCustomHeader: React.ReactNode;
  setPageCustomHeader: (header: React.ReactNode) => void;
  setButtonLabel: (label: string) => void;
  setModalContent: (content: React.ReactNode) => void;
  setIsModalOpen: (isOpen: boolean) => void; // New setter for isModalOpen
};

export const useUIStore = create<UIState>((set) => ({
  isModalOpen: false, // Initial state for modal visibility
  buttonLabel: "Default Button",
  modalContent: null,
  pageCustomHeader: null,
  setPageCustomHeader: (header) => set({ pageCustomHeader: header }),
  setButtonLabel: (label) => set({ buttonLabel: label }),
  setModalContent: (content) => set({ modalContent: content }),
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }), // Setter for isModalOpen
}));
