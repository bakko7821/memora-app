import { Editor } from "../components/ui/Editor";
import { FileTitleBar } from "../components/ui/FileTitleBar";
import { formatDate } from "../entities/types/date";
import { useVaultRuntimeStore } from "../features/vault/vaultRuntimeStore";
import { vaultService } from "../features/vault/vaultService";
import { useVaultStore } from "../features/vault/vaultStore";

export default function MainPage() {
  const { files, currentFileId, currentFileContent, updateCurrentFileContent } =
    useVaultRuntimeStore();

  const currentFile = files.find((f) => f.id === currentFileId);

  const directoryHandle = useVaultStore((s) => s.directoryHandle);

  const handleCreate = async () => {
    if (!directoryHandle) return;

    const { day, month, year } = formatDate();

    const fileName = `${day}-${month}-${year}.md`;

    await vaultService.createFile(directoryHandle, fileName, "");
  };

  if (!currentFile) {
    return (
      <div className=" w-full h-full flex flex-col gap-0">
        <FileTitleBar title={"Новая вкладка"} />
        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
          <button
            onClick={handleCreate}
            className="cursor-pointer text-(--primary) hover:text-(--hover-primary) transition-colors text-base font-medium"
          >
            Создать новый файл (Ctrl + N)
          </button>
          <button className="cursor-pointer text-(--primary) hover:text-(--hover-primary) transition-colors text-base font-medium">
            Перейти к файлу (Ctrl + O)
          </button>
        </div>
      </div>
    );
  }

  return (
    // <div className="p-4">
    //   <h1>{currentFile.name}</h1>

    //   <textarea
    //     className="w-full h-full"
    //     value={currentFileContent}
    //     onChange={(e) => updateCurrentFileContent(e.target.value)}
    //   />
    // </div>

    <div className=" w-full h-full flex flex-col gap-0">
      <FileTitleBar title={currentFile.name} />
      <Editor value={currentFileContent} onChange={updateCurrentFileContent} />
    </div>
  );
}
