import { useFilesHistoryStore } from "../../features/fileHistory/fileHistoryStore";
import {
  useVaultRuntimeStore,
  type VaultFile,
} from "../../features/vault/vaultRuntimeStore";
import { getFileIcon } from "../../utils/functions/getFileIcon";

interface FolderNavigateComponentProps {
  file: VaultFile;
}
export const FolderNavigateComponent = ({
  file,
}: FolderNavigateComponentProps) => {
  const Icon = getFileIcon(file.extension);
  const { currentFileId } = useVaultRuntimeStore();

  const isActive = currentFileId === file.id;

  const openFile = (file: VaultFile) => {
    useVaultRuntimeStore.getState().setCurrentFile(file.id);

    useFilesHistoryStore.getState().openTab({
      id: file.id,
      name: file.name,
    });
  };

  return (
    <li
      onClick={() => openFile(file)}
      className={`flex gap-2 items-center cursor-pointer w-full px-3 p-1 transition-colors
    ${isActive ? "bg-(--active-card)" : "bg-transparent hover:bg-(--hover-card)"}
  `}
    >
      {Icon}
      <p className="text-(--text-secondary) text-sm font-normal">{file.name}</p>
    </li>
  );
};
