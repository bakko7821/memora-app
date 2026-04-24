import { formatDate } from "../../entities/types/date";
import { NavComponentsArray } from "../../entities/types/navigate";
import { vaultService } from "../../features/vault/vaultService";
import { useVaultStore } from "../../features/vault/vaultStore";
import { NavigateComponent } from "./NavigateComponent";

export const NavigateMenu = () => {
  const directoryHandle = useVaultStore((s) => s.directoryHandle);

  const handleCreate = async () => {
    if (!directoryHandle) return;

    const { day, month, year } = formatDate();

    const fileName = `${day}-${month}-${year}.md`;

    await vaultService.createFile(directoryHandle, fileName, "");
  };

  const handleFastNavigate = () => {
    console.log("fast navigate clicked");
  };

  const getOnClick = (name: string) => {
    switch (name) {
      case "create":
        return handleCreate;
      case "fast-navigate":
        return handleFastNavigate;
      default:
        return undefined;
    }
  };

  return (
    <div className="bg-(--card) flex flex-col min-h-full justify-between border-r-2 border-(--border)">
      <nav className="flex flex-col gap-2">
        {NavComponentsArray.map((navComponent) => (
          <NavigateComponent
            key={navComponent.id}
            id={navComponent.id || 0}
            path={navComponent.path || ""}
            name={navComponent.name || ""}
            type={navComponent.type || "button"}
            icon={navComponent.icon || ""}
            onClick={getOnClick(navComponent.name)}
          />
        ))}
      </nav>
    </div>
  );
};
