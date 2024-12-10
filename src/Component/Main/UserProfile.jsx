import React from 'react'
import { assets } from '../../assets/assets'

function UserProfile() {
  return (
    <div className='userprofile card'>
      <div className="userprofile-container">
            <div className="user-details">
                <img src={assets.userprofile_icon} alt="" className="user-icon" />
                <p className="user-name">Elvis O. Jonathan</p>
                <p className="user-position">SoftWare Engineering</p>
            </div>
        </div>
    </div>
  )
}

export default UserProfile
