import { TitleBar } from "./components/TitleBar";
import { deepOceanTheme } from "./utils/variables";

export default function App() {
  return (
    <div
      className="min-h-screen w-screen flex flex-col"
      style={{ backgroundColor: deepOceanTheme.background }}
    >
      <TitleBar />
      <div
        className="flex-1 "
        style={{ backgroundColor: deepOceanTheme.background }}
      ></div>
    </div>
  );
}
