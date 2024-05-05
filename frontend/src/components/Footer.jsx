import React from 'react'
import colors from '../config/colors'

function Footer() {
  return (
    <footer 
      role='contentinfo' 
      className='px-2 py-5 md:py-10'
      style={{
        backgroundColor: colors.pickledBluewood
      }}
    >
        <div className="container-wrapper">
            <p className='text-center text-white'>&copy; 2021. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer