import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../Context/AppContext'


function ViewPosts() {
  const { managePostActive, setManagePostActive } = useContext(AppContext)
  return (
    <div className='viewposts card'>
      <div className="viewposts-container" onClick={()=> setManagePostActive(!managePostActive)}>
        <img src={assets.allpost_icon} alt="AllPostIcon.png" />
        <h2>View Posts</h2>
      </div>
    </div>
  )
}

export default ViewPosts
