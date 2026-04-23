import { useVaultRuntimeStore } from "../../features/vault/vaultRuntimeStore";
import { useVaultStore } from "../../features/vault/vaultStore";
import { FolderNavigateComponent } from "./FolderNavigateComponent";
import SettingsIcon from "../../assets/icons/InterfaceSettingCogWorkLoadingCogGearSettingsMachine.svg?react";
import SwapIcon from "../../assets/icons/ArrowSwap.svg?react";

export const FolderNavigateMenu = () => {
  const files = useVaultRuntimeStore((s) => s.files);
  const directoryHandle = useVaultStore((s) => s.directoryHandle);

  const folderName = directoryHandle?.name ?? "";

  return (
    <div className="flex flex-col items-stretch justify-between bg-(--card) h-full border-r-2 border-(--border) w-full">
      {/* FILE LIST */}
      <ul>
        {files.map((file) => (
          <FolderNavigateComponent key={file.id} file={file} />
        ))}
      </ul>

      {/* FOOTER */}
      <div className="w-full flex items-center justify-between border-t-2 border-(--border)">
        <div className="flex gap-2 items-center justify-center px-3 p-1">
          <p className="text-xl font-semibold text-(--primary)">
            <span className="text-(--text-secondary)">../</span>
            {folderName || "No vault"}
          </p>
        </div>

        <div className="flex items-center justify-center px-3 p-1">
          <button className="cursor-pointer group relative p-1">
            <SwapIcon
              width={24}
              height={24}
              className="text-(--disabled-text) group-hover:text-(--hover-secondary) transition-colors"
            />
          </button>

          <button className="cursor-pointer group relative p-1">
            <SettingsIcon
              width={24}
              height={24}
              className="text-(--disabled-text) group-hover:text-(--hover-secondary) transition-colors"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
