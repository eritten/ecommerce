import React, {useState, useEffect} from 'react'
import { FaSearch } from 'react-icons/fa'
import 'animate.css';

// custom imports
import colors from '../config/colors'
import IconButton from './IconButton'

function Header() {
    const [searchInput, setSearchInput] = useState('');
    const [searchClicked, setSearchClicked] = useState(false);

    useEffect(() => {
        const searchInput = document.getElementById('search-input');
        searchInput.focus();
    }, []);

    const shakeSearchInput = () => {
        const searchInput = document.getElementById('search-input');
        searchInput.classList.add('shake-animation');

        setTimeout(() => {
            searchInput.classList.remove('shake-animation');
        }, 1000);
    }

    const handleSearch = (text) => {
        setSearchClicked(true);
        setSearchInput('');

        if (text.trim() === '') {
            shakeSearchInput();
        }
    
    }

  return (
    <header className='h-[calc(100vh-72px)] z-10 p-5' style={{
        background: colors.shamrock
    }}>
        <div className="header-wrapper">
            <h3 className="text-white text-4xl font-bold animate__animated animate__bounce text-center" aria-labelledby='search-input'>Looking to buy anything?</h3>
            {/* input box */}
            <div className="w-full lg:w-3/4 xl:w-3/5 relative h-16 animate__animated animate__shakeX animate__delay-1s">
                <input 
                    type="text"
                    placeholder="Search for anything..." 
                    id='search-input'
                    className='search-input'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <IconButton
                    Icon={FaSearch}
                    bgColor={colors.cinnabar}
                    infoStyle={{
                        opacity: 0
                    }}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2"
                    label='Search'
                    aria-labelledby='search-input'
                    aria-describedby='search-input'
                    aria-label='Search'
                    onClick={() => handleSearch(searchInput)}
                />
            </div>
            {/* end of input box */}
        </div>
    </header>
  )
}

export default Header
