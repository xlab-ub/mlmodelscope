import React from 'react';
import "./BoundingBox.scss";
import useBoundingBoxDisplay from "./useBoundingBoxDisplay";

export default function BoundingBox(props) {
  const {
    baseStyle,
    color,
    label,
    onEnter,
    onLeave,
    pStyle,
    percentage,
    LabelIsShown,
    rgb
  } = useBoundingBoxDisplay(props);

  const style = {...baseStyle, backgroundColor: `rgba(${rgb.r},${rgb.g},${rgb.b}, ${LabelIsShown ? 0.6 : 0.3})`}


  return (
    <div className={color.className} style={style}
         onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div style={pStyle} className={"color-block__label-wrapper"}>
        <p style={pStyle}>
          {label} ({percentage})
        </p>
      </div>
    </div>
  )
}
