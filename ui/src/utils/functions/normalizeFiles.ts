import type { BaseVaultFile } from "../../features/vault/vaultRuntimeStore";

export const normalizeFiles = (files: string[]): BaseVaultFile[] => {
  return files.map((file) => {
    const parts = file.split(".");
    const extension = parts.at(-1) ?? "";
    const name = parts.slice(0, -1).join(".");

    const now = new Date();

    return {
      id: crypto.randomUUID(),
      name,
      extension,
      createdAt: now,
      updatedAt: now,
    };
  });
};
