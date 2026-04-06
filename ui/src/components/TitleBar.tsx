import CrossIcon from "../assets/icons/CrossFilled.svg?react";
import MinimizeIcon from "../assets/icons/Minus.svg?react";
import MaximizeIcon from "../assets/icons/Maximize2.svg?react";
import RestoreIcon from "../assets/icons/WindowRestoreLine.svg?react";
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
      className="w-full bg-gray-500 p-0 flex flex-row items-center justify-between"
      style={{ WebkitAppRegion: "drag" } as React.CSSProperties}
    >
      <div className="flex flex-row gap-1 px-2 items-center justify-center">
        <div className="w-5 h-5 bg-pink-300"></div> {/* заменить на лого */}
        <h1 className="text-base font-semibold text-pink-300">Memora</h1>
      </div>
      <div
        className="flex flex-row gap-0"
        style={{ WebkitAppRegion: "no-drag" } as React.CSSProperties}
      >
        <button
          onClick={() => window.electronAPI.minimize()}
          className="flex items-center justify-center p-2 bg-red-300 hover:bg-gray-500"
        >
          <MinimizeIcon width={24} height={24} color="#ffffff" />
        </button>
        <button
          onClick={handleMaximizeToggle}
          className="w-10 h-10 flex items-center justify-center hover:bg-white/10"
        >
          <WindowIcon className="w-4 h-4" />
        </button>
        <button
          onClick={() => window.electronAPI.close()}
          className="flex items-center justify-center p-2 bg-red-300 hover:bg-gray-500"
        >
          <CrossIcon width={24} height={24} color="#ffffff" />
        </button>
      </div>
    </header>
  );
};
