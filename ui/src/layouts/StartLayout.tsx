import { Outlet } from "react-router-dom";
import { TitleBar } from "../components/TitleBar";

export const StartLayout = () => {
  return (
    <>
      <TitleBar />
      <main className="w-full flex-1 flex items-center justify-center">
        <Outlet />
      </main>
    </>
  );
};
