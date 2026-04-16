import { TitleBar } from "./components/TitleBar";
import StartPage from "./pages/StartPage";
import { useThemeVars } from "./utils/theme/useThemeVars";

export default function App() {
  return (
    <div
      style={useThemeVars()}
      className="min-h-screen w-screen flex flex-col bg-(--bg)"
    >
      <TitleBar />
      <div className="w-full flex-1 items-center justify-center flex ">
        <StartPage />
      </div>
    </div>
  );
}
