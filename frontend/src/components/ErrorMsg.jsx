import React from 'react'

const ErrorMsg = ({msg, isVisible}) => {
    if(!isVisible) return null

  return (
    <div className='w-full p-2'>
        <p role='alert' className='text-red-500 text-sm'>{msg}</p>
    </div>
  )
}

export default ErrorMsg