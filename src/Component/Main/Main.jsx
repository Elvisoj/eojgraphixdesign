import React, { useContext } from 'react'
import "./main.css"
import Cards from './Cards'
import ManagePost from './PopupDisplay/ManagePost'
import { AppContext } from '../../Context/AppContext'
import Form from './PopupDisplay/Form'

function Main() {
  const { isFormActive } = useContext(AppContext);
  const title = "Create New Post";
  return (
    <div className='db-main'>
      <div className="db-main-container">
        <div className="top-layer">
          <Cards />
        </div>
        <div className="bottom-layer">
          <ManagePost />
          {isFormActive && <Form title={title}/>}
        </div>
      </div>
    </div>
  )
}

export default Main
