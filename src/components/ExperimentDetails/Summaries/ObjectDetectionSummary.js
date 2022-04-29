import React from 'react';
import useBEMNaming from "../../../common/useBEMNaming";
import useObjectDetectionControl
  from "../../Experiment/QuickOutput/Outputs/ObjectDetection/hooks/useObjectDetectionControl";
import {ObjectDetectionImage} from "../../Experiment/QuickOutput/Outputs/ObjectDetection/ObjectDetectionImage";
import {ObjectDetectionTable} from "../../Experiment/QuickOutput/Outputs/ObjectDetection/ObjectDetectionTable";

export default function ObjectDetectionSummary(props) {
  const {getBlock, getElement} = useBEMNaming("object-detection-summary");
  const {filter, sections, hover, filteredSections} = useObjectDetectionControl(props.trial);

  return <div className={getBlock()}>
    <p className={getElement("header")}>Output:</p>
    <div className={getElement("results")}>
      <ObjectDetectionImage img={props.trial.inputs[0]}
                            filteredSections={filteredSections}
                            hover={hover}
                            confidence={filter.confidence}
                            showInputs

      />
      <ObjectDetectionTable sections={sections} category={filter.category} showPercentages/>
    </div>
  </div>

}
