import React from 'react'
import './ServicesMenu.css'

const ServicesMenu = ({ icon, title, desc }) => {
  return (
    // <>
    <div className="services-left-menu">
      <img src={icon} alt="Icon" className="service-icon" />
      <div className="services-left-menu-keterangan">
        <h4 className="title">{title}</h4>
        <h4>{desc}</h4>
      </div>
    </div>
  )
}

export default ServicesMenu
