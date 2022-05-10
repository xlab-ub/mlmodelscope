import useBEMNaming from "../../../../../common/useBEMNaming";
import BoundingBox from "./BoundingBox";
import React from "react";
import "./ObjectDetectionImage.scss";

export function ObjectDetectionImage(props) {
  const {getElement, getBlock} = useBEMNaming("object-detection-image");

  return <>
    <div id={getBlock()} className={getBlock()}>
      <div className={getElement("overlay")}>
        <div className={getElement("overlay-container")}>
          <img ref={props.imageRef} id={getElement("image")} alt={"placeholder"} className={getElement("image")}
               src={props.img}/>

          {props.sections.map((section) => <BoundingBox key={section.id} {...section.bounding_box}
                                                        color={section.color}
                                                        hover={props.hover} id={section.id}
                                                        probability={section.probability}
                                                        confidence={props.confidence.state}
                                                        labelIsInCategories={props.labelIsInCategories}
          />)}
        </div>
      </div>

      {props.showInputs && <ObjectDetectionImageInputs {...props} getElement={getElement}/>}
    </div>
  </>;
}

function ObjectDetectionImageInputs(props) {


  const margin = props.imageHeight + 12;
  return <div style={{marginTop: `${margin}px`}} className={props.getElement("input-wrapper")}>
    <p className={props.getElement("input-label")}> Confidence Threshold</p>
    <div className={props.getElement("input-container")}>
      <input type={"range"} min={0} max={props.confidence.maxProbability} className={props.getElement("input-range")}
             value={props.confidence.state}
             onChange={(e) => props.confidence.setState(e.target.value)}/>
      <label className={props.getElement("input-number-container")} htmlFor={"input-number"}>

        <input type={"number"} min={0} max={props.confidence.maxProbability}
               className={props.getElement("input-number")}
               value={props.confidence.state} onChange={(e) => props.confidence.setState(e.target.value)}/>
        %
      </label>

    </div>
  </div>
}
