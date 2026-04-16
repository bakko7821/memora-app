import { TitleBar } from "./components/TitleBar";
import StartPage from "./pages/StartPage";
import { deepOceanTheme } from "./utils/variables";

export default function App() {
  return (
    <div
      className="min-h-screen w-screen flex flex-col"
      style={{ backgroundColor: deepOceanTheme.background }}
    >
      <TitleBar />
      <div
        className="w-full flex-1 items-center justify-center flex "
        style={{ backgroundColor: deepOceanTheme.background }}
      >
        <StartPage />
      </div>
    </div>
  );
}
