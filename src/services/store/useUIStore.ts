import {create} from "zustand";

type UIState = {
  buttonLabel: string;
  modalContent: React.ReactNode;
  setButtonLabel: (label: string) => void;
  setModalContent: (content: React.ReactNode) => void;
};

export const useUIStore = create<UIState>((set) => ({
  buttonLabel: "Default Button",
  modalContent: null,
  setButtonLabel: (label) => set({ buttonLabel: label }),
  setModalContent: (content) => set({ modalContent: content }),
}));
