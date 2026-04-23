import { useVaultRuntimeStore } from "../features/vault/vaultRuntimeStore";

export default function MainPage() {
  const { files, currentFileId, currentFileContent, updateCurrentFileContent } =
    useVaultRuntimeStore();

  const currentFile = files.find((f) => f.id === currentFileId);

  if (!currentFile) {
    return <div>Выберите файл</div>;
  }

  return (
    <div className="p-4">
      <h1>{currentFile.name}</h1>

      <textarea
        className="w-full h-full"
        value={currentFileContent}
        onChange={(e) => updateCurrentFileContent(e.target.value)}
      />
    </div>
  );
}
