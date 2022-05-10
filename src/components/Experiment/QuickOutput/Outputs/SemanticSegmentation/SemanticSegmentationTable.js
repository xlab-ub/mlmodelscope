import React from "react";
import useBEMNaming from "../../../../../common/useBEMNaming";
import {colors} from "../_Common/utils/Colors";
import "./SemanticSegmentationTable.scss";
import {ReactComponent as EyeOpen} from "../../../../../resources/icons/eye-open.svg";

export default function SemanticSegmentationTable(props) {
  const {getBlock, getElement} = useBEMNaming("semantic-segmentation-table");

  const renderRow = (label) => {
    const color = colors[label.index % colors.length].background;

    return <div onMouseEnter={() => props.hover(label.index + 1)} className={getElement("row")}>
      <div className={getElement("row-left")}>
        <div className={getElement("eye-wrapper")}>
          <EyeOpen/>
        </div>

      </div>
      <div className={getElement("row-middle")}>
        <input name={`row-input-${label.label}`} type={"checkbox"}
               className={getElement("row-input-hidden")}
               checked={1}/>
        <div style={{backgroundColor: color, borderColor: color}}
             className={getElement(`row-input`)}/>
        <label className={getElement("row-input-label")}
               htmlFor={`row-input-${label.label}`}>{label.label}</label>
      </div>
      <div className={getElement("row-right")}></div>
    </div>
  }

  return <div className={getBlock()}>
    <div className={getElement("header-row")}>
      <p className={getElement("header-row-item row-left")}>
        Hide
      </p>
      <p className={getElement("header-row-item row-middle")}>
        Objects Detected
      </p>
      <p></p>
    </div>
    {props.labels.map(renderRow)}
  </div>
}
