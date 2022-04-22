import useBEMNaming from "../../../../../common/useBEMNaming";
import BoundingBox from "./BoundingBox";
import React from "react";

export function ObjectDetectionImage(props) {
  const {getElement, getBlock} = useBEMNaming("object-detection-image");
  const confidence = props.confidence;


  return <div className={getBlock()}>
    <div className={getElement("image-wrapper")}>

      <img alt={"placeholder"} className={getElement("image")} src={props.img}/>
      <div className={getElement("overlay-container")}>
        {props.filteredSections.map((section, i) => <BoundingBox key={i} {...section.bounding_box} color={section.color}
                                                                 hover={props.hover}/>)}
      </div>

    </div>
    <div className={getElement("input-container")}>
      <input type={"range"} className={getElement("input-range")} value={confidence.state}
             onChange={(e) => confidence.setState(e.target.value)}/>
      <label className={getElement("input-number-container")} htmlFor={"input-number"}>

        <input type={"number"} min={0} max={confidence.maxProbability - 1} className={getElement("input-number")}
               value={confidence.state} onChange={(e) => confidence.setState(e.target.value)}/>
        %
      </label>

    </div>
  </div>;
}
