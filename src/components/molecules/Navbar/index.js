import React from 'react'
import { Logo } from '../../../assets'


// css
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="container">
      <img src={Logo} alt="Logo" />
      <div className="menu">
        <h3>On Sale</h3>
        <h3>For rent</h3>
        <h3>New Residential Project</h3>
        <h3>Property News</h3>
      </div>
    </div>
  )
}

export default Navbar
