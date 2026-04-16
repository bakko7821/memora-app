import CrossIcon from "../assets/icons/cross-svgrepo-com.svg?react";
import MinimizeIcon from "../assets/icons/minus-svgrepo-com.svg?react";
import MaximizeIcon from "../assets/icons/Maximize2.svg?react";
import RestoreIcon from "../assets/icons/restore-16-regular-svgrepo-com.svg?react";
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
      className="w-full p-0 flex flex-row items-center justify-between bg-(--header)"
      style={
        {
          WebkitAppRegion: "drag",
        } as React.CSSProperties
      }
    >
      <div className="flex flex-row items-center justify-center">
        <p className="pl-3 text-base font-normal text-(--text)">Memora</p>
      </div>
      <div
        className="flex flex-row gap-0"
        style={{ WebkitAppRegion: "no-drag" } as React.CSSProperties}
      >
        <button
          onClick={() => window.electronAPI.minimize()}
          className="flex items-center justify-center px-2 py-1 bg-transparent hover:bg-(--hover-card) transition-colors"
        >
          <MinimizeIcon width={24} height={24} color="#ffffff" />
        </button>
        <button
          onClick={handleMaximizeToggle}
          className="flex items-center justify-center px-2 py-1 bg-transparent hover:bg-(--hover-card) transition-colors"
        >
          <WindowIcon width={24} height={24} color="#ffffff" />
        </button>
        <button
          onClick={() => window.electronAPI.close()}
          className="flex items-center justify-center px-2 py-1 bg-transparent hover:bg-red-400 transition-colors"
        >
          <CrossIcon width={24} height={24} color="#ffffff" />
        </button>
      </div>
    </header>
  );
};
