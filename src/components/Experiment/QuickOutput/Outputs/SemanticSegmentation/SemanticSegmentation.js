import React from 'react';
import useBEMNaming from "../../../../../common/useBEMNaming";
import {SemanticSegmentationImage} from "./SemanticSegmentationImage";
import "./SemanticSegmentation.scss";
import SemanticSegmentationTable from "./SemanticSegmentationTable";

export default function SemanticSegmentation(props) {
  const {getElement, getBlock} = useBEMNaming("semantic-segmentation");
  const image = props.trial.inputs[0];
  const {height, int_mask, labels, width} = props.trial.results.responses[0].features[0].semantic_segment;
  const usedLabels = labels.map((label, index) => {
    return index > 0 && int_mask.indexOf(index) > -1
      ? { index: index - 1, label }
      : null;
  }).filter(l => l !== null);

  return <div className={getBlock()}>
    <div className={getElement("header")}>
      <h3 className={getElement("header-headline")}>Output</h3>
      <p className={getElement("header-subheading")}>What each object detected is</p>
    </div>
    <div className={getElement("top-row")}>
      <SemanticSegmentationImage img={image}
                                 width={width}
                                 height={height}
                                 int_mask={int_mask}
      />
      <SemanticSegmentationTable labels={usedLabels} />
    </div>
    <div className={getElement("bottom-row")}>
      <a href={"/test"} className={getElement("bottom-row-btn")}>
        Try a different image
      </a>
    </div>
  </div>
}
