import React from 'react'

const AddressCard= ({address,title,onOpen=()=>{}}) => {
    return (
        <div className="px-4 pt-6 pb-8 w-full duration-500 bg-cCommonBg text-white shadow-md  rounded-xl hover:scale-105 hover:shadow-xl border border-gray-200 ">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-medium ">
            {title}
          </h3>
          <div  
          onClick={onOpen}
          className="text-primary cursor-pointer">
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