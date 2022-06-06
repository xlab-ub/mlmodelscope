import useBEMNaming from "../../../../../common/useBEMNaming";
import BoundingBox from "./BoundingBoxes/BoundingBox";
import React from "react";
import "./ObjectDetectionImage.scss";
import {BoundingBoxTypes} from "./utils/boundingBoxTypes";
import SolidContourBoundingBox from "./BoundingBoxes/SolidContourBoundingBox";

export function ObjectDetectionImage(props) {
  const {getElement, getBlock} = useBEMNaming("object-detection-image");

  const getBoundingBox = (section) => {
    return section[props.boundingBox.property];
  }

  const getBoundingBoxComponent = () => {
    const type = props.boundingBox.boundingBoxType ?? BoundingBoxTypes.default;

    switch (type) {
      case BoundingBoxTypes.contour_mask:
        return (props) => <SolidContourBoundingBox {...props} />
      case BoundingBoxTypes.solid_mask:
        return (props) => <SolidContourBoundingBox {...props} />
      case BoundingBoxTypes.default:
      default:
        return (props) => <BoundingBox {...props} />
    }
  }

  const BoundingBoxComponent = getBoundingBoxComponent();
  const clickHandle = () => {
    console.log("click handle");

  }

  return <>
    <div id={getBlock()} className={getBlock()}>
      <div className={getElement("wrapper")}>
        <div className={getElement("overlay")}>
          <img ref={props.imageRef} id={getElement("image")} alt={"placeholder"} className={getElement("image")}
               src={props.img}/>

          {props.sections.map((section) => <BoundingBoxComponent key={section.id} {...getBoundingBox(section)}
                                                                 color={section.color}
                                                                 hover={props.hover} id={section.id}
                                                                 probability={section.probability}
                                                                 confidence={props.confidence.state}
                                                                 labelIsInCategories={props.labelIsInCategories}
                                                                 hasMask={props.boundingBox.hasMask}
                                                                 hasBoundingBox={props.boundingBox.hasBoundingBox}
                                                                 hasContourLines={props.boundingBox.hasContourLines}


          />)}
        </div>
      </div>
      {props.showInputs && props.isInstanceSegmentation && <InstanceSegmentationCheckboxes {...props} />}
      {props.showInputs && <ObjectDetectionImageInputs {...props} getElement={getElement}/>}
    </div>
  </>;
}

function InstanceSegmentationCheckboxes(props) {
  const {getElement} = useBEMNaming("object-detection-image");

  return <div className={getElement("options-box")}>
    <p className={getElement("options-title")}>View Options:</p>
    <div className={getElement("options-area")}>

      <label onMouseUp={props.boundingBox.toggleBoundingBox} className={getElement("option-group")}>
        <input className={getElement("checkbox")} name={"bounding_box"}
               type={"checkbox"}
               checked={props.boundingBox.hasBoundingBox}/>
        <span className={getElement("checkmark")}></span>
        <span for={"bounding_box"}
              className={getElement("option-label")}>Bounding box</span>
      </label>
      <label onMouseUp={props.boundingBox.toggleMask} className={getElement("option-group")}>
        <input className={getElement("checkbox")} name={"mask"}
               type={"checkbox"}
               checked={props.boundingBox.hasMask}/>
        <span className={getElement("checkmark")}></span>
        <span for="mask" className={getElement("option-label")}>Mask</span>
      </label>
      <label onMouseUp={props.boundingBox.toggleContourLine} className={getElement("option-group")}>
        <input className={getElement("checkbox")} name={"mask"}
               type={"checkbox"}
               checked={props.boundingBox.hasContourLines}/>
        <span className={getElement("checkmark")}></span>
        <span for="mask" className={getElement("option-label")}>Contour Lines</span>
      </label>
    </div>

  </div>
}


function ObjectDetectionImageInputs(props) {
  return <div className={props.getElement("input-wrapper")}>
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
