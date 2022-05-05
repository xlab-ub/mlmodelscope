import React from 'react';
import useBEMNaming from "../../../../../common/useBEMNaming";
import {SemanticSegmentationImage} from "./SemanticSegmentationImage";
import "./SemanticSegmentation.scss";

export default function SemanticSegmentation(props) {
  const {getElement, getBlock} = useBEMNaming("semantic-segmentation");

  return <div className={getBlock()}>
    <div className={getElement("header")}>
      <h3 className={getElement("header-headline")}>Output</h3>
      <p className={getElement("header-subheading")}>What each object detected is</p>
    </div>
    <div className={getElement("top-row")}>
      <SemanticSegmentationImage img={props.trial.inputs[0]}
                                 width={props.trial.results.responses[0].features[0].semantic_segment.width}
                                 height={props.trial.results.responses[0].features[0].semantic_segment.height}
                                 int_mask={props.trial.results.responses[0].features[0].semantic_segment.int_mask}
      />
    </div>
    <div className={getElement("bottom-row")}>
      <a href={"/test"} className={getElement("bottom-row-btn")}>
        Try a different image
      </a>
    </div>
  </div>
}
