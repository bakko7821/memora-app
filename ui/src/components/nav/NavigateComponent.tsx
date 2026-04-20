import { Link } from "react-router-dom";
import type { NavComponent } from "../../utils/types/navigate";

export const NavigateComponent = ({ path, icon: Icon, type }: NavComponent) => {
  return (
    <Link
      to={path}
      className="p-2 flex items-center justify-center hover:bg-(--hover-card) transition-colors"
    >
      <Icon width={24} height={24} className="text-(--text-secondary) " />
    </Link>
  );
};
