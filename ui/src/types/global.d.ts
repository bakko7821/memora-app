export {};

declare global {
  interface Window {
    electronAPI: {
      minimize: () => void;
      maximizeToggle: () => void;
      close: () => void;
    };
  }
}