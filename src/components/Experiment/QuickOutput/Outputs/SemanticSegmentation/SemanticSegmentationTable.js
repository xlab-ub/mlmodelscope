import React from "react";
import useBEMNaming from "../../../../../common/useBEMNaming";
import {colors} from "../_Common/utils/Colors";
import "./SemanticSegmentationTable.scss";

export default function SemanticSegmentationTable(props) {
  const { getBlock, getElement } = useBEMNaming("semantic-segmentation-table");

  const renderRow = (label) => {
    const color = colors[label.index % colors.length].background;

    return <div className={getElement("row")}>
      <div className={getElement("row-left")}>
        <input name={`row-input-${label.label}`} type={"checkbox"}
               className={getElement("row-input-hidden")}
               checked={1} />
        <div style={{backgroundColor: color, borderColor: color}}
             className={getElement(`row-input`)}/>
        <label className={getElement("row-input-label")}
               htmlFor={`row-input-${label.label}`}>{label.label}</label>
      </div>
    </div>
  }

  return <div className={getBlock()}>
    {props.labels.map(renderRow)}
  </div>
}
