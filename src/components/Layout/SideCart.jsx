"use client"
import bag from "@/assets/shopping-bag.png";
import { addToCard, deleteAll } from "@/redux/slice";
import { AnimatePresence, motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import CartItem from "../product/CartItem";

export default function SideCart({
    title = "Shopping cart",

}) {
    const [open, setOpen] = useState(false)
    const productsAddedToCart = useSelector(e => e.app.shop)
    const dispatch = useDispatch()


    useEffect(() => {
        const shopProductsFromStorage = localStorage.getItem('shop');

        if (shopProductsFromStorage) {
            const parsedShopProducts = JSON.parse(
                shopProductsFromStorage
            );
            if (parsedShopProducts.length > 0) {
                dispatch(addToCard(parsedShopProducts));
            }
        }
    }, [dispatch]);


    const DeleteAll = () => {
        dispatch(deleteAll())
    }

    return (
        <>
            <button onClick={e => setOpen(!open)} className="bg-white rounded-xl w-14 h-14 shadow-2xl fixed z-50 bottom-8 flex justify-center items-center border-gray-100 border-2 right-8">
                <div className="w-full h-full flex justify-center items-center relative">
                    <div className="absolute -top-3 -left-3 w-6 h-6 bg-black rounded-full text-white text-xs flex justify-center items-center font-bold">
                        {productsAddedToCart.length}
                    </div>
                    <Image width={300} height={300} src={bag.src} className="w-5" alt="" />
                </div>
            </button>
            <AnimatePresence>
                {
                    open &&
                    <motion.div initial={{
                        right: -100,
                        // opacity: 0,
                    }} animate={{
                        right: open ? 0 : -100,
                        // opacity: open ? 1 : 0,
                    }}
                        exit={{
                            right: -100,
                        }} className="min-w-1/3 z-50">

                        <div className="relative z-50" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            <div className="fixed inset-0 overflow-hidden">
                                <div className="absolute inset-0 overflow-hidden">
                                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                        <div className="pointer-events-auto w-screen max-w-md">
                                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                                    <div className="flex items-start justify-between">
                                                        <h2
                                                            className="text-lg font-medium text-gray-900"
                                                            id="slide-over-title"
                                                        >
                                                            Shopping cart
                                                        </h2>
                                                        <div className="ml-3 flex h-7 items-center">
                                                            <button
                                                                onClick={e => { setOpen(false); console.log("close") }}
                                                                type="button"
                                                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                            >
                                                                <span className="absolute -inset-0.5" />
                                                                <span className="sr-only">Close panel</span>
                                                                <svg
                                                                    className="h-6 w-6"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth="1.5"
                                                                    stroke="currentColor"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M6 18L18 6M6 6l12 12"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="mt-8">
                                                        <div className="flow-root">
                                                            {productsAddedToCart.length > 0 ?
                                                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                                    {
                                                                        productsAddedToCart.map((product, i) => (
                                                                            <CartItem key={i} product={product} />
                                                                        ))
                                                                    }
                                                                </ul> : <div className=" flex justify-center items-center h-[50vh] font-medium">
                                                                    <p>Nothing in the cart</p>
                                                                </div>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <p>Subtotal</p>
                                                        <p>$262.00</p>
                                                    </div>
                                                    <p className="mt-0.5 text-sm text-gray-500">
                                                        Shipping and taxes calculated at checkout.
                                                    </p>
                                                    <div className="mt-6 flex-col flex gap-3">
                                                        <Link
                                                            href="/checkout"
                                                            className="flex items-center justify-center  border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900"
                                                        >
                                                            Checkout
                                                        </Link>
                                                        <button
                                                            onClick={() => DeleteAll()}
                                                            className={twMerge("flex items-center justify-center    px-6 py-3 text-base font-medium hover:text-white shadow-sm bg-white border-2 border-black hover:bg-gray-900", productsAddedToCart.length == 0 ? "bg-gray-300 border-white text-black pointer-events-none" : null)}
                                                        >
                                                            Clear Cart
                                                        </button>

                                                    </div>
                                                    {/* <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                        <p>
                                                            or
                                                            <button
                                                                type="button"
                                                                className="font-medium text-indigo-600 ml-2 hover:text-indigo-500"
                                                            >
                                                                Continue Shopping
                                                                <span aria-hidden="true"> →</span>
                                                            </button>
                                                        </p>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div >
                }
            </AnimatePresence >

        </>
    )


}