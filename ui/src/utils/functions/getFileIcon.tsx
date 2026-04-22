import type { SVGProps } from "react";
import TxtIcon from "../../assets/icons/FileTxt.svg?react";
import MdIcon from "../../assets/icons/LogoMarkdown.svg?react";
import DefaultIcon from "../../assets/icons/help-circle-svgrepo-com.svg?react";

const ICON_PROPS: SVGProps<SVGSVGElement> = {
  width: 20,
  height: 20,
  className: "text-(--text)",
};

const fileIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  txt: TxtIcon,
  md: MdIcon,
};

export const getFileIcon = (ext: string) => {
  const Icon = fileIcons[ext] ?? DefaultIcon;

  return <Icon {...ICON_PROPS} />;
};
