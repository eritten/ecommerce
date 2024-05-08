import React from 'react'
import 'animate.css';

// custom imports
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SavedItem from '../components/SavedItem'
import colors from '../config/colors'

const SavedPage = () => {
  return (
    <>
      <Navbar />

      <main role='main' className='px-2 py-10'>
        <div className="mx-auto w-full max-w-[900px] border shadow rounded-md">
          {/* head */}
          <div className="w-full p-3 border-b" style={{
              background: colors.shamrock
            }}>
            <h2 className='text-center text-white uppercase tracking-wide animate__animated animate__zoomInDown text-xl md:text-2xl'>Saved ads</h2>
          </div>
          {/* end of head */}
          {/* body */}
          <div className="w-full p-3 flex flex-col gap-4">
            {/* <p className='text-center text-gray-500'>No saved ads</p> */}
            <SavedItem 
              name="Iphone by apple vs the world in the market"
              image="https://via.placeholder.com/150"
              price={1000}
              condition="new"
              location="Accra"
              sellerNumber="0241234567"
            />
            <SavedItem 
              name="Iphone by apple vs the world in the market"
              image="https://via.placeholder.com/150"
              price={1000}
              condition="new"
              location="Accra"
              sellerNumber="0241234567"
            />
            <SavedItem 
              name="Iphone by apple vs the world in the market"
              image="https://via.placeholder.com/150"
              price={1000}
              condition="new"
              location="Accra"
              sellerNumber="0241234567"
            />
          </div>
          {/* end of body */}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default SavedPage