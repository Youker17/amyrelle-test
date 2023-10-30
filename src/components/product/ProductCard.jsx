import Image from "next/image"
import Link from "next/link"
import { toast } from "../ui/use-toast"
import { useDispatch, useSelector } from "react-redux"
import { addToCard, deleteFromCard } from "@/redux/slice"
import { ToastAction } from "../ui/toast"
import { useEffect, useState } from "react"



export default function ProductCard({ product }) {
    const dispatch = useDispatch()
     const productsAddedToCart = useSelector(e => e.app.shop)
 
    const AddToCart = (e,id) => {
        dispatch(addToCard(id))
        toast({
            title: "Added to cart",
            description: product.title + " has been added to your cart",
            action: <ToastAction altText="Try again" onClick={() => dispatch(deleteFromCard(id))} >Undo</ToastAction>,
        }, "success")
        e.preventDefault()
    }


    return (
        <div>
            <Link href="/product/slug" className="flex flex-col w-80 justify-center items-start gap-2 relative">
                {
                    product.sale_price ?
                        <div className="absolute z-30 -top-2 tracking-widest left-4 bg-black text-white px-2 py-1 font-bold text-[10px] font-poppins">
                            Sale
                        </div>
                        :
                        <></>
                }
                <div className="relative group hover:shadow-black/50 shadow-black/0 shadow-2xl transition-all ease-in-out overflow-hidden">
                    <div>
                        <div className="absolute top-0 z-20 left-0 w-full h-full bg-gradient-to-t from-black/90 to-black/5 opacity-0 group-hover:opacity-50 transition-all ease-in-out duration-500"></div>
                        <div className="absolute z-20 cursor-pointer top-0 left-0 w-full h-full flex overflow-hidden flex-col justify-end items-center opacity-0 group-hover:opacity-100 transition-all px-4  ease-in-out duration-500">
                            <button
                                onClick={(e) => AddToCart(e,product.id)}
                                className="font-bold translate-y-20 group-hover:translate-y-0 text-sm bg-white  p-1 m-3 hover:bg-black hover:text-white transition-all text-black w-full     ">
                                <div className=" font-poppins group transition-all ease-in-out  border-2 border-gray-200 px-4   w-full      ">
                                    <div className=" w-full h-full text-center p-2 ">
                                        Add to cart
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                       <Image alt="" width={300} height={300} className="aspect-square object-cover group-hover:scale-110 w-80 border transition-all ease-in-out duration-200" src={product.image} />
                </div>

                <h2 className="font-light text-sm text-gray-800 font-poppins">{product.category}</h2>
                <h1 className="text-xl  font-extrabold font-poppins">{product.title}</h1>
                <div className="flex flex-row justify-center items-center gap-3">
                    <div className="flex flex-row justify-center items-center gap-1">
                        <div className="font-medium  font-poppins">
                            {
                                product.sale_price ?
                                    <span className="text-gray-500 line-through mr-2">{product.price}</span>
                                    :
                                    <></>
                            }
                            {product.price}
                        </div>
                        <div className="font-bold  font-poppins">{product.currency}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}