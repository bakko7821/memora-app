import { Outlet } from "react-router-dom";
import { MainTitleBar } from "../components/MainTitleBar";
import { NavigateMenu } from "../components/nav/NavigateMenu";

export const MainLayout = () => {
  return (
    <>
      <MainTitleBar />
      <main className="w-full flex-1 flex items-start justify-start bg-green-300">
        <NavigateMenu />
        <section className="bg-red-300 items-center justify-center flex w-full h-full flex-1 ">
          <Outlet />
        </section>
      </main>
    </>
  );
};
