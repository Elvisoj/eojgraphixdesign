import React from 'react'
import UserProfile from './UserProfile'
import NewPost from './NewPost'
import Analytics from './Analytics'
import ViewPosts from './ViewPosts'

function Cards() {
  return (
    <div className='cards'>
      <UserProfile />
      <NewPost />
      <ViewPosts />
      <Analytics />
      
    </div>
  )
}

export default Cards