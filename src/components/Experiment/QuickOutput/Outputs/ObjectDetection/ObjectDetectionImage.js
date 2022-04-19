import useBEMNaming from "../../../../../common/useBEMNaming";
import BoundingBox from "./BoundingBox";
import React from "react";

export function ObjectDetectionImage(props) {
  const {getElement, getBlock} = useBEMNaming("object-detection-image");

  return <div className={getBlock()}>
    <img alt={"placeholder"} className={getElement("image")} src={props.img}/>
    <div className={getElement("overlay-container")}>
      {props.filteredSections.map(section => <BoundingBox {...section.bounding_box} color={section.color}
                                                          hover={props.hover}/>)}
    </div>
  </div>;
}
