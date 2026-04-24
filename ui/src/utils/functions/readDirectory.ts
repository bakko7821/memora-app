import type { VaultFile } from "../../features/vault/vaultRuntimeStore";

export const readDirectory = async (dirHandle: FileSystemDirectoryHandle) => {
  const files: VaultFile[] = [];

  for await (const entry of dirHandle.values()) {
    if (entry.kind === "file") {
      const fileHandle = entry as FileSystemFileHandle;

      files.push({
        id: crypto.randomUUID(),
        name: entry.name,
        extension: entry.name.split(".").pop() || "",
        createdAt: new Date(),
        updatedAt: new Date(),
        handle: fileHandle, // ✅ теперь тип совпадает
      });
    }
  }

  return files;
};
