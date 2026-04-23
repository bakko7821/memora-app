import CrossIcon from "../../assets/icons/cross-svgrepo-com.svg?react";
import MinimizeIcon from "../../assets/icons/minus-svgrepo-com.svg?react";
import MaximizeIcon from "../../assets/icons/Maximize2.svg?react";
import RestoreIcon from "../../assets/icons/restore-16-regular-svgrepo-com.svg?react";
import { useEffect, useState } from "react";
import { FilesHistory } from "../FilesHistory";

export const MainTitleBar = () => {
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
      className="w-full p-0 flex flex-row items-center justify-start bg-(--header)"
      // style={
      //   {
      //     WebkitAppRegion: "drag",
      //   } as React.CSSProperties
      // }
    >
      <div className="bg-green-300 h-full w-(--titlebar-width)"></div>
      <FilesHistory />
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
