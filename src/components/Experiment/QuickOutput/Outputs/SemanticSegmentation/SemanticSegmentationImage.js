import useBEMNaming from "../../../../../common/useBEMNaming";
import React from "react";
import FindStartX from "./utils/FindStartX";


export function SemanticSegmentationImage(props) {
  const {getElement, getBlock} = useBEMNaming("image-segmentation-image");

  const getFillColor = (number) => {
    return props.colorMap.find(color => color.number === number).backgroundColor;
  }

  const Overlay = () => {
    const PixelRow = ({row, rowNum}) => {
      const Line = ({line, startX}) => {
        const color = getFillColor(line[0]);
        return <path stroke={color} d={`M ${startX},${rowNum} l ${line.length},0`}/>
      }

      return row.map((group, groupNum) => <Line line={group} startX={FindStartX(group, groupNum)}/>)
    }

    return <svg className={getElement("overlay-container")}>
      {props.rows.map((row, rowIdx) => <PixelRow row={row} rowNum={rowIdx}/>)}
    </svg>
  }


  return <div className={getBlock()}>
    <div className={getElement("image-wrapper")}>
      <img alt={"placeholder"} className={getElement("image")} src={props.img}/>
      <div className={getElement("overlay-container")}>
        <Overlay/>
      </div>
    </div>
  </div>
}
