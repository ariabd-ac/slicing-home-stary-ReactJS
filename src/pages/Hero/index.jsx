import React from 'react'
import { Bg } from '../../assets'
import { Booking, Navbar } from '../../components'

// css
import './Hero.css'

const Hero = () => {
  return (
    <div className="page">
      <img src={Bg} alt="background" className="bg-image"/>
      <div className="gradient">
        <div className="page-hero">
          <Navbar />
          <div className="text-welcome">
            <h3>Quality home services, on demand</h3>
            <h4>Experienced, hand-picked Professionals to serve you at your doorstep</h4>
          </div>
          <Booking/>
        </div>
    </div>
    </div>
  )
}

export default Hero
