import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Component/Header/Header'
import { height } from '@fortawesome/free-solid-svg-icons/fa0'

function ErrorPage() {
    const errorStyles = {
        background: "purple", 
        width: "100%", 
        height: "100vh",
    }
    const errorH2Styles = {
        "font-size": "4rem",
        "text-align": "center",
        "margin-top": "2rem"
    }
  return (
    <div style={errorStyles}>
        <Header />
        <h2 style={errorH2Styles}>Page Not found</h2>
    </div>
  )
}

export default ErrorPage
