import React from 'react';
import useBEMNaming from "../../../common/useBEMNaming";
import ImageEnhancementImage from "../../Experiment/QuickOutput/Outputs/ImageEnhancement/ImageEnhancementImage";
import "./ImageEnhancementSummary.scss";

export default function ImageEnhancementSummary(props) {
  const {getBlock, getElement} = useBEMNaming("image-enhancement-summary");
  const goBack = () => History?.back() || null;

  return <div className={getBlock()}>
    <div className={getElement("input")}>
      <h3 className={getElement('title')}>Original Image Input</h3>
      <img className={getElement('image')} src={props.trial.inputs[0]}/>

    </div>
    <div className={getElement("summary")}>
      <div className={getElement("summary__header")}>
        <h3 className={getElement("summary__header-heading")}>Enhanced Image Output</h3>
      </div>
      <div className={getElement("summary__content")}>
        <ImageEnhancementImage feature={props.trial.results.responses[0].features[0]}/>
      </div>
    </div>
  </div>
}
