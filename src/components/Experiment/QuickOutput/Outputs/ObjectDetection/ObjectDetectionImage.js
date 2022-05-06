import useBEMNaming from "../../../../../common/useBEMNaming";
import BoundingBox from "./BoundingBox";
import React, {useEffect, useState} from "react";

export function ObjectDetectionImage(props) {
  const {getElement, getBlock} = useBEMNaming("object-detection-image");


  return <>
    <div className={getBlock()}>

      <div className={getElement("overlay")}>
        <div className={getElement("overlay-container")}>
          <img id={"object-detection-image"} alt={"placeholder"} className={getElement("image")} src={props.img}/>

          {props.filteredSections.map((section) => <BoundingBox key={section.id} {...section.bounding_box}
                                                                color={section.color}
                                                                hover={props.hover} id={section.id}
                                                                probability={section.probability}
          />)}
        </div>
      </div>

      {props.showInputs && <ObjectDetectionImageInputs {...props} getElement={getElement}/>

      }

    </div>

  </>;
}


function ObjectDetectionImageInputs(props) {
  const [height, setHeight] = useState(0);

  const findNewHeight = () => {
    const img = document.getElementById("object-detection-image");
    if (img && img.complete)
      setHeight(img.clientHeight);
    else if (img)
      img.addEventListener('load', findNewHeight);
  }

  useEffect(() => {
    findNewHeight();

  })

  useEffect(() => {
    const listener = window.addEventListener("resize", () => {
      findNewHeight();
    });

    return () => {
      window.removeEventListener("resize", listener);
    }
  }, [])


  const margin = height + 12;
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
