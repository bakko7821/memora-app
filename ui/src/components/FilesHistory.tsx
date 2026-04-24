import { useFilesHistoryStore } from "../features/fileHistory/fileHistoryStore";
import { useVaultRuntimeStore } from "../features/vault/vaultRuntimeStore";
import CrossIcon from "../assets/icons/cross-svgrepo-com.svg?react";

export const FilesHistory = () => {
  const { tabs, closeTab, activeTabId, setActiveTab } = useFilesHistoryStore();

  if (tabs.length === 0)
    return (
      <div className="flex items-end flex-1 h-full px-3 pt-1 gap-1">
        <div
          className={`group flex items-center justify-center gap-8 px-2 p-1 rounded-t-lg cursor-pointer transition-colors bg-(--card) hover:bg-(--hover-card)`}
        >
          <p className={`text-sm font-normal transition-colors text-(--text)`}>
            Новая вкладка
          </p>
          <div className="w-6 h-6"></div>
        </div>
      </div>
    );

  return (
    <div className="flex items-end flex-1 h-full px-3 pt-1 gap-1">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;

        return (
          <div
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              useVaultRuntimeStore.getState().setCurrentFile(tab.id);
            }}
            className={`group flex items-center justify-center gap-8 px-2 p-1 rounded-t-lg cursor-pointer transition-colors
              ${isActive ? "bg-(--card)" : "hover:bg-(--hover-card)"}
            `}
          >
            <p
              className={`text-sm font-normal transition-colors
                ${
                  isActive
                    ? "text-(--text)"
                    : "text-(--muted-text) group-hover:text-(--text)"
                }
              `}
            >
              {tab.name}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeTab(tab.id);
              }}
              className="cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <CrossIcon
                width={24}
                height={24}
                className={`
                  transition-colors
                  ${isActive ? "text-(--text)" : "text-(--muted-text)"}
                  group-hover:text-red-600
                `}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
};
