import React from 'react'

const AddressCard= ({address,title,onOpen=()=>{}}) => {
    return (
        <div className="w-full px-4 pt-6 pb-8 text-white duration-500 border border-gray-200 shadow-md bg-cCommonBg rounded-xl hover:scale-105 hover:shadow-xl ">
        <div className="flex items-center justify-between mb-4 gap-x-5">
          <h3 className="text-2xl font-medium ">
            {title}
          </h3>
          <div  
          onClick={onOpen}
          className="cursor-pointer text-primary">
            Edit
          </div>
        </div>
        <div className="space-y-1">
          <h4 className="font-medium text-start">Title: {address?.title}</h4>
          <p className="text-start">Address: {address?.address}</p>
          <p className="text-start">Postal code: {address?.postalCode}</p>
          <p className="text-start">House name: {address?.house_name}</p>
        </div>
      </div>
    )
}

export default AddressCard