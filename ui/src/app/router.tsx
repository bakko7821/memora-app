import { createHashRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { StartLayout } from "../layouts/StartLayout";
import StartPage from "../pages/StartPage";
import { MainPage } from "../pages/MainPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <MainPage /> }],
  },
  {
    path: "/start",
    element: <StartLayout />,
    children: [{ index: true, element: <StartPage /> }],
  },
]);
