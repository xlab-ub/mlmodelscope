import React from 'react';
import useBEMNaming from "../../../../../../common/useBEMNaming";
import "./NoPredictions.scss";

export default function NoPredictions(props) {
  const {getBlock, getElement} = useBEMNaming("no-predictions");

  return <div className={getBlock()}>
    <p className={getElement("header")}>No predictions were found</p>
    <a href={"/models"} className={getElement("link")}>Try another model or image</a>
  </div>
}
