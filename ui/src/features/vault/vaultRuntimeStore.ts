import { create } from "zustand";

type VaultRuntimeState = {
  files: string[];
  setFiles: (files: string[]) => void;
};

export const useVaultRuntimeStore = create<VaultRuntimeState>((set) => ({
  files: [],
  setFiles: (files) => set({ files }),
}));
