export {};

declare global {
  const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
  const MAIN_WINDOW_VITE_NAME: string;

  namespace NodeJS {
    interface Process {
      viteDevServers: Record<string, import("vite").ViteDevServer>;
    }
  }
}
