import React from "react";
import useBEMNaming from "../../../../../common/useBEMNaming";
import "./ImageEnhancementImage.scss"

export default function ImageEnhancementImage(props) {
  const {getElement} = useBEMNaming("image-enhancement-image");

  return <img className={getElement('output')} src={`data:image/jpeg;base64,${props.feature.raw_image.jpeg_data}`}/>
}
