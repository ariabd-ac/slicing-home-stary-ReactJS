import React from 'react'
import { Ap, Gp, Logo } from '../../assets/'
import { Gap } from '../../components'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-page">
      <Gap height={45} />
      <div className="footer-top">
        <h5>Delivery Service</h5>
        <h5>Assembly Service</h5>
        <h5>Customer Service</h5>
        <h5>Contact Us</h5>
        <h5>Near Me</h5>
        <h5>Careers</h5>
        <h5>Gift Cards</h5>
        <h5>Contact Us</h5>
      </div>
      <Gap height={26} />
      <div className="footer-garis"></div>
      <Gap height={28} />
      <div className="footer-mid">
        <h2>Serving in</h2>
        <div className="footer-mid-wraper">
          <h3>Australia</h3>
          <div className="footer-wraper-sub">
            <h5>Sydney</h5>
            <h5>Albury</h5>
            <h5>Queensland</h5>
            <h5>Adelaide</h5>
            <h5>Hobart</h5>
            <h5>Darwin</h5>
            <h5>Canberra</h5>
            <h5>Perth</h5>
            <h5>Melbourne</h5>
          </div>
        </div>
        <div className="footer-mid-wraper">
          <h3>UAE</h3>
          <div className="footer-wraper-sub">
            <h5>Dubai</h5>
            <h5>Abu Dhabi</h5>
            <h5>Sharjah</h5>
            <h5>Ajman</h5>
            <h5>Al Ain</h5>
          </div>
        </div>
        <div className="footer-mid-wraper">
          <h3>USA</h3>
          <div className="footer-wraper-sub">
            <h5>New York</h5>
            <h5>Los Angeles</h5>
            <h5>Chicago</h5>
            <h5>Houston</h5>
            <h5>Philadelphia</h5>
            <h5>San Diego</h5>
            <h5>Washington</h5>
            <h5>Boston</h5>
            <h5>Oklahoma City</h5>
            <h5>Las Vegas</h5>
          </div>
        </div>
        <div className="footer-mid-wraper">
          <h3>Maxico</h3>
          <div className="footer-wraper-sub">
            <h5>Mexico City</h5>
            <h5>Ecatepec</h5>
            <h5>Guadalajara</h5>
            <h5>Puebla City</h5>
            <h5>Ciudad Juárez</h5>
          </div>
        </div>
      </div>
      <Gap height={39} />
      <div className="footer-garis"></div>
      <Gap height={39} />
      <div className="footer-bot">
        <img src={Logo} alt="logo" />
        <h4>© 2020 Housesale Technologies Ltd.</h4>
        <h4>1760  Dancing Dove Lane, New York, USA</h4>
        <h4>sales@housesales.com</h4>
        <img src={Gp} alt="GooglePlay" />
        <img src={Ap} alt="AppStore" />
      </div>
    </div>
  )
}

export default Footer
