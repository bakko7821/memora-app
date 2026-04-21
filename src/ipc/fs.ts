import { ipcMain } from "electron";
import fs from "fs";
import path from "path";
import { createVault } from "../utils/vault";

ipcMain.handle("create-vault", (_, basePath: string, folderName: string) => {
  return createVault(basePath, folderName);
});

ipcMain.handle("read-dir", (_, folderPath: string) => {
  return fs.readdirSync(folderPath);
});
