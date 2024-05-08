import React from 'react'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";

const SavedItem = ({name="Product name", image, price=1, condition="new", location, sellerNumber}) => {

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

  return (
    <Link
        to={`/details?product=${name}`}
        className="flex flex-col md:flex-row items-center justify-center p-2 border border-gray-200 rounded-md shadow-md  md:h-56 gap-2 bg-green-100"
    >
        <div className="relative w-full h-48 sm:w-2/5 sm:h-full bg-slate-400 rounded-md">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-contain"
            />
        </div>
        <div className="flex flex-col justify-between w-full sm:w-3/5 sm:h-full">
            <h3 className="text-sm text-gray-800 font-bold tracking-wide">{name}</h3>
            <p className="text-xs text-gray-600">{condition}</p>
            <p className="text-lg text-green-800 font-bold">GHS {formatPrice(price)}</p>
            <p className="text-xs text-gray-600 flex items-center"><FaLocationDot /> {location}</p>
            <p className="text-xs text-gray-600">Contact: {sellerNumber}</p>
        </div>
    </Link>
  )
}

export default SavedItem