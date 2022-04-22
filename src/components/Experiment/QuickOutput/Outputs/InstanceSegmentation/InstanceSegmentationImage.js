import React from "react";
import useBEMNaming from "../../../../../common/useBEMNaming";

export default function InstanceSegmentationImage(props) {
  const {getBlock, getElement} = useBEMNaming("instance-segmentation-image");


  return <div className={getBlock()}>
    <div className={getElement("image-wrapper")}>
      <img alt={"placeholder"} className={getElement("image")} src={props.img}/>
    </div>
  </div>
}
