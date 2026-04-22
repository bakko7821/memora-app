export const vaultService = {
  async createVault(basePath: string, folderName: string): Promise<string> {
    return await window.electronAPI.createVault(basePath, folderName);
  },

  async openVault(): Promise<{ path: string; files: string[] } | null> {
    const path = await window.electronAPI.selectFolder();
    if (!path) return null;

    const files = await window.electronAPI.readDir(path);
    return { path, files };
  },

  async openVaultByPath(path: string) {
    const files = await window.electronAPI.readDir(path);

    return {
      path,
      files,
    };
  },
};
