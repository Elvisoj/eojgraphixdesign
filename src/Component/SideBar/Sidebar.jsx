import React, { useState } from 'react'
import Navbar from '../Header/Navbar'
import "./sidebar.css"
import { assets } from '../../assets/assets'

function Sidebar() {
    const [ isVisible, setIsvisible ] = useState(false)
  return (
    <div className='db-sidebar'>
      <div className="db-sidebar-container">
        <div className="top-section">
            <div className="menu-icon">
                <img src={assets.menu_icon} onClick={()=> setIsvisible(prev => !prev)} alt="" />
            </div>
            { isVisible && <Navbar isActive={true}/> }
        </div>
        <div className="bottom-section">
            <div className="help section">
                <img src={assets.question_icon}  />
                {isVisible && <p>help</p>}
            </div>
            <div className="setting section">
                <img src={assets.setting_icon}  />
                {isVisible && <p>setting</p>}
            </div>
            <div className="signout section">
                {isVisible &&
                    <button>Sign Out!</button>
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
