import React from 'react'
import Sidebar from '../Component/SideBar/Sidebar'
import Main from '../Component/Main/Main'

function Dashboard() {
  return (
    <div className='dashboard'>
      <div className="dashboard-container">
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}

export default Dashboard
