import { NavComponentsArray } from "../../entities/types/navigate";
import { NavigateComponent } from "./NavigateComponent";

export const NavigateMenu = () => {
  return (
    <div className="bg-(--card) flex flex-col min-h-full justify-between border-r-2 border-(--border)">
      <nav className="flex flex-col gap-2">
        {NavComponentsArray.map((navComponent) => (
          <NavigateComponent
            key={navComponent.id}
            id={navComponent.id || 0}
            path={navComponent.path || ""}
            name={navComponent.name || ""}
            type={navComponent.type || "button"}
            icon={navComponent.icon || ""}
          />
        ))}
      </nav>
    </div>
  );
};
