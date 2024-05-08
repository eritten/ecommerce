import React from 'react'

function AccordionSection({ header, body, isOpen, onToggle }) {
  return (
    <>
       {/* Handle click event to toggle accordion */}
       <div className="header" onClick={onToggle}>
        {header}
      </div>
      {/* Render body only if the accordion is open */}
      {isOpen && <div className="body w-full bg-slate-300 rounded p-1">{body}</div>}
    </>
  )
}

export default AccordionSection