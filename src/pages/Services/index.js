import React from 'react'
import { ICServices1, ICServices2, ICServices3, DummyServices } from '../../assets'
import { ServicesMenu } from '../../components/molecules'
import './Services.css'

const Services = () => {
  return (
    <div className="page-services">
      <div className="services-left">
        <h3>Why housesale Company?</h3>
        <ServicesMenu icon={ICServices1} title="Transparent pricing" desc="See fixed prices before you book. No hidden charges." />
        <ServicesMenu icon={ICServices2} title="Fully equipped" desc="We bring everything needed to get the job done well." />
        <ServicesMenu icon={ICServices3} title="Experts only" desc="Our professionals are well trained and have on-job expertise." />
      </div>
      <div className="services-right">
        <div className="servies-right-kotak">
          <img src={DummyServices} alt="DummyServices" className="services-image" />
        </div>
      </div>
    </div>
  )
}

export default Services
