import { DesctopLogo } from "@/assets/Icon";
import Link from "next/link";



export default function Checkout() {
    return (
        <div className=" container mx-auto">
            <>
                <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
                    <Link href="/" className="text-2xl font-bold text-gray-800">
                        <DesctopLogo />
                    </Link>
                    <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
                        <div className="relative">
                            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                    <a
                                        className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                                        href="#"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </a>
                                    <span className="font-semibold text-gray-900">Shop</span>
                                </li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                    <a
                                        className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                                        href="#"
                                    >
                                        2
                                    </a>
                                    <span className="font-semibold text-gray-900">Shipping Details</span>
                                </li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                    <a
                                        className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                                        href="#"
                                    >
                                        3
                                    </a>
                                    <span className="font-semibold text-gray-500">Payment</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                    <div className="px-4 pt-8">
                        <p className="text-xl font-medium">Order Summary</p>
                        <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                            <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                                <img
                                    className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                                    src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    alt=""
                                />
                                <div className="flex w-full flex-col px-4 py-4">
                                    <span className="font-semibold">
                                        Nike Air Max Pro 8888 - Super Light
                                    </span>
                                    <span className="float-right text-gray-400">42EU - 8.5US</span>
                                    <p className="text-lg font-bold">$138.99</p>
                                </div>
                            </div>
                            <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                                <img
                                    className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                                    src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    alt=""
                                />
                                <div className="flex w-full flex-col px-4 py-4">
                                    <span className="font-semibold">
                                        Nike Air Max Pro 8888 - Super Light
                                    </span>
                                    <span className="float-right text-gray-400">42EU - 8.5US</span>
                                    <p className="mt-auto text-lg font-bold">$238.99</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                        <p className="text-xl font-medium">Shipping Information</p>
                        <p className="text-gray-400">
                            Complete your order by providing your Shipping details.
                        </p>
                        <div className="">
                            <div className="flex flex-row gap-1 w-full">

                                <div className="w-full">
                                    <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
                                        First Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="email"
                                            name="email"
                                            className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                            placeholder="First Name"
                                        />
                                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                            <svg class="w-3 h-3 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full">
                                    <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
                                        Last Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="email"
                                            name="email"
                                            className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                            placeholder="Last Name"
                                        />
                                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                            <svg class="w-3 h-3 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
                                                <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* email input */}
                            <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="your.email@gmail.com"
                                />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </div>
                            </div>
                            {/* end email input */}




                            {/* phone number */}
                            <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
                                Phone
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="number"
                                />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg class="w-3 h-3 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z" />
                                    </svg>
                                </div>
                            </div>
                            {/* end phone number */}


                            {/* billing information */}
                            <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">
                                Country
                            </label>
                            <div className="flex flex-col sm:flex-row gap-1">
                                <div className="relative flex-shrink-0 sm:w-7/12">
                                    <input
                                        type="text"
                                        id="billing-address"
                                        name="billing-address"
                                        className="w-full rounded-md border border-gray-200 px-4 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                        placeholder="Country"
                                    />

                                </div>
                                <input
                                    type="text"
                                    name="City"
                                    className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-3/12 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="City"
                                />
                                <input
                                    type="text"
                                    name="zip"
                                    className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="ZIP"
                                />
                            </div>

                            <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
                                Address Line
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Address"
                                />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg class="w-3 h-3 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9" />
                                    </svg>
                                </div>
                            </div>
                            <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
                                Address Line 2 <span className="text-xs text-gray-600">Optional</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="address-2"
                                    name="address-2"
                                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Address"
                                />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg class="w-3 h-3 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9" />
                                    </svg>
                                </div>
                            </div>






                            {/* Total */}
                            <div className="mt-6 border-t border-b py-2">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">Subtotal</p>
                                    <p className="font-semibold text-gray-900">399.00$</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">Shipping</p>
                                    <p className="font-semibold text-gray-900">8.00$</p>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Total</p>
                                <p className="text-2xl font-semibold text-gray-900">408.00$</p>
                            </div>
                        </div>
                        <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
                            Place Order
                        </button>
                    </div>
                </div>
            </>

        </div>
    );
}