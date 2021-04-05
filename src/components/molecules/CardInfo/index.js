import React from 'react';
import { Arrow } from '../../../assets';
import './CardInfo.css';

const CardInfo = ({ photoInfo, textInfo }) => {

  return (
    <div className="container-page-info">
      <img src={photoInfo} alt="DummyImage" />
      <div className="keterangan">
        <img src={Arrow} alt="Arrow" />
        <p>{textInfo}</p>
      </div>
    </div>
  )
}

export default CardInfo
