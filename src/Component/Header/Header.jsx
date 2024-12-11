import React, { useState } from 'react'
import Navbar from './Navbar'
import { assets } from '../../assets/assets'

import "./header.css"

function Header() {
  const [ isActive, setIsActive ]= useState(false)
  window.onscroll = ()=>{
    setIsActive(prev => false)
}

  return(
    <div className="homepage-header">
      <div className="homepage-header-container">
        <div className="top-display-section">
          <img src={assets.logo_icon} alt="logo" className="brand-logo" />
          <div className="handburger-menu" onClick={()=> setIsActive(prev => !prev)}>
            <div className="menubar"></div>
          </div>
        </div>
        <Navbar isActive={isActive}/>
      </div>
    </div>
  )
}

export default Header