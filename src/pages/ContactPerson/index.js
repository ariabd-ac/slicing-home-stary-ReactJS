import React from 'react'
import { ICIndonesia } from '../../assets'
import { Input } from '../../components'
import './ContactPerson.css'

const ContactPerson = () => {
  return (
    <div className="contact-person-page">
      <div className="contact-person-wraper">
        <div className="contact-person-text">
          <h3>Book professionals from your phone</h3>
          <h4>Enter your mobile number to get the professionals help</h4>
        </div>
        <div className="contact-person-input-number">
          <div className="contact-person-phone">
            <img src={ICIndonesia} alt="Indonesia" />
            <p>+62</p>
          </div>
          <Input className="input-number" />
        </div>
      </div>
    </div>
  )
}

export default ContactPerson
