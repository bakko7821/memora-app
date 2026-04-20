import { Outlet } from "react-router-dom";
import { MainTitleBar } from "../components/MainTitleBar";
import { NavigateMenu } from "../components/nav/NavigateMenu";

export const MainLayout = () => {
  return (
    <>
      <MainTitleBar />
      <main className="w-full flex flex-1 items-start justify-start bg-green-300 h-full">
        <NavigateMenu />
        <div className="p-4 min-w-75"></div>
        <section className="bg-red-300 items-center justify-center flex w-full h-full flex-1 ">
          <Outlet />
        </section>
      </main>
    </>
  );
};
