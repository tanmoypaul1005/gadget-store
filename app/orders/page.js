import { auth } from '@/auth';
import React from 'react'
import { getOrders } from '../action/order';

const Orders = async() => {
    const session = await auth();
    const order=await getOrders(session?.user?.email)
    // console.log(JSON.parse(order?.data[0].items))
    
    return (
        <section className="relative">
            <div className="w-full mx-auto max-w-7xl lg-6">
                <div className="max-w-xl pt-6 border border-gray-200 main-box rounded-xl max-lg:mx-auto lg:max-w-full">
                    <div
                        className="flex flex-col justify-between px-6 pb-6 border-b border-gray-200 lg:flex-row lg:items-center">
                        <div className="data">
                            <p className="text-base font-semibold leading-7 text-white">Order Id: <span className="font-medium text-indigo-600">#10234987</span></p>
                            <p className="mt-4 text-base font-semibold leading-7 text-white">Order Payment : <span className="font-medium text-gray-400"> 18th march
                                2021</span></p>
                        </div>
                        <button
                            className="py-3 text-sm font-semibold leading-7 text-white transition-all duration-500 bg-indigo-600 rounded-full shadow-sm px-7 max-lg:mt-5 shadow-transparent hover:bg-indigo-700 hover:shadow-indigo-400">Track
                            Your Order</button>
                    </div>
                    <div className="w-full px-3 min-[400px]:px-6">
                        
                        {/* <div className="flex flex-col items-center w-full gap-6 py-6 border-b border-gray-200 lg:flex-row">
                            <div className="img-box max-lg:w-full">
                                <img src="https://pagedone.io/asset/uploads/1701167607.png" alt="Premium Watch image"
                                    className="aspect-square w-full lg:max-w-[140px]"/>
                            </div>
                            <div className="flex flex-row items-center w-full ">
                                <div className="grid w-full grid-cols-1 lg:grid-cols-2">
                                    <div className="flex items-center">
                                        <div className="">
                                            <h2 className="mb-3 text-xl font-semibold leading-8 text-white">
                                                Premium Quality Dust Watch</h2>
                                            <p className="mb-3 text-lg font-normal leading-8 text-gray-500 ">
                                                By: Dust Studios</p>
                                            <div className="flex items-center ">
                                                <p
                                                    className="pr-4 mr-4 text-base font-medium leading-7 text-white border-r border-gray-200">
                                                    Size: <span className="text-gray-500">100 ml</span></p>
                                                <p className="text-base font-medium leading-7 text-white ">Qty: <span
                                                    className="text-gray-500">2</span></p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="grid grid-cols-5">
                                        <div className="flex items-center col-span-5 lg:col-span-1 max-lg:mt-3">
                                            <div className="flex gap-3 lg:block">
                                                <p className="text-sm font-medium leading-7 text-white">price</p>
                                                <p className="text-sm font-medium leading-7 text-indigo-600 lg:mt-4">$100</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center col-span-5 lg:col-span-2 max-lg:mt-3 ">
                                            <div className="flex gap-3 lg:block">
                                                <p className="text-sm font-medium leading-7 text-white">Status
                                                </p>
                                                <p
                                                    className="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                                                    Ready for Delivery</p>
                                            </div>

                                        </div>
                                        <div className="flex items-center col-span-5 lg:col-span-2 max-lg:mt-3">
                                            <div className="flex gap-3 lg:block">
                                                <p className="text-sm font-medium leading-6 text-white whitespace-nowrap">
                                                    Expected Delivery Time</p>
                                                <p className="text-base font-medium leading-7 whitespace-nowrap lg:mt-3 text-emerald-500">
                                                    23rd March 2021</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="flex flex-col items-center w-full gap-6 py-6 lg:flex-row">
                            <div className="img-box max-lg:w-full">
                                <img src="https://pagedone.io/asset/uploads/1701167621.png" alt="Diamond Watch image"
                                    className="aspect-square w-full lg:max-w-[140px]"/>
                            </div>
                            <div className="flex flex-row items-center w-full ">
                                <div className="grid w-full grid-cols-1 lg:grid-cols-2">
                                    <div className="flex items-center">
                                        <div className="">
                                            <h2 className="mb-3 text-xl font-semibold leading-8 text-white ">
                                                Diamond Platinum Watch</h2>
                                            <p className="mb-3 text-lg font-normal leading-8 text-gray-500">
                                                Diamond Dials</p>
                                            <div className="flex items-center ">
                                                <p
                                                    className="pr-4 mr-4 text-base font-medium leading-7 text-white border-r border-gray-200">
                                                    Size: <span className="text-gray-500">Regular</span></p>
                                                <p className="text-base font-medium leading-7 text-white ">Qty: <span
                                                    className="text-gray-500">1</span></p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="grid grid-cols-5">
                                        <div className="flex items-center col-span-5 lg:col-span-1 max-lg:mt-3">
                                            <div className="flex gap-3 lg:block">
                                                <p className="text-sm font-medium leading-7 text-white">price</p>
                                                <p className="text-sm font-medium leading-7 text-indigo-600 lg:mt-4">$100</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center col-span-5 lg:col-span-2 max-lg:mt-3 ">
                                            <div className="flex gap-3 lg:block">
                                                <p className="text-sm font-medium leading-7 text-white">Status
                                                </p>
                                                <p
                                                    className="font-medium text-sm leading-6 py-0.5 px-3 whitespace-nowrap rounded-full lg:mt-3 bg-indigo-50 text-indigo-600">
                                                    Dispatched</p>
                                            </div>

                                        </div>
                                        <div className="flex items-center col-span-5 lg:col-span-2 max-lg:mt-3">
                                            <div className="flex gap-3 lg:block">
                                                <p className="text-sm font-medium leading-6 text-white whitespace-nowrap">
                                                    Expected Delivery Time</p>
                                                <p className="text-base font-medium leading-7 whitespace-nowrap lg:mt-3 text-emerald-500">
                                                    23rd March 2021</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div> */}

                    </div>
                    <div className="flex flex-col items-center justify-between w-full px-6 border-t border-gray-200 lg:flex-row ">
                        <div className="flex flex-col items-center border-gray-200 sm:flex-row max-lg:border-b">
                        </div>
                        <p className="py-6 text-lg font-semibold text-white">Total Price: <span className="text-indigo-600"> $200.00</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Orders