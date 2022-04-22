import React from 'react';
import {ConvertHexToRGB} from "../_Common/utils/HexConverter";

export default function BoundingBox(props) {
  let top = props.ymin * 100;
  let left = props.xmin * 100;
  let width = (props.xmax - props.xmin) * 100
  let height = (props.ymax - props.ymin) * 100;
  let color = props.color;
  let rgb = ConvertHexToRGB(color.backgroundColor);
  let label = props.label;
  const style = {
    position: "absolute",
    top: `${top}%`,
    left: `${left}%`,
    width: `${width}%`,
    height: `${height}%`,
    backgroundColor: `rgba(${rgb.r},${rgb.g},${rgb.b}, 0.3)`,
    border: `1px solid ${color.backgroundColor}`
  }

  const pStyle = {
    marginTop: -18,
    backgroundColor: color.backgroundColor,
    marginLeft: -1,
    paddingLeft: 4,
    color: color.fontColor,
    display: "none"

  }

  const onEnter = () => {
    if (props.hover) props.hover.enter(label);
  }
  const onLeave = () => {
    if (props.hover) props.hover.leave();
  }


  return <div className={color.className} style={style} onMouseEnter={onEnter} onMouseLeave={onLeave}>
    <p style={pStyle}>
      {label}
    </p>
  </div>
}
