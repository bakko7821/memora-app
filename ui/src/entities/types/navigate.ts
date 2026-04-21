import type { ComponentType, SVGProps } from "react";
import CreateIcon from "../../assets/icons/Create.svg?react";
import HomeIcon from "../../assets/icons/GraphDuotone.svg?react";
import FastSearchIcon from "../../assets/icons/DocumentSearch16Regular.svg?react";

export type NavigateType = "button" | "link";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export interface NavComponent {
  id: number;
  path: string;
  name: string;
  type: NavigateType;
  icon: IconType;
}

export const NavComponentsArray: NavComponent[] = [
  {
    id: 0,
    name: "fast-navigate",
    type: "button",
    path: "",
    icon: FastSearchIcon,
  },
  {
    id: 1,
    name: "create",
    type: "button",
    path: "",
    icon: CreateIcon,
  },
  {
    id: 2,
    name: "graph",
    type: "link",
    path: "/graph",
    icon: HomeIcon,
  },
];
