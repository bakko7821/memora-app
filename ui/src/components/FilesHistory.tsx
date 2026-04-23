export const FilesHistory = () => {
  return (
    <div className=" flex items-end justify-start flex-1 h-full px-3 pt-1 gap-1">
      <div className=" px-2 p-1 rounded-t-lg cursor-pointer group hover:bg-(--hover-card) transition-colors">
        <p className="text-sm font-normal text-(--muted-text) group-hover:text-(--text) transition-colors">
          Новая вкладка
        </p>
      </div>
      <div className="px-2 p-1 rounded-t-lg cursor-pointer group hover:bg-(--hover-card)">
        <p className="text-sm font-normal text-(--muted-text) group-hover:text-(--text) transition-colors">
          README
        </p>
      </div>
    </div>
  );
};
