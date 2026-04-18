import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useThemeVars } from "./utils/theme/useThemeVars";
import { StartLayout } from "./layouts/StartLayout";
import StartPage from "./pages/StartPage";
import { MainLayout } from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";
import HelpPage from "./pages/HelpPage";

export default function App() {
  const themeVars = useThemeVars();

  return (
    <div
      style={themeVars}
      className="min-h-screen w-screen flex flex-col bg-(--bg)"
    >
      <BrowserRouter>
        <Routes>
          <Route element={<StartLayout />}>
            <Route path="/" element={<StartPage />} />
            <Route path="/create-folder" element={<StartPage />} />
            <Route path="/help" element={<HelpPage />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/main" element={<MainPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
