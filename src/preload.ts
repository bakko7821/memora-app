import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  appName: "My Desktop App",
});
