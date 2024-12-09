import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

function Header() {
  const { headerREF, toggleHeader } = useContext(AppContext)

  const toggleTheme =(e)=>{
    e.target.classList.toggle("toggle")
  }

  return (
    <div ref={headerREF} className='homepage-header'>
      <div className="homepage-header-container">
        <div className="close-btns" onClick={toggleHeader}>
          <div className="close-btn"></div>
        </div>
        <div className="theme">Theme <span onClick={toggleTheme} className='theme-color'></span></div>
        <ul>
            <li> HomePage</li>
            <li>Gallery</li>
            <li>Designer Profile</li>
            <li>About Designer</li>
            <li>Contact Designer</li>
        </ul>
      </div>
    </div>
  )
}

export default Header