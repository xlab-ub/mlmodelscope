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
        {props.filteredSections.map((section) => <BoundingBox key={section.id} {...section.bounding_box}
                                                              color={section.color}
                                                              hover={props.hover} id={section.id}
                                                              probability={section.probability}
        />)}
      </div>

    </div>
    {props.showInputs &&
      <>
        <p className={getElement("input-label")}> Confidence Threshold</p>
        <div className={getElement("input-container")}>
          <input type={"range"} min={0} max={confidence.maxProbability} className={getElement("input-range")}
                 value={confidence.state}
                 onChange={(e) => confidence.setState(e.target.value)}/>
          <label className={getElement("input-number-container")} htmlFor={"input-number"}>

            <input type={"number"} min={0} max={confidence.maxProbability} className={getElement("input-number")}
                   value={confidence.state} onChange={(e) => confidence.setState(e.target.value)}/>
            %
          </label>

        </div>
      </>
    }
  </div>;
}
