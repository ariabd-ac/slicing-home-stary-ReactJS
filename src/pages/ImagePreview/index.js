import React from 'react'
import { DummyImagePreview1, DummyImagePreview2, DummyImagePreview3, DummyImagePreview4, DummyImagePreview5, DummyImagePreview6, DummyImagePreview7, DummyImagePreview8 } from '../../assets'
import { ImageGalery } from '../../components'

import './ImagePreview.css'

const ImagePreview = () => {

  let data = [
    {
      src: DummyImagePreview1
    },
    {
      src: DummyImagePreview2
    },
    {
      src: DummyImagePreview3
    },
    {
      src: DummyImagePreview4
    },
    {
      src: DummyImagePreview5
    },
    {
      src: DummyImagePreview6
    },
    {
      src: DummyImagePreview7
    },
    {
      src: DummyImagePreview8
    },
  ]

  return (
    <div className="image-preview-page">
      <h3>More ideas and inspiration</h3>
      <div className="img-galery">
        {data.map(dt => {
          return (
            <ImageGalery ImgGalry={dt.src} key={dt.src} />
          )
        })}

      </div>
    </div>
  )
}

export default ImagePreview
