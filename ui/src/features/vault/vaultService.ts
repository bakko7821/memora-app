import { useVaultRuntimeStore, type VaultFile } from "./vaultRuntimeStore";
import { readDirectory } from "../../utils/functions/readDirectory";

export const vaultService = {
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

  // // ❌ больше НЕ существует в браузере
  // async openVaultByPath(): Promise<never> {
  //   throw new Error("openVaultByPath is not supported in browser");
  // },

  // // ❌ тоже нельзя (нет прямого доступа к fs)
  // async createVault(): Promise<never> {
  //   throw new Error("createVault via path is not supported in browser");
  // },

  async createFile(
    directoryHandle: FileSystemDirectoryHandle,
    name: string,
    content = "",
  ): Promise<FileSystemFileHandle> {
    let fileHandle: FileSystemFileHandle;
    const runtime = useVaultRuntimeStore.getState();

    // 🔍 1. получить или создать файл
    try {
      fileHandle = await directoryHandle.getFileHandle(name);
    } catch {
      fileHandle = await directoryHandle.getFileHandle(name, {
        create: true,
      });

      const writable = await fileHandle.createWritable();
      await writable.write(content);
      await writable.close();
    }

    // 🧠 2. проверяем, не существует ли уже VaultFile
    let existing = runtime.files.find((f) => f.name === name);

    if (!existing) {
      const now = new Date();

      existing = {
        id: crypto.randomUUID(),
        name,
        extension: name.split(".").pop() ?? "",
        handle: fileHandle,
        createdAt: now,
        updatedAt: now,
      };

      runtime.setFiles([...runtime.files, existing]);
    }

    // 🎯 3. синхронизация runtime
    runtime.setCurrentFile(existing.id);

    return fileHandle;
  },

  async readFile(handle: FileSystemFileHandle) {
    const file = await handle.getFile();
    return await file.text();
  },

  async writeFile(handle: FileSystemFileHandle, content: string) {
    const writable = await handle.createWritable();
    await writable.write(content);
    await writable.close();
  },
};
