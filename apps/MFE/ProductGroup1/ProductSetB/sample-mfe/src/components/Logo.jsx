import React from "runtime-library/lib/react"
import pictureData from "./MF.jpeg"

export default function () {
  return <img alt="test" src={pictureData} style={{width: "500px", borderRadius: "10px"}} />
}
