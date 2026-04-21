export {};

declare global {
  interface Window {
    electronAPI: {
      minimize: () => void;
      close: () => void;
      maximizeToggle: () => Promise<void>;
      isMaximized: () => Promise<boolean>;
      onMaximizedChanged: (callback: (value: boolean) => void) => () => void;
      selectFolder: () => Promise<string | null>;
      createVault: (basePath: string, folderName: string) => Promise<string>;
      readDir: (path: string) => Promise<string[]>;
    };
  }
}
