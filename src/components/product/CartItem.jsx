import Image from "next/image";
import { addQuantity, deleteFromCard, subtractQuantity } from "@/redux/slice";
import { useDispatch } from "react-redux";




export default function CartItem({product}) {
    const dispatch = useDispatch()

    const RemoveFromCart = (id) => {
        dispatch(deleteFromCard(id));
      };
    
      const AddQuantity = (id) => {
        dispatch(addQuantity(id));
      };
    
      const SubtractQuantity = (id) => {
        dispatch(subtractQuantity(id));
      };

    return (
        <>
            <li className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <Image
                        width={300}
                        height={300}
                        src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                        alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                                <a href="#">Throwback Hip Bag</a>
                            </h3>
                            <p className="ml-4">$90.00</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">Salmon</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty 1</p>
                        <div className="flex">
                            <button
                                type="button"
                                onClick={() => RemoveFromCart(product.id)}
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}