import React from 'react'
import colors from '../config/colors'
import { Link } from 'react-router-dom'
import { SlSocialFacebook } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";
import { LuYoutube } from "react-icons/lu";

function Footer() {
  return (
    <footer 
      role='contentinfo' 
      className='px-2 py-5 md:py-10'
      style={{
        backgroundColor: colors.pickledBluewood
      }}
    >
        <div className="container-wrapper flex flex-col md:flex-row justify-between ">
          {/* footer list */}
          <ul className='mb-2 md:mb-0'>
            <h4 className='text-blue-200 uppercase mb-1 '>About us</h4>
            <li className='mb-1'>
              <Link to='/about' className='text-white hover:text-blue-300 duration-200 focus:text-blue-200'>About</Link>
            </li>
            <li className='mb-1'>
              <Link to='/terms' className='text-white hover:text-blue-300 duration-200 focus:text-blue-200'>Terms & Conditions</Link>
            </li>
            <li className='mb-1'>
              <Link to='/privacy' className='text-white hover:text-blue-300 duration-200 focus:text-blue-200'>Privacy Policy</Link>
            </li>
          </ul>
          {/* end of footer list */}
          {/* footer list */}
          <ul className='mb-2 md:mb-0'>
            <h4 className='text-blue-200 uppercase mb-1'>Help</h4>
            <li className='mb-1'>
              <Link to='/contact' className='text-white hover:text-blue-300 duration-200 focus:text-blue-200'>Contact us</Link>
            </li>
            <li className='mb-1'>
              <Link to='/faq' className='text-white hover:text-blue-300 duration-200 focus:text-blue-200'>FAQ</Link>
            </li>
            <li className='mb-1'>
              <Link to='/tips' className='text-white hover:text-blue-300 duration-200 focus:text-blue-200'>tips</Link>
            </li>
          </ul>
          {/* end of footer list */}
          {/* footer list */}
          <ul>
            <h4 className='text-blue-200 uppercase mb-1 md:text-center'>Follow us</h4>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 py-2 md:items-center">
              <li className='mb-2'>
                <a href="#n" target='_blank' rel="noreferrer" aria-label='facebook link' className='block'>
                  <SlSocialFacebook className='text-white text-3xl hover:text-blue-300 duration-200 focus:text-blue-200' />
                </a>
              </li>
              <li className='mb-2'>
                <a href="" target='_blank' rel="noreferrer" aria-label='instagram link' className='block'>
                  <BsInstagram className='text-white text-3xl hover:text-blue-300 duration-200 focus:text-blue-200' />
                </a>
              </li>
              <li className='mb-2'>
                <a href="" target='_blank' rel="noreferrer" aria-label='youtube link' className='block'>
                  <LuYoutube className='text-white text-4xl hover:text-blue-300 duration-200 focus:text-blue-200' />
                </a>
              </li>
            </div>
          </ul>
          {/* end of footer list */}
        </div>
        <div className="outro-box py-4">
            <p className='text-center text-white'>&copy; est 2024. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer