import React from 'react';
import useBEMNaming from "../../../../../../common/useBEMNaming";
import "./NoPredictions.scss";

export default function NoPredictions(props) {
  const {getBlock, getElement} = useBEMNaming("no-predictions");

  return <div className={getBlock()}>
    <p className={getElement("header")}>No predictions were found</p>
    <a href={`/model/${props.modelId}`} className={getElement("link")}>Try another image</a>
  </div>
}
