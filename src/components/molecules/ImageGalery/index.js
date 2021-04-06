import React from 'react'
import './ImageGalery.css'


const ImageGalery = ({ ImgGalry }) => {
  return (
    <div className="image-preview-wraper">
      {/* <img src={require(`../../../assets/Dummy/${ImgGalry}.png`)} alt="dummyPreview" /> */}
      <img src={ImgGalry} alt="dummyPreview" />
    </div>
  )
}

export default ImageGalery
