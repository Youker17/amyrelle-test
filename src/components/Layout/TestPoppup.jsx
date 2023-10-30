"use client"
import { useState } from "react"



export default function TestPoppup() {
    const [open, setOpen] = useState(true)

    return (

        <div
            
            className={"fixed z-50   w-screen flex items-end   p-4   h-screen  " + (open ? "block" : "hidden")}
        >
            <div className="relative w-full max-w-2xl max-h-full">
                {/* Modal content */}
                <div className="relative bg-white  rounded-lg shadow dark:bg-gray-700">
                    {/* Modal header */}
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Important
                        </h3>
                        <button
                            onClick={e => (setOpen(false))}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="default-modal"
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-6 space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Bienvenue sur notre site web de test. Veuillez noter que ce site web est uniquement destiné à des fins de test et de démonstration. Il ne s&apos;agit pas d&apos;un site web de production final, et les produits présentés ici ne sont pas réels et ne sont pas disponibles à l&apos;achat.
                        </p>
                    </div>
                    {/* Modal footer */}
                </div>
            </div>
        </div>
    )
}
