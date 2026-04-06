export {};

declare global {
  interface Window {
    electronAPI: {
      minimize: () => void;
      close: () => void;
      maximizeToggle: () => Promise<void>;
      isMaximized: () => Promise<boolean>;
      onMaximizedChanged: (callback: (value: boolean) => void) => () => void;
    };
  }
}