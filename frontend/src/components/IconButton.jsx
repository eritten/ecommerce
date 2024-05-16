import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import colors from '../config/colors'

const IconButton = ({Icon,FaIcon, linkTo="", bgColor = colors.buttercup, color="white",label="Go to Home", infoStyle, className, ...otherProps}) => {
    const [labelPosition, setLabelPosition] = useState({top: '90%', right: '50%'})

    const handleMouseEnterOfIconButton = () => {
        const button = document.querySelector('.icon-button')
        if(button) {
            const rect = button.getBoundingClientRect();

            if (rect.right > window.innerWidth / 2) {
                // If button is positioned to the right of the screen center
                setLabelPosition({ top: '90%', right: '0%', transform: 'translateX(0%)' });
              } else {
                // If button is positioned to the left of the screen center
                setLabelPosition({ top: '90%', right: '50%', transform: 'translateX(50%)' });
              }
        }
    }

    const mergedStyles = {
        ...labelPosition,
        ...infoStyle
    };

  return (
    <Link
        to={linkTo} 
        style={{
            backgroundColor: bgColor,
            color: color,
        }} 
        className={`icon-button ${className}`}
        aria-label={`Go to ${linkTo}`}
        onMouseEnter={handleMouseEnterOfIconButton}
        {...otherProps}
    >
        {Icon && <Icon />}
        {FaIcon && <FontAwesomeIcon icon={FaIcon} />}
        {/* icon info */}
        <div className="absolute bg-yellow-100 min-w-max px-2 py-[2px] rounded-sm icon-button-info shadow-sm pointer-events-none z-[2]" style={mergedStyles}>
            <span className="text-slate-700 text-xs font-bold tracking-normal block py-0" role='alert'>{label}</span>
        </div>
        {/* end of icon info */}
    </Link>
  )
}

export default IconButton