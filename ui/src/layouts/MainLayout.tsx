import { Outlet } from "react-router-dom";
import { MainTitleBar } from "../components/MainTitleBar";

export const MainLayout = () => {
  return (
    <>
      <MainTitleBar />
      <main className="w-full flex-1 flex items-center justify-center">
        <Outlet />
      </main>
    </>
  );
};
