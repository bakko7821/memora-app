import { create } from "zustand";
import { vaultService } from "./vaultService";
import { useFilesHistoryStore } from "../fileHistory/fileHistoryStore";

export interface BaseVaultFile {
  id: string;
  name: string;
  extension: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface VaultFile extends BaseVaultFile {
  handle: FileSystemFileHandle;
}

type VaultRuntimeState = {
  files: VaultFile[];

  currentFileId: string | null;
  currentFileContent: string;

  setFiles: (files: VaultFile[]) => void;
  setCurrentFile: (id: string) => Promise<void>;
  updateCurrentFileContent: (content: string) => void;
  clearCurrentFile: () => void;
};

export const useVaultRuntimeStore = create<VaultRuntimeState>((set, get) => ({
  files: [],

  currentFileId: null,
  currentFileContent: "",

  setFiles: (files) => set({ files }),

  setCurrentFile: async (fileId: string): Promise<void> => {
    const file = get().files.find((f) => f.id === fileId);

    if (!file) return;

    const content = await vaultService.readFile(file.handle);

    set({
      currentFileId: fileId,
      currentFileContent: content,
    });

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

  clearCurrentFile: () => {
    set({
      currentFileId: null,
      currentFileContent: "",
    });
  },
}));
