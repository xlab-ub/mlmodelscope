import React from "react";
import useBEMNaming from "../../../../../common/useBEMNaming";
import "./ImageEnhancement.scss";
import SingleColumnImageOutput from "../_Common/components/SingleColumnImageOutput";
import ImageEnhancementImage from "./ImageEnhancementImage";
import InputPreview from "../../InputPreview";
import {useHistory} from "react-router-dom";

export default function ImageEnhancement(props) {
  const {getElement, getBlock} = useBEMNaming('image-enhancement');
  const History = useHistory();

  const goBack = () => History?.back() || null;

  return <div className={getBlock()}>
    <InputPreview input={props.trial.inputs[0]} onBackClicked={goBack}/>
    <SingleColumnImageOutput
      modelId={props.trial.model.id}
      image={<ImageEnhancementImage feature={props.trial.results.responses[0].features[0]}/>}/>
  </div>
}
