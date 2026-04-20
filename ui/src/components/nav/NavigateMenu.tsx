import { NavComponentsArray } from "../../utils/types/navigate";
import { NavigateComponent } from "./NavigateComponent";

export const NavigateMenu = () => {
  return (
    <nav className="bg-(--card) p-4 flex flex-col items-center justify-between h-full">
      {NavComponentsArray.map((navComponent) => (
        <NavigateComponent
          path={navComponent.path || ""}
          name={navComponent.name || ""}
          type={navComponent.type || "button"}
        />
      ))}
    </nav>
  );
};
