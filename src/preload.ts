import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  minimize: () => ipcRenderer.send("window:minimize"),
  close: () => ipcRenderer.send("window:close"),

  maximizeToggle: () => ipcRenderer.invoke("window:maximize-toggle"),

  isMaximized: () => ipcRenderer.invoke("window:is-maximized"),

  onMaximizedChanged: (callback: (value: boolean) => void) => {
    const listener = (_event: Electron.IpcRendererEvent, value: boolean) => {
      callback(value);
    };

    ipcRenderer.on("window:maximized-changed", listener);

    return () => {
      ipcRenderer.removeListener("window:maximized-changed", listener);
    };
  },

  selectFolder: () => ipcRenderer.invoke("select-folder"),
  createVault: (basePath: string, folderName: string) =>
    ipcRenderer.invoke("create-vault", basePath, folderName),
  readDir: (path: string) => ipcRenderer.invoke("read-dir", path),
});
