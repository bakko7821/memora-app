import type { VaultFile } from "../../features/vault/vaultRuntimeStore";

export const normalizeFiles = (files: string[]): VaultFile[] => {
  return files.map((file) => {
    const parts = file.split(".");
    const extension = parts.at(-1) ?? "";
    const name = parts.slice(0, -1).join(".");

    const now = Date.now();

    return {
      id: crypto.randomUUID(),
      name,
      extension,
      createdAt: now,
      updatedAt: now,
    };
  });
};
