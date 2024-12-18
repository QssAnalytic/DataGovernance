import { create } from 'zustand';

interface EditModalStore {
  OverviewEditOpen: boolean;
  JobEditOpen: boolean;
  EducationEditOpen: boolean;
  setOverviewEditOpen: (isOpen: boolean) => void;
  setJobEditOpen: (isOpen: boolean) => void;
  setEducationEditOpen: (isOpen: boolean) => void;
}

export const EditModalStore = create<EditModalStore>((set) => ({
  OverviewEditOpen: false,
  JobEditOpen: false,
  EducationEditOpen: false,
  setOverviewEditOpen: (isOpen) => set({ OverviewEditOpen: isOpen }),
  setJobEditOpen: (isOpen) => set({ JobEditOpen: isOpen }),
  setEducationEditOpen: (isOpen) => set({ EducationEditOpen: isOpen }),

}));