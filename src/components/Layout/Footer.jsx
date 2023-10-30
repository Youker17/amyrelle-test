import { Facebook, Instagram, Twitter } from "@/assets/Icon"
import { avantageBoutique } from '@/data/en/aventageBoutique'
import Image from 'next/image'
import footerlogo from "@/assets/footer-logo.svg"


const socials = [
    {
        icon: Twitter,
        link: "",
    },
    {
        icon: Facebook,
        link: ""
    },
    {
        icon: Instagram,
        link: ""
    }

]


function Footer({ footerlinks, copyright, blackFooterHeader, }) {
    return (
        <footer class="bg-white  pt-[20px] mt-10   h-[inherit] flex flex-col justify-end ">

            <section class="flex pb-10 bg-[#191A23] w-[100%]  border-b-2 border-white">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <h1 class="relative mt-5 text-center  font-bold text-white text-xl">{blackFooterHeader}</h1>
                    <div class="grid grid-cols-1 mx-auto  w-full sm:w-4/6 gap-6 px-6 mt-6 sm:px-0  md:w-full md:grid-cols-3 xl:gap-x-12">
                        {avantageBoutique.map((e, i) => (
                            <div key={i} class="px-2  ">
                                <div class="flex   flex-col justify-center items-center">
                                    <Image src={e.img} alt='' width={50} height={50} />
                                    <div class=" flex flex-col text-center text-white">
                                        <p className='mt-1'>{e.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section class="py-10 bg-gray-200 sm:pt-16 lg:pt-24">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl container">
                    <div class="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
                        {footerlinks.map((e, i) => (
                            <div key={i}>
                                <p class="text-base text-gray-500">{e.title}</p>
                                <ul class="mt-8 space-y-4">
                                    {e.links.map((item) => (
                                        <li key={i}>
                                            {item.img && <Image src={item.img} width={100} height={100} alt='' draggable="false" />}
                                            <a href={item.url} title="" class="text-base text-black transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">{item.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <hr class="mt-16 mb-10 border-gray-800" />
                    <div class="flex flex-wrap items-center justify-between">
                        <Image width={50} height={50} class="w-[150px] auto md:order-1 " src={footerlogo} alt="" />
                        <ul class="flex items-center space-x-3 md:order-3">
                            {socials.map((e, i) => (
                                <li key={i}>
                                    <a href={ e.link} title="" class="flex items-center justify-center text-black transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600">
                                        <e.icon />
                                    </a>
                                </li>
                            ))}

                        </ul>
                        <p class="w-full mt-8 text-sm text-center text-gray-800 md:mt-0 md:w-auto md:order-2">{copyright}</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer