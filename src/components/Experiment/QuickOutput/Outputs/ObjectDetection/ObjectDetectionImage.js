import useBEMNaming from "../../../../../common/useBEMNaming";
import BoundingBox from "./BoundingBox";
import React from "react";
import {RangeSlider, useSlider} from "../../../../Common/Slider";

export function ObjectDetectionImage(props) {
  const {getElement, getBlock} = useBEMNaming("object-detection-image");
  const confidence = props.confidence;

  const [, sliderConfig] = useSlider({
    min: 0,
    max: confidence.maxProbability,
    value: confidence.state,
    step: 1,
    label: "Confidence Rating",
    classes: getElement("input-range")

  }, [confidence.state])


  return <div className={getBlock()}>
    <img alt={"placeholder"} className={getElement("image")} src={props.img}/>
    <div className={getElement("overlay-container")}>
      {props.filteredSections.map(section => <BoundingBox {...section.bounding_box} color={section.color}
                                                          hover={props.hover}/>)}
    </div>
    <div className={getElement("input-container")}>
      <RangeSlider {...sliderConfig} onChange={confidence.setState}/>
      <label className={getElement("input-number-container")} for={"input-number"}>

        <input type={"number"} min={0} max={confidence.maxProbability - 1} className={getElement("input-number")}
               value={confidence.state} onChange={(e) => confidence.setState(e.target.value)}/>
        %
      </label>

    </div>
  </div>;
}
