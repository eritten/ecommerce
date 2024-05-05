import React from 'react'
import { Link } from 'react-router-dom'
import { SiGooglemaps } from "react-icons/si";

// custom imports
import colors from '../config/colors';

const Card = ({name, price, image, location="Accra"}) => {
  return (
    <Link 
      role='article' 
      className='block h-[20rem] overflow-hidden p-1 rounded-xl shadow-md'
      style={{
        backgroundColor: colors.curiousBlue
      }}
      data-aos='fade-up'
    >
      <figure className='h-[75%] bg-slate-300 w-full overflow-hidden rounded-t-lg'>
        <img src={image} alt={name} className='w-full h-full bg-contain' />
      </figure>
      <div className="content-box h-[25%] p-1 rounded-sm rounded-b-lg" >
        <h3 
          className='overflow-hidden truncate text-base text-white tracking-wide capitalize font-normal' 
          data-aos='fade-left' 
          data-aos-delay="100"
        >{name}</h3>
        <p 
          className='font-bold text-white' 
          data-aos='fade-left' 
          data-aos-delay="300"
        >{price}</p>
        <p 
          className='flex items-center gap-1 overflow-hidden'
          data-aos='fade-left'
          data-aos-delay="500"
        > <span className='text-lg'><SiGooglemaps /></span> <span className='truncate text-slate-100'>{location}</span></p>
      </div>
    </Link>
  )
}

export default Card