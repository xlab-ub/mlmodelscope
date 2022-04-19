import useBEMNaming from "../../../../../common/useBEMNaming";
import React from "react";

export function ObjectDetectionTable(props) {
  const {getElement, getBlock} = useBEMNaming("object-detection-table");


  return <div className={getBlock()}>
    {props.filteredSections.map(section => <p key={section.bounding_box.label}>{section.bounding_box.label}</p>)}
  </div>;
}
