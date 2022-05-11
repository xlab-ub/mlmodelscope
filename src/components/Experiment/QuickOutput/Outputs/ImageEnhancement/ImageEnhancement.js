import React from "react";
import useBEMNaming from "../../../../../common/useBEMNaming";
import "./ImageEnhancement.scss";
import SingleColumnImageOutput from "../_Common/components/SingleColumnImageOutput";
import ImageEnhancementImage from "./ImageEnhancementImage";
import {useHistory} from "react-router-dom";

export default function ImageEnhancement(props) {
  const {getElement, getBlock} = useBEMNaming('image-enhancement');
  const History = useHistory();

  const goBack = () => History?.back() || null;

  return <div className={getBlock()}>
    <div className={getElement("input")}>
      <h3 className={getElement('title')}>Input Image</h3>
      <img className={getElement('image')} src={props.trial.inputs[0]}/>
      <button className={getElement('back-button')} onClick={goBack}>Try a different image
      </button>
    </div>
    <SingleColumnImageOutput
      modelId={props.trial.model.id}
      image={<ImageEnhancementImage feature={props.trial.results.responses[0].features[0]}/>}/>
  </div>
}
