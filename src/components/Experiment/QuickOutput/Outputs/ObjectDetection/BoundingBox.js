import React from 'react';
import {ConvertHexToRGB} from "./utils/HexConverter";

export default function BoundingBox(bounding_box) {
  let top = bounding_box.ymin;
  let left = bounding_box.xmin;
  let width = bounding_box.xmax
  let height = bounding_box.ymax;
  let color = bounding_box.color;
  let rgb = ConvertHexToRGB(color.background);
  let label = bounding_box.label;
  const style = {
    position: "absolute",
    top: top,
    left: left,
    width: width,
    height: height,
    backgroundColor: `rgba(${rgb.r},${rgb.g},${rgb.b}, 0.4)`,
    border: `1px solid ${color.background}`
  }

  const pStyle = {
    marginTop: -18,
    backgroundColor: color.background,
    marginLeft: -1,
    paddingLeft: 4,
    color: color.font,

  }


  return <div className={color.className} style={style}>
    <p style={pStyle}>
      {label}
    </p>
  </div>
}
