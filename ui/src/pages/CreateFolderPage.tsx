import { useState } from "react";
import Icon from "../assets/images/icon.png";
import { BackButton } from "../components/ui/BackButton";
import { StartInput } from "../components/ui/StartInput";
import { useNavigate } from "react-router-dom";
import { useVaultStore } from "../features/vault/vaultStore";
import { vaultService } from "../features/vault/vaultService";

export default function CreateFolderPage() {
  const navigate = useNavigate();
  const setVault = useVaultStore((s) => s.setVault);

  const [path, setPath] = useState<string | null>(null);
  const [folderName, setFolderName] = useState("");

  const handleSelectPath = async () => {
    const selected = await window.electronAPI.selectFolder();
    setPath(selected);
  };

  const handleCreate = async () => {
    if (!path || !folderName) return;

    const finalPath = await vaultService.createVault(path, folderName);

    setVault(finalPath, []);
    navigate("/main");
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col gap-2 items-center justify-center">
        <img src={Icon} alt="" className="w-50 h-30 object-cover" />
        <div className="gap-2 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-(--text)">Memora</h1>
          <p className="text-base font-normal text-(--text-secondary)">
            Версия 1.0.0
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="w-full flex flex-col items-start justify-start gap-1 px-4">
          <BackButton />
          <p className="text-2xl font-medium text-(--text)">
            Создать локальное хранилище
          </p>
        </div>
        <div className="rounded-3xl border-2 p-4 flex flex-col gap-6 bg-(--card) border-(--border-soft)">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-12">
              <div className="flex flex-col max-w-75">
                <p className="text-base font-medium text-(--text-secondary)">
                  Имя хранилища
                </p>
                <p className="text-sm font-normal text-(--disabled-text)">
                  Укажите имя нового хранилища.
                </p>
              </div>
              <StartInput placeholder="Имя хранилища" value={folderName} />
            </div>
            <div className="w-full h-px bg-(--disabled-text)"></div>
            <div className="flex items-center justify-between gap-12">
              <div className="flex flex-col min-w-75">
                <p className="text-base font-medium text-(--text-secondary)">
                  Расположение
                </p>
                <p className="whitespace-nowrap text-sm font-normal text-(--disabled-text)">
                  Ваше новое хранилище будет расположено в:
                </p>
                <p className="text-sm font-medium text-(--primary)">{path}</p>
              </div>
              <button
                onClick={handleSelectPath}
                className="cursor-pointer rounded-xl min-w-37.5 px-3 py-1.5 text-(--text) bg-(--header) hover:bg-(--hover-card) transition-colors"
              >
                Просмотр
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={handleCreate}
          className="cursor-pointer rounded-xl min-w-37.5 px-3 py-1.5 text-(--text) bg-(--primary) hover:bg-(--hover-primary) transition-colors"
        >
          Создать
        </button>
      </div>
    </div>
  );
}
