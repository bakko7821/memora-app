import Icon from "../assets/images/icon.png";
import { deepOceanTheme } from "../utils/variables";

export default function StartPage() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col gap-8 items-center justify-center">
        <img src={Icon} alt="" className="w-32.5" />
        <div className="gap-2 flex flex-col items-center justify-center">
          <h1
            style={{ color: deepOceanTheme.text } as React.CSSProperties}
            className="text-4xl font-bold"
          >
            Memora
          </h1>
          <p
            style={{ color: deepOceanTheme.secondary } as React.CSSProperties}
            className="text-base font-normal"
          >
            Версия 1.0.0
          </p>
        </div>
        <div
          style={
            {
              backgroundColor: deepOceanTheme.header,
              borderColor: deepOceanTheme.borders.soft,
            } as React.CSSProperties
          }
          className="rounded-3xl border-2 p-4 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-12">
              <div className="flex flex-col max-w-75">
                <p
                  className="text-base font-medium"
                  style={
                    {
                      color: deepOceanTheme.secondary,
                    } as React.CSSProperties
                  }
                >
                  Создать новое хранилище
                </p>
                <p
                  className="text-sm font-normal"
                  style={
                    {
                      color: deepOceanTheme.disabled.text,
                    } as React.CSSProperties
                  }
                >
                  Создайте новое хранилище Memora внутри указанной папки.
                </p>
              </div>
              <button
                style={
                  {
                    backgroundColor: deepOceanTheme.primary,
                    color: deepOceanTheme.text,
                  } as React.CSSProperties
                }
                className="cursor-pointer rounded-xl min-w-37.5 px-3 py-1.5 hover:bg-(--hover-primary) transition-colors"
              >
                Создать
              </button>
            </div>
            <div className="flex items-center justify-between gap-12">
              <div className="flex flex-col max-w-75">
                <p
                  className="text-base font-medium"
                  style={
                    {
                      color: deepOceanTheme.secondary,
                    } as React.CSSProperties
                  }
                >
                  Открыть папку как хранилище
                </p>
                <p
                  className="text-sm font-normal"
                  style={
                    {
                      color: deepOceanTheme.disabled.text,
                    } as React.CSSProperties
                  }
                >
                  Выберите папку, содержащую .md файлы.
                </p>
              </div>
              <button
                style={
                  {
                    backgroundColor: deepOceanTheme.card,
                    color: deepOceanTheme.text,
                  } as React.CSSProperties
                }
                className="cursor-pointer rounded-xl min-w-37.5 px-3 py-1.5 hover:bg-(--hover-card) transition-colors"
              >
                Открыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
