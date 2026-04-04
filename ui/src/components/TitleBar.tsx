export const TitleBar = () => {
    return (
        <header className="w-full bg-gray-500 p-0 flex flex-row items-center justify-between">
            <div className="flex flex-row gap-1 px-2 items-center justify-center">
                <div className="w-5 h-5 bg-pink-300"></div> {/* заменить на лого */}
                <h1 className="text-base font-semibold text-pink-300">Memora</h1>
            </div>
            <div className="flex flex-row gap-0">
                <button className="w-8 h-8 bg-amber-50"></button>
                <button className="w-8 h-8 bg-red-300"></button>
                <button className="w-8 h-8 bg-green-300"></button>
            </div>
        </header>
    )
}