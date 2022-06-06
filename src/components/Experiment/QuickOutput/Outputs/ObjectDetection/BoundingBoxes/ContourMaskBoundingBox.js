import React, {useEffect} from "react";
import useBoundingBoxDisplay from "./useBoundingBoxDisplay";
import "./BoundingBox.scss";
import useBEMNaming from "../../../../../../common/useBEMNaming";
import {generateOverlayDataUri} from "../utils/generateOverlay";

export default function ContourMaskBoundingBox(props) {
  const {getBlock, getElement} = useBEMNaming("bounding-box");
  const {
    baseStyle,
    pStyle,
    percentage,
    onLeave,
    label,
    onEnter,
  } = useBoundingBoxDisplay(props);
  let dataUri = null;
  const overlayRef = React.createRef();

  const getAlpha = (value) => value * 100;

  const generateOverlayImage = () => {
    dataUri = generateOverlayDataUri(props, getAlpha);
    overlayRef.current.src = dataUri;
  }

  useEffect(() => {
    generateOverlayImage();
  }, [])

  return (
    <div className={getBlock()} style={{...baseStyle, borderColor: "transparent"}}
         onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <img
        ref={overlayRef} className={getElement("overlay")}/>
      <div style={pStyle} className={getElement("label-wrapper")}>
        <p className={getElement("label")} style={pStyle}>
          {label} ({percentage})
        </p>
      </div>
    </div>
  )
}
