import { create } from "zustand";

export type VaultFile = {
  id: string;
  name: string;
  extension: string;
  createdAt: number;
  updatedAt: number;
};

type VaultRuntimeState = {
  files: VaultFile[];
  setFiles: (files: VaultFile[]) => void;
};

export const useVaultRuntimeStore = create<VaultRuntimeState>((set) => ({
  files: [],
  setFiles: (files) => set({ files }),
}));
