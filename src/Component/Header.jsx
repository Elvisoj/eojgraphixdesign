import React from 'react'

function Header() {
  return (
    <div className='homepage-header'>
      <div className="homepage-header-container">
        <div className="theme">Theme <span className='theme-color'></span></div>
        <ul>
            <li>HomePage</li>
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