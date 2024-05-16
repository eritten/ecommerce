import React, {useRef, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUpload, faStore } from '@fortawesome/free-solid-svg-icons'

// custom imports
import colors from '../config/colors';
import IconButton from './IconButton';
import { Link } from 'react-router-dom';

const DashboardNav = () => {
    const menuRef = useRef(null);

    const toggleMenu = () => {
        menuRef.current.classList.toggle('hidden');
    }

    // close menu on scroll
    useEffect(() => {
        menuRef.current.classList.add('hidden');
        const handleScroll = () => {
            if (!menuRef.current.classList.contains('hidden')) {
                menuRef.current.classList.add('hidden');
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
  return (
    <>
        <nav role='navigation' className="p-2 md:p-4 relative" style={{
            background: colors.pickledBluewood
        }}>
            <div className="container-wrapper flex justify-between items-center">
                <div className="flex items-center">
                    <div className="text-white font-bold text-xl">Dashboard</div>
                </div>
                <ul className="hidden md:flex space-x-4 text-white">
                    <li>
                        <IconButton
                            linkTo='/'
                            FaIcon={faHouse}
                            label='Go home'
                            bgColor={colors.curiousBlue}
                        />
                    </li>
                    <li>
                        <IconButton
                            linkTo='/post-ad'
                            FaIcon={faUpload}
                            label='post an ad'
                            bgColor={colors.curiousBlue}
                        />
                    </li>
                    <li>
                        <IconButton
                            linkTo='/my-ads'
                            FaIcon={faStore}
                            label='my ads'
                            bgColor={colors.curiousBlue}
                        />
                    </li>
                </ul>
                <div className="flex items-center md:hidden">
                    <button 
                        className="text-white" 
                        aria-label='navigation menu button'
                        onClick={toggleMenu}
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                        </svg>
                    </button>
                </div>
                {/* mobile menu */}
                <div 
                    className="absolute p-2 rounded-md shadow-md top-[102%] right-2 w-[60%]" 
                    style={{
                        background: colors.curiousBlue
                    }}
                    ref={menuRef}
                    role='menu'
                    aria-label='mobile menu opened'
                >
                    <ul className='w-full'>
                        <li className='w-full p-1 hover:bg-blue-500 rounded-md duration-300'>
                            <Link 
                                to="/"
                                className='text-white flex items-center gap-2  w-full text-sm'
                            >
                                <FontAwesomeIcon icon={faHouse}/>
                                <span className='uppercase '>Home</span>
                            </Link>
                        </li>
                        <li className='w-full p-1 hover:bg-blue-500 rounded-md duration-300'>
                            <Link 
                                to="/post-ad"
                                className='text-white flex items-center gap-2  w-full text-sm'
                            >
                                <FontAwesomeIcon icon={faUpload}/>
                                <span className='uppercase'>Post an ad</span>
                            </Link>
                        </li>
                        <li className='w-full p-1 hover:bg-blue-500 rounded-md duration-300'>
                            <Link 
                                to="/my-ads"
                                className='text-white flex items-center gap-2  w-full text-sm'
                            >
                                <FontAwesomeIcon icon={faStore}/>
                                <span className='uppercase'>My ads</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* end of for mobilemenu */}
            </div>
        </nav>
    </>
  );
};

export default DashboardNav;
