import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';

const Swipper = ({imgArray, imgAlt}) => {
  return (
    <div className='container w-full h-full flex justify-center items-center bg-red-300'>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]}
            spaceBetween={10}
            effect='cards'
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
                // when window width is >= 640px
                640: {
                  slidesPerView: 1,
                },
            }}
            loop={true}
            style={{ width: '100%', height: '100%', userSelect: 'none'}}
        >
            {
                imgArray.map((img, index) => (
                    <SwiperSlide key={index} className='mySliderSw'>
                        <img src={img} alt={imgAlt} className='w-full h-full object-cover' draggable="false" loading='lazy' />
                    </SwiperSlide>
                ))
            }

        </Swiper>
    </div>
  )
}

export default Swipper