import React from 'react'
import { Link } from 'react-router-dom'
import { SiGooglemaps } from "react-icons/si";
import { FaBookmark } from "react-icons/fa";

// custom imports
import colors from '../config/colors';
import IconButton from './IconButton';

const Card = ({name, price, image="https://placehold.co/600x600?text=Ad+Image", location="Accra", linkTo, saveAd}) => {
  return (
    <Link 
      to={linkTo}
      role='article' 
      className='block h-[12rem] sm:h-[15rem] md:h-[20rem] overflow-hidden p-1 rounded-xl shadow-md relative'
      style={{
        backgroundColor: colors.curiousBlue
      }}
      data-aos='fade-up'
      aria-label={name}
    >
      <IconButton
        Icon={FaBookmark}
        style={{
          position: 'absolute',
          top: '5%',
          right: '5%',
          backgroundColor: colors.shamrock,
        }}
        onClick={saveAd}
        label='Save ad'
      />
      <figure className='h-[68%] sm:h-[75%] bg-slate-300 w-full overflow-hidden rounded-t-lg'>
        <img src={image} alt={name} className='w-full h-full bg-contain' />
      </figure>
      <div className="content-box h-[32%] sm:h-[25%] p-1 rounded-sm rounded-b-lg" >
        <h3 
          className='overflow-hidden truncate text-sm md:text-base text-white tracking-wide capitalize font-normal' 
          data-aos='fade-left' 
          data-aos-delay="100"
        >{name}</h3>
        <p 
          className='font-bold text-white text-sm md:text-base mb-[-3px] md:mb-[2px]' 
          data-aos='fade-left' 
          data-aos-delay="300"
        >{price}</p>
        <p 
          className='flex items-center gap-1 overflow-hidden'
          data-aos='fade-left'
          data-aos-delay="500"
        > <span className='text-sm md:text-lg'><SiGooglemaps /></span> <span className='truncate text-slate-100 text-sm md:text-base'>{location}</span></p>
      </div>
    </Link>
  )
}

export default Card