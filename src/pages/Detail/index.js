import React from 'react'
import { DummyDetail1, DummyDetail2, DummyDetail3 } from '../../assets'
import { Button, Gap } from '../../components'
import './Detail.css'

const Detail = () => {

  let data = [
    {
      id: 1,
      src: DummyDetail1
    },
    {
      id: 2,
      src: DummyDetail2
    },
    {
      id: 3,
      src: DummyDetail3
    },
  ]


  return (
    <div className="detail-page">
      <h3>More ideas and inspiration</h3>
      <div className="detail-wraper">
        <div className="detail-left">
          <p> Housesale chose to work together with the Lebanese designer Nada Debs. We are thrilled to present this collaboration and the LJUV collection, and we hope that you can see, feel, use the connection between a designer from the Middle East  democratic design.
          </p>
          <br />
          <p> Nada Debs is a Levantine designer living and working in Beirut. Her work spans scale and discipline: from product to furniture design to one-off commission across craft, art, fashion, and interiors. Nada grew up in Japan, studied design in Rhode Island School of Design in the US, and has spent significant periods living and traveling the world, finding connections of each of her experiences in all her work. She calls her approach handmade, and heart-made!
         </p>
          <Gap height={29} />
          <Button title="More Collection" />
        </div>
        <div className="detail-right">

          {data.map(dta => {
            return (
              <img src={dta.src} alt="dummydetail" key={dta.id} />
            )
          })}
        </div>
      </div>
      <Gap height={39} />
      <div className="detail-garis"></div>
    </div>
  )
}

export default Detail
