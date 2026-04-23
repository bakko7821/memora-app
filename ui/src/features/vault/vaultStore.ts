import { create } from "zustand";
import { persist } from "zustand/middleware";

type VaultState = {
  directoryHandle: FileSystemDirectoryHandle | null;

  setDirectoryHandle: (handle: FileSystemDirectoryHandle) => void;
  clear: () => void;

  // проверка/запрос прав (важно после перезагрузки)
  ensurePermission: () => Promise<boolean>;
};

export const useVaultStore = create<VaultState>()(
  persist(
    (set, get) => ({
      directoryHandle: null,

      setDirectoryHandle: (handle) => set({ directoryHandle: handle }),

      clear: () => set({ directoryHandle: null }),

      ensurePermission: async () => {
        const handle = get().directoryHandle;
        if (!handle) return false;

        const permission = await handle.queryPermission({
          mode: "readwrite",
        });

        if (permission === "granted") return true;

        const request = await handle.requestPermission({
          mode: "readwrite",
        });

        return request === "granted";
      },
    }),
    {
      name: "vault-storage",
      // ⚠️ handle нельзя нормально сериализовать → кастомно сохраняем
      partialize: (state) => ({
        directoryHandle: state.directoryHandle,
      }),
    },
  ),
);
