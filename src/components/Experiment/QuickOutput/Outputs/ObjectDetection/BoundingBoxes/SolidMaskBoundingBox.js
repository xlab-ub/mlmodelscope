import React, {useEffect} from "react";
import useBoundingBoxDisplay from "./useBoundingBoxDisplay";
import "./BoundingBox.scss";
import useBEMNaming from "../../../../../../common/useBEMNaming";
import {generateOverlayDataUri} from "../utils/generateOverlay";

export default function SolidMaskBoundingBox(props) {
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

  const getAlpha = (value) => {
    const isShown = value > 0.3;
    return isShown ? 150 : 0;
  }

  const generateOverlayImage = () => {
    dataUri = generateOverlayDataUri(props, getAlpha);
  }


  useEffect(() => {
    generateOverlayImage();
  }, [])

  return (
    <div className={getBlock()} style={baseStyle}
         onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div style={pStyle} className={getElement("label-wrapper")}>


        <p className={getElement("label")} style={pStyle}>
          {label} ({percentage})
        </p>
      </div>
    </div>
  )
}
