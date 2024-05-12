import React from 'react'

const ErrorMsg = ({msg, isVisible, ...otherProps}) => {
    if(!isVisible) return null

  return (
    <div className='w-full p-2' {...otherProps}>
        <p role='alert' className='text-red-500'>{msg}</p>
    </div>
  )
}

export default ErrorMsg