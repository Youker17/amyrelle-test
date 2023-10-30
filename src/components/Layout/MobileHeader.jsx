'use client'

import { motion } from 'framer-motion'
import Link from "next/link"
import { useEffect, useState } from "react"


export default function MobileHeader() {
    const [open, setOpen] = useState(false)
    useEffect(() => {
        if (open) {
            console.log("open")
        } else {
            console.log("close")
        }
    }, [open])

    
    return (
        <div className='w-full'>
            <nav className="w-full  flex  capitalize  flex-row justify-between items-center p-10 gap-5 border-b border-gray-200 bg-white  text-black h-fit ">
                <Link href="/" className="font-bold text-xl cursor-pointer font-dearjane">
                    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.58 9.31" className=" w-40 mx-auto">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <g>
                                <path class="cls-1" d="m1.92,6.09l-1.19,3.22h-.73L3.42,0h.85l3.57,9.31h-.78l-1.21-3.22H1.92Zm3.69-.67c-1.04-2.77-1.57-4.1-1.76-4.72h-.01c-.23.71-.82,2.36-1.66,4.72h3.43Z" />
                                <path class="cls-1" d="m20.21,5.03c0-1.82.01-3.57.05-4.5h-.04c-.37,1.25-2.26,5.84-3.45,8.78h-.7c-.89-2.28-2.85-7.39-3.27-8.8h-.03c.07,1.06.09,3.23.09,4.83v3.97h-.72V0h1.08c1.28,3.19,2.89,7.37,3.23,8.42h.03c.21-.68,2.08-5.32,3.38-8.42h1.06v9.31h-.72v-4.28Z" />
                                <path class="cls-1" d="m28.34,9.31v-3.5c0-.08-.03-.17-.05-.21l-3.33-5.6h.84c.93,1.58,2.55,4.34,2.95,5.03.4-.69,2.04-3.42,3.03-5.03h.8l-3.47,5.66c-.03.05-.04.11-.04.2v3.46h-.73Z" />
                                <path class="cls-1" d="m37.27,4.96v4.35h-.73V0h3.34c1.84,0,2.81.99,2.81,2.45,0,1.18-.7,1.96-1.74,2.18.96.23,1.6.85,1.6,2.43v.36c0,.65-.05,1.53.12,1.89h-.73c-.17-.4-.13-1.14-.13-1.94v-.24c0-1.53-.45-2.17-2.24-2.17h-2.29Zm0-.66h2.25c1.64,0,2.39-.61,2.39-1.84,0-1.14-.74-1.8-2.2-1.8h-2.45v3.63Z" />
                                <path class="cls-1" d="m53.08,4.74h-4.75v3.91h5.2l-.11.66h-5.81V0h5.71v.66h-4.99v3.41h4.75v.67Z" />
                                <path class="cls-1" d="m58.03,0h.72v8.65h5l-.13.66h-5.59V0Z" />
                                <path class="cls-1" d="m67.85,0h.72v8.65h5l-.13.66h-5.59V0Z" />
                                <path class="cls-1" d="m83.13,4.74h-4.75v3.91h5.2l-.11.66h-5.81V0h5.71v.66h-4.99v3.41h4.75v.67Z" />
                            </g>
                        </g>
                    </svg>
                </Link>
                <button className=' border-black' onClick={() => {
                    setOpen(!open);
                    console.log("open")
                }}>
                    <svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">

                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <motion.div initial={{
                    opacity: 0,
                    x: -100,
                }} animate={{
                    opacity: open ? 1 : 0,
                    x: open ? 0 : -100,
                }} transition={{
                    duration: 0.5,
                }}
                    className={"w-screen top-0 left-0 h-screen fixed border-white z-[999999]  bg-black " + (open ? " flex" : " hidden")}>
                    <div className=" flex flex-col   h-full   w-full">
                        <div className="flex flex-col justify-between  h-full   items-center gap-10 py-10 w-full">
                            <div className='flex flex-row justify-end p-3  border-white w-full'>
                                <button onClick={() => {
                                    setOpen(!open)
                                }}>
                                    <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </button>
                            </div>
                            <div className="font-bold text-4xl cursor-pointer text-white font-dearjane">
                                <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.58 9.31" className=" w-40 mx-auto">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <g>
                                            <path fill='white' class="cls-1" d="m1.92,6.09l-1.19,3.22h-.73L3.42,0h.85l3.57,9.31h-.78l-1.21-3.22H1.92Zm3.69-.67c-1.04-2.77-1.57-4.1-1.76-4.72h-.01c-.23.71-.82,2.36-1.66,4.72h3.43Z" />
                                            <path fill='white' class="cls-1" d="m20.21,5.03c0-1.82.01-3.57.05-4.5h-.04c-.37,1.25-2.26,5.84-3.45,8.78h-.7c-.89-2.28-2.85-7.39-3.27-8.8h-.03c.07,1.06.09,3.23.09,4.83v3.97h-.72V0h1.08c1.28,3.19,2.89,7.37,3.23,8.42h.03c.21-.68,2.08-5.32,3.38-8.42h1.06v9.31h-.72v-4.28Z" />
                                            <path fill='white' class="cls-1" d="m28.34,9.31v-3.5c0-.08-.03-.17-.05-.21l-3.33-5.6h.84c.93,1.58,2.55,4.34,2.95,5.03.4-.69,2.04-3.42,3.03-5.03h.8l-3.47,5.66c-.03.05-.04.11-.04.2v3.46h-.73Z" />
                                            <path fill='white' class="cls-1" d="m37.27,4.96v4.35h-.73V0h3.34c1.84,0,2.81.99,2.81,2.45,0,1.18-.7,1.96-1.74,2.18.96.23,1.6.85,1.6,2.43v.36c0,.65-.05,1.53.12,1.89h-.73c-.17-.4-.13-1.14-.13-1.94v-.24c0-1.53-.45-2.17-2.24-2.17h-2.29Zm0-.66h2.25c1.64,0,2.39-.61,2.39-1.84,0-1.14-.74-1.8-2.2-1.8h-2.45v3.63Z" />
                                            <path fill='white' class="cls-1" d="m53.08,4.74h-4.75v3.91h5.2l-.11.66h-5.81V0h5.71v.66h-4.99v3.41h4.75v.67Z" />
                                            <path fill='white' class="cls-1" d="m58.03,0h.72v8.65h5l-.13.66h-5.59V0Z" />
                                            <path fill='white' class="cls-1" d="m67.85,0h.72v8.65h5l-.13.66h-5.59V0Z" />
                                            <path fill='white' class="cls-1" d="m83.13,4.74h-4.75v3.91h5.2l-.11.66h-5.81V0h5.71v.66h-4.99v3.41h4.75v.67Z" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="flex flex-col text-white justify-center items-center w-full py-10 ">
                                <Link href={"/categorie/accessory-set"} onClick={e => setOpen(false)} className="  hover:bg-white cursor-pointer  w-full flex flex-row justify-center hover:text-black transition-all hover:border-b font-poppins py-3
                    border-black">Accessory set
                                </Link>
                                <Link href={"/categorie/accessory-set"} onClick={e => setOpen(false)} className=" hover:bg-white cursor-pointer  w-full flex flex-row justify-center hover:text-black transition-all hover:border-b font-poppins py-3
                    border-black">Candles & diffusers
                                </Link>
                                <Link href={"/categorie/accessory-set"} onClick={e => setOpen(false)} className=" hover:bg-white cursor-pointer  w-full flex flex-row justify-center hover:text-black transition-all hover:border-b font-poppins py-3
                    border-black">Crystal Stones
                                </Link>
                                <Link href={"/categorie/accessory-set"} onClick={e => setOpen(false)} className=" hover:bg-white cursor-pointer  w-full flex flex-row justify-center hover:text-black transition-all hover:border-b font-poppins py-3
                    border-black">Essential Oils
                                </Link>
                                <Link href={"/categorie/accessory-set"} onClick={e => setOpen(false)} className=" hover:bg-white cursor-pointer  w-full flex flex-row justify-center hover:text-black transition-all hover:border-b font-poppins py-3
                    border-black">La Maison Amyrelle
                                </Link>
                            </div>
                            <div className='flex flex-col justify-around  w-full items-center'>
                                <p className='text-gray-600 text-sm'>
                                    © 2023 Amyrelle. All rights reserved.
                                </p>
                                <div className="flex flex-row gap-2 font-poppins text-xs text-gray-300">
                                    <a href="" >
                                        contact
                                    </a>
                                    <span>|</span>
                                    <a href="" >
                                        about
                                    </a>
                                    <span>|</span>
                                    <a href="" >
                                        faq
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </nav>
        </div>
    )
}
