import React from 'react'

import './LoadingCircle.css'

const LoadingCircle = ({width, height, visible}) => {
    if (!visible) return null;

  return (
    <div className='z-50 w-full flex items-center justify-center' role='alert' aria-label='Loading...'>
      <svg
        className="spinner"
        width={width || 50}
        height={height || 50}
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
        aria-label='Loading...'
      >
        <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30" aria-label='loading cirlce spinning animation.'></circle>
      </svg>
    </div>
  )
}

export default LoadingCircle