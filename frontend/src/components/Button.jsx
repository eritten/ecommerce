import React from 'react'

// custom imports
import colors from '../config/colors'

const Button = ({label="button", color1=colors.cinnabar, color2=colors.curiousBlue, ...otherProps}) => {
  return (
    <button
      className='app-button nav-signup-btn'
      {...otherProps}
    >
      <span 
        className='w-full h-full flex-center duration-300 px-3' 
        style={{
            backgroundColor: color1
        }}>{label}</span>
      <span className='w-full h-full flex-center duration-300 px-3' style={{
          backgroundColor: color2
      }}>{label}</span>
    </button> 
  )
}

export default Button