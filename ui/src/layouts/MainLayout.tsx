import { Outlet } from "react-router-dom";
import { MainTitleBar } from "../components/MainTitleBar";
import { NavigateMenu } from "../components/nav/NavigateMenu";
import { FolderNavigateMenu } from "../components/nav/FolderNavigateMenu";

export const MainLayout = () => {
  return (
    <>
      <MainTitleBar />
      <main className="w-full flex flex-1 items-start justify-start h-full">
        <div className="h-full flex gap-0">
          <NavigateMenu />
          <FolderNavigateMenu />
        </div>
        <section className="flex w-full h-full flex-1">
          <Outlet />
        </section>
      </main>
    </>
  );
};
