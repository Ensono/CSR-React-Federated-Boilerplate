import React from 'runtime-library/lib/react'
import pictureData from './MF.jpeg'

export default function () {
  return <img src={pictureData} style={{width: '500px', borderRadius: '10px'}} />
}
