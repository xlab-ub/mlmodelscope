import React, {useState} from 'react';
import useBEMNaming from "../../../common/useBEMNaming";
import {
  SemanticSegmentationImage
} from "../../Experiment/QuickOutput/Outputs/SemanticSegmentation/SemanticSegmentationImage";
import SemanticSegmentationTable
  from "../../Experiment/QuickOutput/Outputs/SemanticSegmentation/SemanticSegmentationTable";
import "./SemanticSegmentationSummary.scss";

export default function SemanticSegmentationSummary(props) {


  const [hoverNumber, setHoverNumber] = useState(0);

  const hover = (number) => {
    setHoverNumber(number);
  }

  const {getElement, getBlock} = useBEMNaming("semantic-segmentation-summary");


  const image = props.trial.inputs[0];
  const {height, int_mask, labels, width} = props.trial.results.responses[0].features[0].semantic_segment;
  const usedLabels = labels.map((label, index) => {
    return index > 0 && int_mask.indexOf(index) > -1
      ? {index: index - 1, label}
      : null;
  }).filter(l => l !== null);


  return <div className={getBlock()}>

    <div className={getElement("top-row")}>
      <SemanticSegmentationImage img={image}
                                 width={width}
                                 height={height}
                                 int_mask={int_mask}
                                 hoverNumber={hoverNumber}
      />
      <SemanticSegmentationTable labels={usedLabels} hover={hover}/>
    </div>

  </div>
}
