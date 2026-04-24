export interface OpenFileTab {
  id: string;
  name: string;
  path?: string;
}

export interface FilesHistoryState {
  tabs: OpenFileTab[];
  activeTabId: string | null;

  openTab: (file: OpenFileTab) => void;
  closeTab: (id: string) => void;
  setActiveTab: (id: string) => void;
}
