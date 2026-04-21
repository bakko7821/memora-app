export const vaultService = {
  async createVault(basePath: string, folderName: string) {
    return window.electronAPI.createVault(basePath, folderName);
  },

  async openVault() {
    const path = await window.electronAPI.selectFolder();
    if (!path) return;

    const files = await window.electronAPI.readDir(path);
    return { path, files };
  },
};
