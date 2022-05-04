import React from "react";
import useBEMNaming from "../../../../../common/useBEMNaming";
import useObjectDetectionControl from "./hooks/useObjectDetectionControl";
import {ObjectDetectionImage} from "./ObjectDetectionImage";
import {ObjectDetectionTable} from "./ObjectDetectionTable";
import NoPredictions from "../_Common/components/NoPredictions";

export default function ObjectDetection(props) {
  const {getElement, getBlock} = useBEMNaming("object-detection");
  const {hover, filteredSections, sections, filter} = useObjectDetectionControl(props.trial);

  const getBody = () => {
    if (sections.length === 0) return <NoPredictions/>

    return <div className={getElement("top-row")}>
      <ObjectDetectionImage img={props.trial.inputs[0]}
                            filteredSections={filteredSections}
                            hover={hover}
                            confidence={filter.confidence}
                            showInputs
      />
      <ObjectDetectionTable sections={sections} category={filter.category} showPercentages hover={hover}/>
    </div>
  }

  return <div className={getBlock()}>
    <div className={getElement("header")}>
      <h3 className={getElement("header-headline")}>Output</h3>
      <p className={getElement("header-subheading")}>Objects this model can identify in this image</p>
    </div>
    {getBody()}
    <div className={getElement("bottom-row")}>
      <a href={"#"} onClick={props.onBackClicked} className={getElement("bottom-row-btn")}>
        Try a different image
      </a>
    </div>
  </div>
}