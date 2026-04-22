import { ipcMain } from "electron";
import fs from "fs";
import path from "path";
import { createVault } from "../utils/vault";

ipcMain.handle("create-vault", (_, basePath: string, folderName: string) => {
  return createVault(basePath, folderName);
});

ipcMain.handle("read-dir", async (_, folderPath: string) => {
  const files = await fs.promises.readdir(folderPath, {
    withFileTypes: true,
  });

  return files.filter((f) => f.isFile()).map((f) => f.name);
});
