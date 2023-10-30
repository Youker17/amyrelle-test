import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

function SectionContent({ tag, title, description, textStyle,buttonLink,buttonStyle,buttonText }) {
  return (
    <div className={twMerge("z-10  ", textStyle)}>
      <span className={twMerge(' border-y-2  text-xs py-[2px]', textStyle == "text-right text-white"   ? " border-white " : " border-black" )}>{tag}</span>
      <h1 className='leading-6 text-xl pt-4 pb-1'>{title}</h1>
      <p className='font-bold leading-6 text-xs '>{description}</p>
      <Link className='cursor-pointer' href={buttonLink}> <button className={twMerge('py-2.5 px-6 cursor-pointer text-xs z-50  mt-5 ',buttonStyle)}>{buttonText}</button></Link>
    </div>
  )
}

export default SectionContent

