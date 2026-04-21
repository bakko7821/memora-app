export const vaultService = {
  async createVault(basePath: string, folderName: string) {
    return window.electronAPI.createVault(basePath, folderName);
  },

  async openVault() {
    const path = await window.electronAPI.selectFolder();
    const files = await window.electronAPI.readDir(path);
    return { path, files };
  },
};
