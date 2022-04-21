import React from 'react';
import useBEMNaming from "../../../../../common/useBEMNaming";
import useObjectDetectionControl from "../ObjectDetection/hooks/useObjectDetectionControl";
import {ObjectDetectionImage} from "../ObjectDetection/ObjectDetectionImage";
import {ObjectDetectionTable} from "../ObjectDetection/ObjectDetectionTable";

export default function ImageSegmentation(props) {
  const {getElement, getBlock} = useBEMNaming("object-detection");
  const {hover, filteredSections, sections, filter} = useObjectDetectionControl(props.trial);


  return <div className={getBlock()}>
    <div className={getElement("header")}>
      <h3 className={getElement("header-headline")}>Output</h3>
      <p className={getElement("header-subheading")}>What each object detected is</p>
    </div>
    <div className={getElement("top-row")}>
      <ObjectDetectionImage img={props.trial.inputs[0]}
                            filteredSections={filteredSections}
                            hover={hover}
                            confidence={filter.confidence}
      />
      <ObjectDetectionTable sections={sections} category={filter.category}/>
    </div>
    <div className={getElement("bottom-row")}>
      <a href={"/test"} className={getElement("bottom-row-btn")}>
        Try a different image
      </a>
    </div>
  </div>
}
