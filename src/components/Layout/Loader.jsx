"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Loader({ }) {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log("loading")
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }
        , [])

    return (
        <AnimatePresence>
            <motion.div exit={{ opacity: 0 }} initial={{ opacity: 1 }} className={`w-full fixed h-screen top-0 left-0 bg-white z-[999] ${loading ? 'flex' : 'hidden'} justify-center items-center`}>
                <motion.svg className={"w-40"} id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1006.21 691.67">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <motion.path initial={{ pathLength: 0, fillOpacity: 0.3 }} animate={{ pathLength: 1, fillOpacity: 1 }} transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }} stroke={"black"} fill={"none"} strokeWidth={10} class="cls-1" d="m972.18,296.31c-33.37-40.74-84.9-59.74-134.37-49.47-10.61,2.22-20.71,5.65-29.96,10.27-2.23,1.03-4.62,2.4-6.85,3.59l-28.76-71.55-65.9-171.01c-4.28-10.96-14.55-17.97-26.19-18.15h-.51c-2.23,0-4.62.17-6.68.69-9.07,2.23-16.43,8.56-19.86,17.46l-57.95,150.17c-.39,1.01-1.82,1.01-2.21,0l-57.09-147.61c-4.8-12.5-16.61-20.71-29.96-20.71h-.18c-13.52,0-25.33,8.05-30.12,20.71l-53.5,138.19c-.39,1.01-1.82,1.01-2.21,0l-51.45-133.23c-5.14-13.01-16.09-22.25-29.44-24.99-2.4-.34-4.79-.69-7.19-.69h-.86c-16.77,0-31.67,10.1-37.66,25.68l-89.35,231.43-6.84,17.63c-17.98-1.37-34.41-.34-49.47,2.23-29.79,5.14-54.09,16.95-73.09,30.13-7.36,4.96-13.69,10.27-19.51,15.41-23.97,21.23-41.08,49.64-48.96,79.94-.51,1.88-1.03,3.59-1.36,5.48-7.02,31.67-5.65,58.71.68,81.31,11.81,42.62,40.4,70.18,61.11,85.07,3.94,2.91,8.22,4.79,12.67,5.99,2.91.68,5.99,1.2,9.08,1.2,3.59,0,7.19-.51,10.78-1.71,6.5-1.88,12.32-5.48,16.77-10.27,3.08-3.42,5.65-7.53,7.36-11.98l.69-1.88,94.12-243.65c.52-.29.85-.48,1.37-.77,12.87,2.59,26.27,6.63,39.91,12.13,19.68,7.53,39.54,15.92,60.6,25.85,7.21,3.44,14.59,6.89,22.26,10.63.56.27.84.95.6,1.53l-35.53,88.33-35.95,90.04-51.87,129.41c-3.42,8.39.68,17.97,9.08,21.4,8.22,3.25,17.8-.68,21.22-8.9,0,0,.18-.17.18-.34l52.38-130.61,8.73-21.74c.17-.34.17-.69.34-1.03l97.06-242.04,12.67-32.69,71.81,185.72c5.23,13.53,24.33,13.65,29.73.18l71.18-177.52,9.76,24.31,158.68,395.76c3.59,8.22,13.01,12.15,21.23,8.9,8.56-3.42,12.67-13.01,9.24-21.4l-50.16-125.15c-.46-1.14.8-2.06,1.76-1.3,14.83,11.81,36.62,19.29,51.83,21.35,9.92,1.54,19.85,2.22,29.44,2.22,21.74,0,42.62-3.59,62.48-10.61,3.94-1.37,8.05-2.91,11.99-4.62v-.17h.17l9.93-4.28v-.34c2.57-1.37,5.31-2.74,7.87-4.28,11.81-6.68,22.94-14.72,33.39-23.96,4.79-4.45,9.41-9.07,13.69-13.87,17.98-20.54,30.81-45.53,36.64-71.72,2.22-10.44,3.76-20.54,4.28-29.96,2.91-49.13-15.75-84.22-33.73-106.13Zm-811.04,71.38l-55.29,143.1-11.98,31.15v.17c-1.89,4.79-7.71,6.33-11.82,3.25-9.24-6.85-24.13-20.54-35.09-41.25-11.47-21.57-18.49-51.01-10.1-89.01.69-3.25,1.37-6.33,2.4-9.41,6.68-22.25,19.86-42.79,37.66-58.71,21.23-19,55.63-39.88,104.08-39.88h3.59l-23.46,60.6Zm238.79-151.49l-22.25,57.69-22.42,55.98c-7.36-3.6-14.55-7.02-21.4-10.27-21.91-10.27-42.45-19.17-62.65-26.88-13.35-5.26-26.45-9.56-39.33-12.34-.4-.75-.54-1.01-.93-1.75l92.98-241.13c1.71-4.11,4.97-4.62,7.02-4.62.86,0,2.23.17,3.43.86,1.36.51,2.57,1.71,3.42,3.77l57.52,149.1,8.04,20.88-3.42,8.73Zm109.13,168.04c-.4,1-1.82.99-2.2-.01l-68.07-176.24-.17-.51,67.1-173.74.18.51,67.1,173.75,3.25,8.73-67.18,167.53Zm361.67,142.52c-11.88,3.52-23.6,5.46-35.16,6.28-56.83,3.25-109.04-30.98-130.95-83.36-.34-.51-.51-1.2-.86-1.88l-80.96-201.99-11.13-28.93.17-.68,66.68-172.77c.39-1.01,1.82-1.01,2.21,0l60.86,157.7,32.35,80.62,12.32,30.81,85.26,212.55c.26.66-.12,1.44-.8,1.64Zm101.96-121.07c-.69,6.5-1.72,13.01-3.26,19.51-5.65,25.85-19.85,50.15-40.22,68.13-7.19,6.68-15.07,12.5-23.28,17.46-1.2.86-2.57,1.54-3.77,2.23l-88.29-220.39c-.22-.54-.02-1.18.47-1.49,8.87-5.7,19.02-9.79,30.13-12.12,6.51-1.37,13.18-2.05,19.69-2.05,26.7,0,52.9,10.61,73.1,30.13,3.42,3.08,6.5,6.5,9.41,10.1,20.54,25.16,29.27,54.78,26.02,88.5Z" />
                    </g>
                </motion.svg>
                {/* <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div> */}
            </motion.div>
        </AnimatePresence>
    )
}