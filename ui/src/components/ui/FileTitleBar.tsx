import ArrowIcon from "../../assets/icons/arrow-narrow-left-svgrepo-com.svg?react";
import MoreIcon from "../../assets/icons/IosMore.svg?react";

interface FileTitleBarProps {
  title: string;
}

export const FileTitleBar = ({ title }: FileTitleBarProps) => {
  return (
    <div className="bg-transparent px-3 p-2 w-full flex items-center justify-between">
      <div className="flex items-center justify-center gap-1">
        <button className="cursor-pointer group">
          <ArrowIcon
            width={24}
            height={24}
            className=" text-(--muted-text) group-hover:text-(--text-secondary) transition-colors"
          />
        </button>
        <button className="cursor-pointer group scale-x-[-1]">
          <ArrowIcon
            width={24}
            height={24}
            className=" text-(--muted-text) group-hover:text-(--text-secondary) transition-colors"
          />
        </button>
      </div>
      <p className="text-base font-medium text-(--muted-text)">{title}</p>
      <button className="cursor-pointer group">
        <MoreIcon
          width={24}
          height={24}
          className=" text-(--muted-text) group-hover:text-(--text-secondary) transition-colors"
        />
      </button>
    </div>
  );
};
