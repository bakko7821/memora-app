import { create } from "zustand";
import { vaultService } from "./vaultService";
import { useFilesHistoryStore } from "../fileHistory/fileHistoryStore";

export type VaultFile = {
  id: string;
  name: string;
  extension: string;
  createdAt: number;
  updatedAt: number;
  handle: FileSystemFileHandle;
};

type VaultRuntimeState = {
  files: VaultFile[];

  currentFileId: string | null;
  currentFileContent: string;

  setFiles: (files: VaultFile[]) => void;
  setCurrentFile: (id: string) => Promise<void>;
  updateCurrentFileContent: (content: string) => void;
};

export const useVaultRuntimeStore = create<VaultRuntimeState>((set, get) => ({
  files: [],

  currentFileId: null,
  currentFileContent: "",

  setFiles: (files) => set({ files }),

  setCurrentFile: async (fileId: string): Promise<void> => {
    const file = get().files.find((f) => f.id === fileId);

    if (!file) return;

    set({ currentFileId: fileId });

    // 🔥 синхронизация с вкладками
    useFilesHistoryStore.getState().openTab({
      id: file.id,
      name: file.name,
    });
  },

  updateCurrentFileContent: (content) => {
    const { currentFileId, files } = get();

    set({ currentFileContent: content });

    const file = files.find((f) => f.id === currentFileId);
    if (!file) return;

    vaultService.writeFile(file.handle, content);
  },
}));
