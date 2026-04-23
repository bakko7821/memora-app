import type { VaultFile } from "./vaultRuntimeStore";
import { readDirectory } from "../../utils/functions/readDirectory";

export const vaultService = {
  // 📁 открыть vault (выбор папки)
  async openVault(): Promise<{
    directoryHandle: FileSystemDirectoryHandle;
    files: VaultFile[];
  } | null> {
    const dirHandle = await window.showDirectoryPicker();
    if (!dirHandle) return null;

    const files = await readDirectory(dirHandle);

    return {
      directoryHandle: dirHandle,
      files,
    };
  },

  // ❌ больше НЕ существует в браузере
  async openVaultByPath(): Promise<never> {
    throw new Error("openVaultByPath is not supported in browser");
  },

  // ❌ тоже нельзя (нет прямого доступа к fs)
  async createVault(): Promise<never> {
    throw new Error("createVault via path is not supported in browser");
  },

  // 📄 чтение файла
  async readFile(handle: FileSystemFileHandle) {
    const file = await handle.getFile();
    return await file.text();
  },

  // ✍️ запись файла
  async writeFile(handle: FileSystemFileHandle, content: string) {
    const writable = await handle.createWritable();
    await writable.write(content);
    await writable.close();
  },
};
