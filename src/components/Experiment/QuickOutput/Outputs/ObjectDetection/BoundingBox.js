import React from 'react';
import {ConvertHexToRGB} from "../_Common/utils/HexConverter";
import ParseProbability from "../_Common/utils/ParseProbability";
import "./BoundingBox.scss";

export default function BoundingBox(props) {
  const normalize = (val) => {
    if (val < 0) val = 0;
    if (val > 1) val = 1;

    return val;
  }

  const ymin = normalize(props.ymin);
  const ymax = normalize(props.ymax);
  const xmin = normalize(props.xmin);
  const xmax = normalize(props.xmax);

  let top = ymin * 100;
  let left = xmin * 100;
  let width = (xmax - xmin) * 100
  let height = (ymax - ymin) * 100;
  let color = props.color;
  let rgb = ConvertHexToRGB(color.backgroundColor);
  let label = props.label;

  const isHoveredOn = props.hover.property === props.id;
  const hasHigherConfidence = props.probability * 100 > props.confidence;
  const hasNoHovers = props.hover.property === null;
  const isInCategories = props.labelIsInCategories(props);

  const IsShown = (hasNoHovers && hasHigherConfidence && isInCategories) ||
    (isHoveredOn)

  const isShown = (props.hover.property === props.id || props.probability * 100 > props.confidence) && (props.hover.property === null || props.hover.property === props.id)

  const style = {
    position: "absolute",
    top: `${top}%`,
    left: `${left}%`,
    width: `${width}%`,
    height: `${height}%`,
    backgroundColor: `rgba(${rgb.r},${rgb.g},${rgb.b}, 0.3)`,
    border: `3px solid ${color.backgroundColor}`,
    display: IsShown ? "block" : "none"
  }

  const pStyle = {
    backgroundColor: color.backgroundColor,
    color: color.fontColor,
    display: props.hover.property === props.id ? "block" : "none",
  }

  const onEnter = () => {
    if (props.hover) props.hover.enter(props.id, true);
  }
  const onLeave = () => {
    if (props.hover) props.hover.leave();
  }
  const percentage = ParseProbability(props.probability);

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
