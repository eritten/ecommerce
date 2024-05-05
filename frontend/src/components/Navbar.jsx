import React, {useState, useEffect} from 'react'
import { FaHome, FaBookmark, FaInfoCircle, FaTools, FaPhone, FaHamburger} from 'react-icons/fa';
import {Link} from 'react-router-dom'

// custom imports
import IconButton from './IconButton';
import colors from '../config/colors';

const Navbar = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [mobileNavVisible, setMobileNavVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const offset = window.pageYOffset;
          if (offset > 400 && !isFixed) {
            setIsFixed(true);
          } else if (offset === 0 && isFixed) {
            setIsFixed(false);
          }
        };
        const handleMobileNavScroll = () => {
            // Close mobile navigation when user scrolls
            if (mobileNavVisible) {
                setMobileNavVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleMobileNavScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('scroll', handleMobileNavScroll);
        };
    }, [isFixed, mobileNavVisible]);

  return (
    <nav 
        role='navigation' 
        className={`py-3 md:py-5 px-2 duration-500 ease-in-out z-20 ${isFixed ? 'fixed top-0 left-0 w-full z-50 bg-white shadow-lg' : 'relative'}`}  
        style={{
            backgroundColor: colors.pickledBluewood
        }}
    >
        <div className="nav-wrapper w-full max-w-[1200px] mx-auto flex flex-row justify-between items-center">
            <Link to="/" className="logo uppercase text-white text-xl md:text-2xl lg:text-3xl font-semibold" data-aos="fade-left">
                <h2>Logo</h2>
            </Link>
            <IconButton
                Icon={FaHamburger}
                label='Open Menu'
                bgColor={colors.cinnabar}
                infoStyle={{
                    opacity: 0
                }}
                className="md:hidden"
                onClick={() => setMobileNavVisible(!mobileNavVisible)}
            />
            <ul className="gap-3 md:gap-5 hidden md:flex">
                <li>
                    <IconButton
                        Icon={FaHome}
                        linkTo="/"
                        label='Go to Home'
                    />
                </li>
                <li>
                    <IconButton
                        Icon={FaBookmark}
                        linkTo="Saved"
                        label='Saved ads'
                    />
                </li>
                <li>
                    <IconButton
                        Icon={FaInfoCircle}
                        linkTo="About"
                        label='About Us'
                    />
                </li>
                <li>
                    <IconButton
                        Icon={FaTools}
                        linkTo="Services"
                        label='Our Services'
                    />
                </li>
                <li>
                    <IconButton
                        Icon={FaPhone}
                        linkTo="Contact"
                        label='Contact us'
                    />
                </li>
                <li>
                    <Link 
                        to="/signup"
                        className='w-28 h-10 rounded-sm text-xl uppercase text-white font-bold relative mobile-signup-btn overflow-hidden block ml-3 nav-signup-btn' 
                    >
                        <span className='w-full h-full flex-center duration-300' style={{
                            backgroundColor: colors.cinnabar
                        }}>Sign up</span>
                        <span className='w-full h-full flex-center duration-300' style={{
                            backgroundColor: colors.curiousBlue
                        }}>Sign up</span>
                    </Link>
                </li>
            </ul>
            {/* mobile nav */}
            <nav 
                role='navigation' 
                className={`absolute top-full h-[calc(100vh-72px)] right-0 p-5 w-full duration-500 ${!mobileNavVisible ? 'mobile-nav-hidden' : ''}`}
                style={{
                    backgroundColor: colors.curiousBlue
                }} 
            >
                <ul className="mobile-nav gap-5 md:hidden flex flex-col justify-center">
                    <li className='flex items-center gap-2'>
                        <IconButton
                            Icon={FaHome}
                            linkTo="/"
                            label='Go to Home'
                            bgColor={colors.pickledBluewood}
                            infoStyle={{
                                opacity: 0
                            }}
                        />
                        <h2 className='text-2xl uppercase text-white'>Home</h2>
                    </li>
                    <li className='flex items-center gap-2'>
                        <IconButton
                            Icon={FaBookmark}
                            linkTo="Saved"
                            label='Saved ads'
                            bgColor={colors.pickledBluewood}
                            infoStyle={{
                                opacity: 0
                            }}
                        />
                        <h2 className='text-2xl uppercase text-white'>Saved Ads</h2>
                    </li>
                    <li className='flex items-center gap-2'>
                        <IconButton
                            Icon={FaInfoCircle}
                            linkTo="About"
                            label='About Us'
                            bgColor={colors.pickledBluewood}
                            infoStyle={{
                                opacity: 0
                            }}
                        />
                        <h2 className='text-2xl uppercase text-white'>About us</h2>
                    </li>
                    <li className='flex items-center gap-2'>
                        <IconButton
                            Icon={FaTools}
                            linkTo="Services"
                            label='Our Services'
                            bgColor={colors.pickledBluewood}
                            infoStyle={{
                                opacity: 0
                            }}
                        />
                        <h2 className='text-2xl uppercase text-white'>Our Services</h2>
                    </li>
                    <li className='flex items-center gap-2'>
                        <IconButton
                            Icon={FaPhone}
                            linkTo="Contact"
                            label='Contact us'
                            bgColor={colors.pickledBluewood}
                            infoStyle={{
                                opacity: 0
                            }}
                        />
                        <h2 className='text-2xl uppercase text-white'>contact us</h2>
                    </li>
                    <li>
                        <Link 
                            style={{
                            backgroundColor: colors.buttercup
                            }}
                            to="/signup"
                            className='w-28 h-10 rounded-sm text-xl uppercase text-white font-bold relative mobile-signup-btn overflow-hidden block' 
                        >
                            <span className='absolute inset-0 flex-center bg-red-400 mobile-signup-btn-bg duration-300'></span>
                            <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-nowrap pointer-events-none'>Sign up</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            {/* end of mobile nav */}
        </div>
    </nav>
  )
}

export default Navbar