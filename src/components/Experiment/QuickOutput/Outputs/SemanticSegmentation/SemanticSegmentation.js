import React from 'react';
import useBEMNaming from "../../../../../common/useBEMNaming";
import {SemanticSegmentationImage} from "./SemanticSegmentationImage";
import useImageSegmentationControl from "./hooks/useImageSegmentationControl";

export default function SemanticSegmentation(props) {
  const {getElement, getBlock} = useBEMNaming("object-detection");
  const {colorMap, rows, hover} = useImageSegmentationControl(props.trial);


  return <div className={getBlock()}>
    <div className={getElement("header")}>
      <h3 className={getElement("header-headline")}>Output</h3>
      <p className={getElement("header-subheading")}>What each object detected is</p>
    </div>
    <div className={getElement("top-row")}>
      <SemanticSegmentationImage img={props.trial.inputs[0]}
                                 hover={hover}
                                 colorMap={colorMap}
                                 rows={rows}

      />
      <div/>
    </div>
    <div className={getElement("bottom-row")}>
      <a href={"/test"} className={getElement("bottom-row-btn")}>
        Try a different image
      </a>
    </div>
  </div>
}
