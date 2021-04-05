import React from 'react'

// css
import './Booking.css'

const Booking = () => {
  return (
    <div className="container-book">
      <div className="book-top">
        <div className="book-left"></div>
        <div className="book-right"></div>
      </div>
      <div className="book-bot">
        <div className="book-pers"></div>
        <div className="book-pers"></div>
        <div className="book-pers"></div>
        <div className="book-pers"></div>
        <button>Search</button>
      </div>
    </div>
  )
}

export default Booking
