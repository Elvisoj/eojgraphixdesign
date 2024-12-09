import React from 'react'

import "../Styles/homepage.css"
import LandingPage from '../Component/LandingPage'
import Gallery from '../Component/Gallery/Gallery'
import Header from '../Component/Header'
import Footer from '../Component/Footer/Footer'
import Contact from '../Component/Contact/Contact'
import About from '../Component/About/About'

function HomePage() {
  return (
    <div className='homepage'>
      <div className="homepage-container">
        <Header />
        <LandingPage />
        <Gallery />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
