import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import { useThemeVars } from "./utils/theme/useThemeVars";

export default function App() {
  return (
    <div
      style={useThemeVars()}
      className="min-h-screen w-screen flex flex-col bg-(--bg)"
    >
      <RouterProvider router={router} />
    </div>
  );
}
