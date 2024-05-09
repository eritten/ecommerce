import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import colors from '../config/colors';

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <main role='main' className='pb-10'>
        <div className="w-full h-40 md:h-56 flex justify-center items-center flex-col" style={{
          background: colors.shamrock
        }}>
          <h2 className='text-center text-white uppercase tracking-wide text-2xl md:text-3xl lg:text-5xl animate__animated animate__bounceInDown'>About Us</h2>
          <p className='text-center text-white text-base md:text-lg mt-2 capitalize lg:text-xl animate__animated animate__flipInY'>Get to know us better</p>
        </div>
        {/* main wrapper */}
        <div className="container-wrapper px-2">
          <div className="container mx-auto w-full max-w-[900px]">
            <div className="p-4 mt-4 rounded-md shadow-md bg-white">
              <h2 className='text-xl md:text-3xl text-gray-800 font-semibold mb-4'>Our Story</h2>
              <p className='text-lg text-gray-600 leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus fringilla libero, nec convallis lorem efficitur ac. Fusce eget arcu vel ex convallis venenatis. Donec et ultricies ligula. Nulla sit amet velit quam. Donec auctor ipsum in commodo fringilla. Morbi pulvinar ultrices lectus sit amet interdum. Aliquam sodales, urna in sodales bibendum, urna sem ullamcorper orci, vel rutrum metus metus id elit. Sed in sapien metus. Vivamus tempus justo sit amet est rutrum, vel efficitur mauris elementum. Donec et velit a nisi tincidunt vulputate eget vel metus. Sed vitae varius ligula, sed aliquam nunc. Integer elementum vel enim id malesuada. Maecenas sit amet iaculis magna. Vivamus hendrerit neque ac arcu sodales, eget pellentesque ipsum volutpat.
              </p>
            </div>

            <div className="p-4 mt-4 rounded-md shadow-md bg-white">
              <h2 className='text-xl md:text-3xl text-gray-800 font-semibold mb-4'>Our Mission</h2>
              <p className='text-lg text-gray-600 leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus fringilla libero, nec convallis lorem efficitur ac. Fusce eget arcu vel ex convallis venenatis. Donec et ultricies ligula. Nulla sit amet velit quam. Donec auctor ipsum in commodo fringilla. Morbi pulvinar ultrices lectus sit amet interdum. Aliquam sodales, urna in sodales bibendum, urna sem ullamcorper orci, vel rutrum metus metus id elit. Sed in sapien metus. Vivamus tempus justo sit amet est rutrum, vel efficitur mauris elementum. Donec et velit a nisi tincidunt vulputate eget vel metus. Sed vitae varius ligula, sed aliquam nunc. Integer elementum vel enim id malesuada. Maecenas sit amet iaculis magna. Vivamus hendrerit neque ac arcu sodales, eget pellentesque ipsum volutpat.
              </p>
            </div>
          </div>
        </div>
        {/* end of main wrapper */}
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;
