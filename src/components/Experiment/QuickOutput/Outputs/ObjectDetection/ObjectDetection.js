import React from "react";
import useBEMNaming from "../../../../../common/useBEMNaming";
import useObjectDetectionControl from "./hooks/useObjectDetectionControl";
import Rating from "../Classification/Rating";

export default function ObjectDetection(props) {
  const {getElement, getBlock} = useBEMNaming("object-detection");
  const {sectionFilters, hover, blockOpacity} = useObjectDetectionControl([]);

  return <div className={getBlock()}>
    <div className={getElement("header")}>
      <h3 className={"header-headline"}>Output</h3>
      <p>What each object detected is</p>
    </div>
    <div className={getElement("top-row")}>
      <div className={getElement("top-row-img")}>
        <div className={"top-row-img-overlay-container"}>

        </div>
        <img  />
      </div>
      <div className={"top-row-table"}>

      </div>
    </div>
    <div className={getElement("rating")}>
      <Rating  />
    </div>
    <div className={getElement("bottom-row")}>
      <button>
        Try a different image
      </button>
    </div>
  </div>
}
