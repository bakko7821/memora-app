import { create } from "zustand";
import { vaultService } from "./vaultService";

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

  setCurrentFile: async (id) => {
    const { files } = get();

    const file = files.find((f) => f.id === id);
    if (!file) return;

    const content = await vaultService.readFile(file.handle);

    set({
      currentFileId: id,
      currentFileContent: content,
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
