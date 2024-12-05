import React from 'react'

import "../Styles/homepage.css"
import LandingPage from '../Component/LandingPage'
import Gallery from '../Component/Gallery'
import Header from '../Component/Header'

function HomePage() {
  return (
    <div className='homepage'>
      <div className="homepage-container">
        <Header />
        <LandingPage />
        <Gallery />
      </div>
    </div>
  )
}

export default HomePage
