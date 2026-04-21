import { ipcMain, dialog } from "electron";

ipcMain.handle("select-folder", async () => {
  const result = await dialog.showOpenDialog({
    properties: ["openDirectory"],
  });

  return result.filePaths[0];
});
