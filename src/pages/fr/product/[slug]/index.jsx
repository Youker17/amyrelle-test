"use client"
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import Footer from '@/components/Layout/Footer';
import { footerData } from '@/data/fr/footerData';
import Link from 'next/link';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import Header from '@/components/Layout/Header';
import { headerData, languages, subHeader } from '@/data/fr/headerData';


export default function SingleProduct({ }) {
    const [imageIndex, setImageIndex] = useState(0)
    const swiperRef = useRef(null);
    return (
        <>
         <Header
        languages={languages}
        headerData={headerData}
        subHeader={subHeader}
        urlPrefix="fr"
      />
            <section className="py-10 mt-20 font-poppins ">
                <div className="max-w-6xl px-4 mx-auto">
                    <div className="flex flex-wrap mb-24 -mx-4">
                        <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                            <div className="sticky top-40 overflow-hidden lg:border-r ">
                                <div className="relative mb-6 lg:mb-10 lg:h-96">
                                    <Swiper
                                        ref={swiperRef}
                                        navigation={false}
                                        className="h-full px-40"
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        modules={[Navigation]}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        onSlideChange={
                                            (swiper) => { console.log(swiper.activeIndex); setImageIndex(swiper.activeIndex) }
                                        }

                                    >
                                        <SwiperSlide className='lg:px-20 '>
                                            <img
                                                className="object-cover h-[60vh]  object-center w-full lg:h-full "
                                                src="https://i0.wp.com/armatagecandlecompany.com/wp-content/uploads/2020/09/detail-shot-product-photography.png?fit=1080%2C1080&ssl=1"
                                                alt=""
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide className='lg:px-20 '>
                                            <img
                                                className="object-cover h-[60vh]  object-center w-full lg:h-full "
                                                src="https://studiocotton.co.uk/wp-content/uploads/2023/01/clarity-candles-before-after-blog-post-studio-cotton-bristol.jpg"
                                                alt=""
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide className='lg:px-20 '>
                                            <img
                                                className="object-cover h-[60vh]  object-center w-full lg:h-full "
                                                src="https://wildfloradesign.com/cdn/shop/products/10.23.20_WF_SZ_gif-1_3fe42704-5e50-41b0-b06a-63fd7d0b7723_1024x1024.jpg?v=1697845767"
                                                alt=""
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide className='lg:px-20 '>
                                            <img
                                                className="object-cover h-[60vh]  object-center w-full lg:h-full "
                                                src="https://studiocotton.co.uk/wp-content/uploads/2023/01/clarity-candles-before-after-product-photography-studio-cotton-bristol-1-684x1024.jpg"
                                                alt=""
                                            />
                                        </SwiperSlide>
                                    </Swiper>

                                </div>
                                <div className="flex-wrap hidden -mx-2 md:flex">
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <button
                                            onClick={e => {
                                                swiperRef.current.swiper.slideTo(0)
                                            }}
                                            className={`block border ${imageIndex === 0 ? "border-black" : "border-gray-200"} hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-300`}
                                            href="#"
                                        >
                                            <img
                                                className="object-cover w-full aspect-square lg:h-28"
                                                src="https://i0.wp.com/armatagecandlecompany.com/wp-content/uploads/2020/09/detail-shot-product-photography.png?fit=1080%2C1080&ssl=1"
                                                alt=""
                                            />
                                        </button>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <button
                                            onClick={e => {
                                                swiperRef.current.swiper.slideTo(1)
                                            }}
                                            className={`block border ${imageIndex === 1 ? "border-black" : "border-gray-200"} hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-300`}
                                            href="#"
                                        >
                                            <img
                                                className="object-cover w-full aspect-square lg:h-28"
                                                src="https://studiocotton.co.uk/wp-content/uploads/2023/01/clarity-candles-before-after-blog-post-studio-cotton-bristol.jpg"
                                                alt=""
                                            />
                                        </button>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <button
                                            onClick={e => {
                                                swiperRef.current.swiper.slideTo(2)
                                            }}
                                            className={`block border ${imageIndex === 2 ? "border-black" : "border-gray-200"} hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-300`}
                                            href="#"
                                        >
                                            <img
                                                className="object-cover w-full aspect-square lg:h-28"
                                                src="https://wildfloradesign.com/cdn/shop/products/10.23.20_WF_SZ_gif-1_3fe42704-5e50-41b0-b06a-63fd7d0b7723_1024x1024.jpg?v=1697845767"
                                                alt=""
                                            />
                                        </button>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <button
                                            onClick={e => {
                                                swiperRef.current.swiper.slideTo(3)
                                            }}
                                            className={`block border ${imageIndex === 3 ? "border-black" : "border-gray-200"} hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-300`}
                                            href="#"
                                        >
                                            <img
                                                className="object-cover w-full aspect-square lg:h-28"
                                                src="https://studiocotton.co.uk/wp-content/uploads/2023/01/clarity-candles-before-after-product-photography-studio-cotton-bristol-1-684x1024.jpg"
                                                alt=""
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full  px-4 md:w-1/2">
                            <div className="lg:pl-20">
                                <div className="mb-6 ">
                                    <span className="px-2.5 py-0.5 text-xs font-extrabold  bg-black  text-gray-200">
                                        Sale
                                    </span>
                                    <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                        Clarity Candles
                                    </h2>
                                    <div className="flex flex-wrap items-center mb-6">
                                        <Link href={"/categorie/accessory-set"} className='font-bold text-sm mr-3'>
                                            Accessory Set
                                        </Link>
                                        <Link href={"/categorie/accessory-set"} className='font-light text-xs mr-3 hover:underline'>
                                            view colletion
                                        </Link>
                                    </div>
                                    <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                                        <span>7.00€</span>
                                        <span className="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400">
                                            15.00€
                                        </span>
                                    </p>
                                </div>
                                <div className="mb-6">
                                    THIS GIFT SET CONTAINS: <br />
                                    Fortifying Lotion – 150 mL<br />
                                    Advanced Youth Watery Oil – 30 mL<br />
                                    Double R Renew & Repair Advanced Serum – 50 mL<br />
                                </div>
                                <div className="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                                    <ul className='flex flex-col gap-3'>
                                        <li className='flex flex-rox gap-3 items-center text-xs font-extrabold'><svg class="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="M19.9 6.58c0-.009 0-.019-.006-.027l-2-4A1 1 0 0 0 17 2h-4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1h.3c-.03.165-.047.332-.051.5a3.25 3.25 0 1 0 6.5 0A3.173 3.173 0 0 0 7.7 12h4.6c-.03.165-.047.332-.051.5a3.25 3.25 0 1 0 6.5 0 3.177 3.177 0 0 0-.049-.5h.3a1 1 0 0 0 1-1V7a.99.99 0 0 0-.1-.42ZM16.382 4l1 2H13V4h3.382ZM4.5 13.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm11 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
                                        </svg> Fast Shipping.</li>
                                        <li className='flex flex-rox gap-3 items-center text-xs font-extrabold'><svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 16c-3.047 0-5.5-2.735-5.5-5a.5.5 0 0 1 1 0 11.7 11.7 0 0 0 4.5.583c2.548 0 4.221-.371 4.5-.65a.515.515 0 0 1 .026-.106.457.457 0 0 1 .481-.372.531.531 0 0 1 .493.545c0 2.265-2.453 5-5.5 5Z" />
                                        </svg>Millions Of Happy Customers.</li>
                                        <li className='flex flex-rox gap-3 items-center text-xs font-extrabold'><svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                        </svg> Verity of Products.</li>
                                    </ul>
                                </div>
                                <div className="mb-6 " />
                                <div className="flex flex-wrap items-center mb-6">
                                    <div className="mb-4 mr-4 lg:mb-0">
                                        <div className="w-28">
                                            <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                                                <button className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                                                    <span className="m-auto text-2xl font-thin">-</span>
                                                </button>
                                                <input
                                                    type="number"
                                                    className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                                    placeholder={1}
                                                />
                                                <button className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                                                    <span className="m-auto text-2xl font-thin">+</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="w-full px-4 py-3 text-center font-poppins   border hover:bg-gray-900 text-gray-800 hover:text-gray-200 border-gray-700 bg-white   lg:w-full mt-7 "
                                    >
                                        Add to cart
                                    </a>
                                </div>
                                <div className="flex gap-4 mb-6">
                                    <a
                                        href="#"
                                        className="w-full px-4 py-3 text-center text-gray-100 bg-gray-800 border border-transparent dark:border-gray-700   dark:text-gray-400  hover:bg-gray-900 "
                                    >
                                        Buy now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer
                blackFooterHeader="Avantages de Notre Boutique en Ligne"
                footerlinks={footerData}
                copyright={`© Droits d'auteur ${new Date().getFullYear()}, Tous droits réservés par Amyrelle et ceci`}
                urlPrefix="fr"
            />
        </>

    )
}