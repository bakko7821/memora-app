import { create } from "zustand";
import { persist } from "zustand/middleware";

type VaultState = {
  path: string | null;
  setPath: (path: string) => void;
  clear: () => void;
};

export const useVaultStore = create<VaultState>()(
  persist(
    (set) => ({
      path: null,
      setPath: (path) => set({ path }),
      clear: () => set({ path: null }),
    }),
    { name: "vault-storage" },
  ),
);
