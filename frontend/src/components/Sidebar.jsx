import React from 'react'

function Sidebar() {
  return (
    <aside role='navigation' className='hidden md:block md:w-[15%] shadow-lg bg-slate-200 sticky top-[76px] z-10 overflow-y-auto h-[calc(100dvh-10px)]'>
        <h2>Categories</h2>
    </aside>
  )
}

export default Sidebar