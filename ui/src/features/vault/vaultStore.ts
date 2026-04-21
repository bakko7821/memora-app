import { create } from "zustand";

type VaultState = {
  path: string | null;
  files: string[];
  setVault: (path: string, files: string[]) => void;
};

export const useVaultStore = create<VaultState>((set) => ({
  path: null,
  files: [],
  setVault: (path, files) => set({ path, files }),
}));
