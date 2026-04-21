import fs from "fs";
import path from "path";

export function createVault(basePath: string, folderName: string): string {
  const finalPath = path.join(basePath, folderName);

  if (fs.existsSync(finalPath)) {
    throw new Error("Folder already exists");
  }

  fs.mkdirSync(finalPath, { recursive: true });

  fs.mkdirSync(path.join(finalPath, ".memora"));

  fs.writeFileSync(path.join(finalPath, "README.md"), "# Welcome to Memora");

  return finalPath;
}
