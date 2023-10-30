
export default function TranslationToggle() {
    return (
        <div className=" flex group flex-row items-center gap-3 font-poppins font-bold text-sm">
            English | en
            <svg class="w-3 h-3 group-hover:rotate-180 transition-all text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
            </svg>
            <div className="hidden w-36 transition-all transform opacity-0 group-hover:opacity-100 ease-in-out delay-150 group-hover:flex flex-col gap-2 py-3 absolute bg-white shadow-2xl top-10">
                <div className="flex cursor-pointer flex-row items-center gap-3 p-3 w-full hover:bg-gray-900 hover:text-white">
                    <div className="font-poppins font-bold text-sm">French | fr</div>
                </div>
                <div className="flex cursor-pointer flex-row items-center gap-3 p-3 w-full hover:bg-gray-900 hover:text-white">
                    <div className="font-poppins font-bold text-sm">Spanich | sp</div>
                </div>
                <div className="flex cursor-pointer flex-row items-center gap-3 p-3 w-full hover:bg-gray-900 hover:text-white">
                    <div className="font-poppins font-bold text-sm">Dutch | dt</div>
                </div>
                <div className="flex cursor-pointer flex-row items-center gap-3 p-3 w-full hover:bg-gray-900 hover:text-white">
                    <div className="font-poppins font-bold text-sm">Italian | it</div>
                </div>
            </div>
        </div>
    )
}
