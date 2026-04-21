import Icon from "../assets/images/icon.png";
import HelpIcon from "../assets/icons/help-circle-svgrepo-com.svg?react";
import { LanguageDropDown } from "../components/LanguageDropDown";
import { Link, useNavigate } from "react-router-dom";
import { vaultService } from "../features/vault/vaultService";
import { useVaultStore } from "../features/vault/vaultStore";

export default function StartPage() {
  const navigate = useNavigate();
  const setVault = useVaultStore((s) => s.setVault);

  const handleOpen = async () => {
    const vault = await vaultService.openVault();

    if (!vault) return;

    setVault(vault.path, vault.files);
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
      <div className="rounded-3xl border-2 p-4 flex flex-col gap-6 bg-(--card) border-(--border-soft)">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-12">
            <div className="flex flex-col max-w-75">
              <p className="text-base font-medium text-(--text-secondary)">
                Создать новое хранилище
              </p>
              <p className="text-sm font-normal text-(--disabled-text)">
                Создайте новое хранилище Memora внутри указанной папки.
              </p>
            </div>
            <button
              onClick={() => navigate("/create-folder")}
              className="cursor-pointer rounded-xl min-w-37.5 px-3 py-1.5 text-(--text) bg-(--primary) hover:bg-(--hover-primary) transition-colors"
            >
              Создать
            </button>
          </div>
          <div className="flex items-center justify-between gap-12">
            <div className="flex flex-col max-w-75">
              <p className="text-base font-medium text-(--text-secondary)">
                Открыть папку как хранилище
              </p>
              <p className="text-sm font-normal text-(--disabled-text)">
                Выберите папку, содержащую .md файлы.
              </p>
            </div>
            <button
              onClick={handleOpen}
              className="cursor-pointer rounded-xl min-w-37.5 px-3 py-1.5 text-(--text) bg-(--header) hover:bg-(--hover-card) transition-colors"
            >
              Открыть
            </button>
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <LanguageDropDown />
          <Link to={"/help"} className="group cursor-pointer p-1">
            <HelpIcon
              width={24}
              height={24}
              className="text-(--text-secondary) group-hover:text-(--text) transition-colors"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
