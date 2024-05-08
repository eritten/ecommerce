import React from 'react'
import 'animate.css';

// custom imports
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import colors from '../config/colors'

// image imports
import serv1 from '../assets/serv1.jpeg'
import serv2 from '../assets/serv2.jpeg'
import serv3 from '../assets/serv3.jpeg'
import serv4 from '../assets/serv4.jpeg'

const ServicesPage = () => {

  return (
    <>
      <Navbar />

      <main role='main' className='pb-10'>
        <div className="w-full h-40 md:h-56 flex justify-center items-center flex-col" style={{
          background: colors.shamrock
        }}>
          <h2 className='text-center text-white uppercase tracking-wide text-2xl md:text-3xl lg:text-5xl animate__animated animate__bounceInDown'>our Services</h2>
          <p className='text-center text-white text-base md:text-lg mt-2 capitalize lg:text-xl animate__animated animate__flipInY'>What we do for you</p>
        </div>
        {/* main wrapper */}
        <div className="container-wrapper px-2">
            {/* service boxes */}
          <div className="container mx-auto w-full max-w-[900px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
              <div className="border shadow rounded-md p-4" tabIndex="0" data-aos="fade-up">
                <h3 className='text-xl text-center text-gray-700'>Service 1</h3>
                <p className='text-gray-500 text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, quos?</p>
              </div>
              <div className="border shadow rounded-md p-4" tabIndex="0" data-aos="fade-up" data-aos-delay="200">
                <h3 className='text-xl text-center text-gray-700'>Service 2</h3>
                <p className='text-gray-500 text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, quos?</p>
              </div>
              <div className="border shadow rounded-md p-4" tabIndex="0" data-aos="fade-up" data-aos-delay="300">
                <h3 className='text-xl text-center text-gray-700'>Service 3</h3>
                <p className='text-gray-500 text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, quos?</p>
              </div>
            </div>
          </div>
            {/* end of service boxes */}
            {/* card start */}
            <div className="w-full flex flex-col md:flex-row gap-3 p-2 pb-4 md:h-96 my-2 bg-blue-100 rounded-md relative" data-aos="fade-up">
              <div className="absolute top-[calc(100%-1rem)] w-10 h-10 bg-white left-1/2 -translate-x-1/2 rounded-2xl" />
              <figure className="w-full md:w-[35%] h-72 md:h-full overflow-hidden rounded-md">
                <img src={serv1} alt="A happy business man discussing with two females." className="w-full h-full object-cover" />
              </figure>
              <div className="w-full md:w-[65%] p-2">
                <h2 className='text-center uppercase mb-2 text-xl md:text-3xl'>What we do</h2>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique esse aut veniam corporis facere dolore dolorum! Eos corporis eveniet earum, optio nesciunt voluptas harum similique magnam nihil obcaecati expedita! lorem</p>
              </div>
            </div>
            {/* card end */}
            {/* card start */}
            <div className="w-full flex flex-col md:flex-row gap-3 p-2 pb-4 md:h-96 my-2 bg-white rounded-md relative" data-aos="fade-up">
              <div className="absolute top-[calc(100%-1rem)] w-10 h-10 bg-white left-1/2 -translate-x-1/2 rounded-2xl" />
              <div className="w-full md:w-[65%] p-2">
                <h2 className='text-center uppercase mb-2 text-xl md:text-3xl'>What we do</h2>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique esse aut veniam corporis facere dolore dolorum! Eos corporis eveniet earum, optio nesciunt voluptas harum similique magnam nihil obcaecati expedita! lorem</p>
              </div>
              <figure className="w-full md:w-[35%] h-72 md:h-full overflow-hidden rounded-md">
                <img src={serv2} alt="A woman carrying a tv in a room full of computers." className="w-full h-full object-cover" />
              </figure>
            </div>
            {/* card end */}
            {/* card start */}
            <div className="w-full flex flex-col md:flex-row gap-3 p-2 pb-4 md:h-96 my-2 bg-green-100 rounded-md relative" data-aos="fade-up">
              <figure className="w-full md:w-[35%] h-72 md:h-full overflow-hidden rounded-md">
                <img src={serv3} alt="A woman carrying a tv in a room full of computers." className="w-full h-full object-cover" />
              </figure>
              <div className="absolute top-[calc(100%-1rem)] w-10 h-10 bg-white left-1/2 -translate-x-1/2 rounded-2xl" />
              <div className="absolute bottom-[calc(100%-1rem)] w-10 h-10 bg-white left-1/2 -translate-x-1/2 rounded-2xl" />
              <div className="w-full md:w-[65%] p-2">
                <h2 className='text-center uppercase mb-2 text-xl md:text-3xl'>What we do</h2>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique esse aut veniam corporis facere dolore dolorum! Eos corporis eveniet earum, optio nesciunt voluptas harum similique magnam nihil obcaecati expedita! lorem</p>
              </div>
            </div>
            {/* card end */}
            {/* card start */}
            <div className="w-full flex flex-col md:flex-row gap-3 p-2 pb-4 md:h-96 my-2 bg-white rounded-md relative" data-aos="fade-up">
              <div className="absolute top-[calc(100%-1rem)] w-10 h-10 bg-white left-1/2 -translate-x-1/2 rounded-2xl" />
              <div className="w-full md:w-[65%] p-2">
                <h2 className='text-center uppercase mb-2 text-xl md:text-3xl'>What we do</h2>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique esse aut veniam corporis facere dolore dolorum! Eos corporis eveniet earum, optio nesciunt voluptas harum similique magnam nihil obcaecati expedita! lorem</p>
              </div>
              <figure className="w-full md:w-[35%] h-72 md:h-full overflow-hidden rounded-md">
                <img src={serv4} alt="two happy robots." className="w-full h-full object-cover" />
              </figure>
            </div>
            {/* card end */}
        </div>
        {/* end of main wrapper */}
      </main>

      <Footer />
    </>
  )
}

export default ServicesPage