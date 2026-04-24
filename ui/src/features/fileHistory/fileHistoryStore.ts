import { create } from "zustand";
import type { FilesHistoryState } from "../../entities/types/fileHistory";
import { useVaultRuntimeStore } from "../vault/vaultRuntimeStore";

export const useFilesHistoryStore = create<FilesHistoryState>((set, get) => ({
  tabs: [],
  activeTabId: null,

  openTab: (file) => {
    const exists = get().tabs.find((t) => t.id === file.id);

    if (exists) {
      set({ activeTabId: file.id });
      return;
    }

    set((state) => ({
      tabs: [...state.tabs, file],
      activeTabId: file.id,
    }));
  },

  closeTab: (id: string) => {
    const { tabs, activeTabId } = get();

    const newTabs = tabs.filter((t) => t.id !== id);

    let newActiveId = activeTabId;

    const isClosingActive = activeTabId === id;

    if (isClosingActive) {
      const closedIndex = tabs.findIndex((t) => t.id === id);

      const nextTab = newTabs[closedIndex] ?? newTabs[closedIndex - 1];

      newActiveId = nextTab?.id ?? null;
    }

    set({
      tabs: newTabs,
      activeTabId: newActiveId,
    });

    // 🔥 синхронизация с runtime (важно)
    useVaultRuntimeStore.getState().setCurrentFile(newActiveId ?? "");
  },

  setActiveTab: (id) => {
    set({ activeTabId: id });
  },
}));
