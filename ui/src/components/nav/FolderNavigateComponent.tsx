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

  const { setCurrentFile } = useVaultRuntimeStore();

  return (
    <li
      onClick={() => setCurrentFile(file.id)}
      className="flex gap-2 items-center cursor-pointer bg-transparent hover:bg-(--hover-card) transition-colors w-full px-3 p-1"
    >
      {Icon}
      <p className="text-(--text-secondary) text-sm font-normal">{file.name}</p>
    </li>
  );
};
