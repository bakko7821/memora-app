import { useVaultRuntimeStore } from "../../features/vault/vaultRuntimeStore";
import { useVaultStore } from "../../features/vault/vaultStore";
import { FolderNavigateComponent } from "./FolderNavigateComponent";
import MoreIcon from "../../assets/icons/IosMore.svg?react";

export const FolderNavigateMenu = () => {
  const files = useVaultRuntimeStore((s) => s.files);
  const path = useVaultStore((s) => s.path);

  const folderName = path
    ? path.replace(/\\/g, "/").split("/").filter(Boolean).pop()
    : "";

  return (
    <div className="bg-(--card) h-full border-r-2 border-(--border)">
      <div className="w-full flex items-center px-3 p-1 justify-between border-b-2 border-(--border)">
        <p className="text-base font-medium text-(--disabled-text)">
          {folderName}
        </p>
        <button className="cursor-pointer group">
          <MoreIcon
            width={24}
            height={24}
            className="text-(--disabled-text) group-hover:text-(--hover-secondary) transition-colors"
          />
        </button>
      </div>
      {files?.map((file, index) => (
        <FolderNavigateComponent key={index} file={file} />
      ))}
    </div>
  );
};
