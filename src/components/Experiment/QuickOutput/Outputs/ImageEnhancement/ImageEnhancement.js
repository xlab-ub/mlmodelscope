import React from "react";
import useBEMNaming from "../../../../../common/useBEMNaming";
import "./ImageEnhancement.scss";

export default function ImageEnhancement(props) {
  const {getElement, getBlock} = useBEMNaming('image-enhancement');

  return <div className={getBlock()}>
    <h3 className={getElement('title')}>Output</h3>
    <img className={getElement('output')} src={`data:image/jpeg;base64,${props.feature.raw_image.jpeg_data}`} />
  </div>
}