interface FolderNavigateComponentProps {
  file: string;
}
export const FolderNavigateComponent = ({
  file,
}: FolderNavigateComponentProps) => {
  return (
    <div className="cursor-pointer bg-transparent hover:bg-(--hover-card) transition-colors w-full px-3 p-1">
      <p className="text-(--text) text-sm font-normal">{file}</p>
    </div>
  );
};
