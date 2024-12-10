import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../Context/AppContext'

function NewPost() {
  const { formStateData, setFormState, setIsFormActive } = useContext(AppContext)
  return (
    <div className='newpost card'>
      <div className="create-post-btn" onClick={()=> {
          setIsFormActive(prev => !prev)
          setFormState(formStateData)
        }}>
            <p className="icon">
              <img src={assets.plus_icon} alt="AddIcon" />
            </p>
            <p className='text'>New Post</p>
        </div>
    </div>
  )
}

export default NewPost
