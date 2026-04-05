import CrossIcon from "../assets/icons/CrossFilled.svg?react"
import MinimizeIcon from "../assets/icons/Minus.svg?react"
import MaximizeIcon from "../assets/icons/Maximize2.svg?react"

export const TitleBar = () => {
    return (
        <header className="w-full bg-gray-500 p-0 flex flex-row items-center justify-between">
            <div className="flex flex-row gap-1 px-2 items-center justify-center">
                <div className="w-5 h-5 bg-pink-300"></div> {/* заменить на лого */}
                <h1 className="text-base font-semibold text-pink-300">Memora</h1>
            </div>
            <div className="flex flex-row gap-0">
                <button onClick={() => window.electronAPI.minimize()} className="flex items-center justify-center p-2 bg-red-300 hover:bg-gray-500">
                    <MinimizeIcon width={24} height={24} color="#ffffff"/>
                </button>
                <button onClick={() => window.electronAPI.maximizeToggle()} className="flex items-center justify-center p-2 bg-red-300 hover:bg-gray-500">
                    <MaximizeIcon width={24} height={24} color="#ffffff"/>
                </button>
                <button onClick={() => window.electronAPI.close()} className="flex items-center justify-center p-2 bg-red-300 hover:bg-gray-500">
                    <CrossIcon width={24} height={24} color="#ffffff"/>
                </button>
            </div>
        </header>
    )
}