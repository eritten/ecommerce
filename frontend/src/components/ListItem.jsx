import React from 'react'
import { FaCircleChevronDown } from "react-icons/fa6";

function ListItem({Icon, name, totalQuantity, isHead, ...otherProps}) {
  return (
    <li
        className='flex justify-between items-center p-2 border-b border-slate-300 cursor-pointer'
        {...otherProps}
    >
        <div className="flex items-center gap-2 w-[90%]">
            {Icon && <Icon className="text-2xl text-orange-500" />}
            <div className="content-box w-full max-w-[70%]">
                <h3 className="text-sm text-blue-500 capitalize truncate">{name}</h3>
                <p className="text-xs text-slate-600 font-bold">({totalQuantity}) ads</p>
            </div>
        </div>
        {isHead && <FaCircleChevronDown className="text-2xl text-gray-500" />}
    </li>
  )
}

export default ListItem