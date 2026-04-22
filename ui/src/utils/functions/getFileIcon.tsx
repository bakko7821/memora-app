import type { JSX } from "react";
import TxtIcon from "../../assets/icons/FileTxt.svg?react";
import MdIcon from "../../assets/icons/LogoMarkdown.svg?react";
import DefaultIcon from "../../assets/icons/help-circle-svgrepo-com.svg?react";

const fileIcons: Record<string, JSX.Element> = {
  txt: <TxtIcon width={18} height={18} className="text-(--text)" />,
  md: <MdIcon width={18} height={18} className="text-(--text)" />,
};

export const getFileIcon = (ext: string) => {
  return (
    fileIcons[ext] ?? (
      <DefaultIcon width={18} height={18} className="text-(--text)" />
    )
  );
};
