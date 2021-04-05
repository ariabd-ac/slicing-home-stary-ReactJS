import React from 'react'
import { DummyInfo1, DummyInfo2, DummyInfo3 } from '../../assets'
import { CardInfo } from '../../components'
import './Info.css'

const Info = () => {
  return (
    <div className="page-info">
      <div className="wrapper-info">
        <CardInfo photoInfo={DummyInfo1} textInfo="Same great quality. New lower prices." />
        <CardInfo photoInfo={DummyInfo2} textInfo="Everyday Essentials, High quality affordable " />
        <CardInfo photoInfo={DummyInfo3} textInfo="Join the makeover journey " />
      </div>
    </div>
  )
}

export default Info
