import { TitleBar } from "./components/TitleBar";

export default function App() {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-zinc-950">
      <TitleBar />
      <div className="flex-1 bg-white"></div>
    </div>
  );
}