import CrossIcon from "../assets/icons/CrossFilled.svg?react";
import MinimizeIcon from "../assets/icons/Minus.svg?react";
import MaximizeIcon from "../assets/icons/Maximize2.svg?react";
import RestoreIcon from "../assets/icons/WindowRestoreLine.svg?react";
// import LogoImage from "../assets/images/icon.png";
import { useEffect, useState } from "react";

export const TitleBar = () => {
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    const init = async () => {
      const currentState = await window.electronAPI.isMaximized();
      setIsMaximized(currentState);

      unsubscribe = window.electronAPI.onMaximizedChanged((value) => {
        setIsMaximized(value);
      });
    };

    init();

    return () => {
      unsubscribe?.();
    };
  }, []);

  const handleMaximizeToggle = async () => {
    await window.electronAPI.maximizeToggle();
  };

  const WindowIcon = isMaximized ? RestoreIcon : MaximizeIcon;

  return (
    <header
      className="w-full p-0 flex flex-row items-center justify-between"
      style={
        {
          WebkitAppRegion: "drag",
          backgroundColor: "#1c1c1c",
        } as React.CSSProperties
      }
    >
      <div className="flex flex-row items-center justify-center">
        <h1 className="px-2 text-xl font-semibold text-pink-300">Memora</h1>
      </div>
      <div
        className="flex flex-row gap-0"
        style={{ WebkitAppRegion: "no-drag" } as React.CSSProperties}
      >
        <button
          onClick={() => window.electronAPI.minimize()}
          className="flex items-center justify-center p-2 bg-transparent hover:bg-white/10"
        >
          <MinimizeIcon width={24} height={24} color="#ffffff" />
        </button>
        <button
          onClick={handleMaximizeToggle}
          className="flex items-center justify-center p-2 bg-transparent hover:bg-white/10"
        >
          <WindowIcon width={24} height={24} color="#ffffff" />
        </button>
        <button
          onClick={() => window.electronAPI.close()}
          className="flex items-center justify-center p-2 bg-transparent hover:bg-red-400"
        >
          <CrossIcon width={24} height={24} color="#ffffff" />
        </button>
      </div>
    </header>
  );
};
