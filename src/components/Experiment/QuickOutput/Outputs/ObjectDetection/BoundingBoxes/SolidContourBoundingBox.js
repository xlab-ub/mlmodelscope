import React, {useEffect} from "react";
import useBoundingBoxDisplay from "./useBoundingBoxDisplay";
import "./BoundingBox.scss";
import useBEMNaming from "../../../../../../common/useBEMNaming";
import {findContourLine, generateOverlayDataUri, splitIntoRows} from "../utils/generateOverlay";

export default function SolidContourBoundingBox(props) {
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
  const contourRef = React.createRef();


  const showPixel = (value) => value > 0.2;


  const getAlpha = (value) => {
    const isShown = showPixel(value);
    return isShown ? 150 : 0;
  }

  const getContourAlpha = (value) => value ? 250 : 0;

  const generateOverlayImage = () => {
    dataUri = generateOverlayDataUri(props, getAlpha);
    if (overlayRef.current)
      overlayRef.current.src = dataUri;
  }

  const generateContour = () => {
    let rows = splitIntoRows(props, showPixel);
    let contour = findContourLine(rows).flat();

    let duri = generateOverlayDataUri({...props, float_mask: contour}, getContourAlpha)

    if (contourRef.current)
      contourRef.current.src = duri;
  }


  useEffect(() => {
    generateOverlayImage();
    generateContour();
  }, []);

  const style = {...baseStyle, border: props.hasBoundingBox ? baseStyle.border : "none"}

  return (
    <div className={getBlock()} style={style}
         onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {props.hasMask &&
        <img
          ref={overlayRef} className={getElement("overlay")}/>
      }
      {props.hasContourLines &&
        <img ref={contourRef} className={getElement("overlay")}/>
      }
      <div style={pStyle} className={getElement("label-wrapper")}>


        <p className={getElement("label")} style={pStyle}>
          {label} ({percentage})
        </p>
      </div>
    </div>
  )
}
