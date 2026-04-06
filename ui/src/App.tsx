import { TitleBar } from "./components/TitleBar";

export default function App() {
  return (
    <div
      className="min-h-screen w-screen flex flex-col"
      style={{ backgroundColor: "#1e1e1e" }}
    >
      <TitleBar />
      <div className="flex-1 " style={{ backgroundColor: "#1e1e1e" }}></div>
    </div>
  );
}
