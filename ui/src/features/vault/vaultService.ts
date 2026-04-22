import { normalizeFiles } from "../../utils/functions/normalizeFiles";
import type { VaultFile } from "./vaultRuntimeStore";

export const vaultService = {
  async createVault(basePath: string, folderName: string): Promise<string> {
    return await window.electronAPI.createVault(basePath, folderName);
  },

  async openVault(): Promise<{ path: string; files: VaultFile[] } | null> {
    const path = await window.electronAPI.selectFolder();
    if (!path) return null;

    const files = await window.electronAPI.readDir(path);

    return {
      path,
      files: normalizeFiles(files),
    };
  },

  async openVaultByPath(
    path: string,
  ): Promise<{ path: string; files: VaultFile[] }> {
    const files = await window.electronAPI.readDir(path);

    return {
      path,
      files: normalizeFiles(files),
    };
  },
};
