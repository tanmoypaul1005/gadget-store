import { auth } from "@/auth";
import React from "react";
import { getOrders } from "../action/order";
import Image from "next/image";
import { iNoOrder } from "@/util/imageImports";
import { addDays, formatDate } from "@/util/utilityFunction";

const Orders = async () => {
  const session = await auth();
  const order = await getOrders(session?.user?.email);

  return (
    <>
      {order?.data?.length > 0 ? (
        <div className="space-y-3 common-topGap">
          {order?.data?.map((item, index) => (
            <section key={index} className="relative">
              <div className="w-full common-class">
                <div className="max-w-xl pt-6 border border-gray-200 main-box rounded-xl max-lg:mx-auto lg:max-w-full">
                  <div className="flex flex-col justify-between px-6 pb-6 border-b border-gray-200 lg:flex-row lg:items-center">
                    <div className="data">
                      <p className="text-base font-semibold leading-7 text-white">
                        Order Id:{" "}
                        <span className="font-medium text-indigo-600">
                          #{item?._id}
                        </span>
                      </p>
                      <p className="mt-4 text-base font-semibold leading-7 text-white">
                        Order Create :{" "}
                        <span className="font-medium text-emerald-500">
                          {" "}
                          {formatDate(item?.createdAt)}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center col-span-5 lg:col-span-2 max-lg:mt-3">
                      <div className="flex gap-3 lg:block">
                        <p className="text-sm font-medium leading-6 text-white whitespace-nowrap">
                          Expected Delivery Time
                        </p>
                        <p className="text-base font-medium leading-7 text-end whitespace-nowrap lg:mt-3 text-emerald-500">
                          {formatDate(addDays(item?.createdAt, 5))}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-3 min-[400px]:px-6">
                    {JSON.parse(item?.items)?.map((product, index2) => (
                      <div
                        key={index2}
                        className={`flex flex-col items-center w-full gap-6 py-6 ${
                          index2 === JSON.parse(item.items)?.length - 1
                        } border-b border-gray-200 lg:flex-row`}
                      >
                        <div className="img-box max-lg:w-full">
                          <Image
                            className="aspect-square w-full lg:max-w-[140px]"
                            src={product?.product?.image}
                            alt="Premium Watch image"
                            width={140}
                            height={140}
                          />
                        </div>
                        <div className="flex flex-row items-center w-full ">
                          <div className="grid w-full grid-cols-1 lg:grid-cols-2">
                            <div className="flex items-center">
                              <div className="">
                                <h2 className="mb-3 text-xl font-semibold leading-8 text-white line-clamp-1">
                                  {product?.product?.name}
                                </h2>
                                <div className="flex items-center ">
                                  <p className="text-base font-medium leading-7 text-white">
                                    Qty:{" "}
                                    <span className="text-gray-500">
                                      {product?.quantity}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="grid grid-cols-5">
                              <div className="flex items-center col-span-5 lg:col-span-1 max-lg:mt-3">
                                <div className="flex gap-3 lg:block">
                                  <p className="text-sm font-medium leading-7 text-white">
                                    price
                                  </p>
                                  <p className="text-sm font-medium leading-7 text-indigo-600 lg:mt-4">
                                    ${product?.product?.price}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center col-span-5 lg:col-span-2 max-lg:mt-3 ">
                                <div className="flex gap-3 lg:block">
                                  <p className="text-sm font-medium leading-7 text-white">
                                    Status
                                  </p>
                                  <p className="capitalize font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                                    {item?.order_status}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col items-center justify-between w-full px-6 border-t border-gray-200 lg:flex-row ">
                    <div className="flex flex-col items-center border-gray-200 sm:flex-row max-lg:border-b"></div>
                    <p className="py-6 text-lg font-semibold text-white">
                      Total Price:{" "}
                      <span className="text-indigo-600">
                        {" "}
                        ${item?.total_amount}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center">
            <Image
              alt=""
              src={iNoOrder}
              style={{
                maxWidth: "100%",
                maxHeight: "55vh",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="flex items-center justify-center text-2xl font-semibold">
            No Order Found!
          </div>
        </>
      )}
    </>
  );
};

export default Orders;
