import useBEMNaming from "../../../../../common/useBEMNaming";
import React from "react";

export function ObjectDetectionTable(props) {
  const {getElement, getBlock} = useBEMNaming("object-detection-table");

  const Row = (section) => {
    const displayedProbability = Math.round(section.probability * 100);
    const color = section.color;

    const isOpen = props.category.state.includes(section.bounding_box.label);
    const toggle = () => props.category.toggle(section.bounding_box.label);

    return <div className={getElement("row")} onClick={toggle}>
      <div className={getElement("row-left")}>
        <input name={`row-input-${section.bounding_box.label}`} type={"checkbox"}
               className={getElement("row-input-hidden")}
               value={isOpen} onChange={toggle}/>
        <div style={{backgroundColor: color.backgroundColor, borderColor: color.backgroundColor}}
             className={getElement(`row-input ${!isOpen && "row-input-closed"}`)}/>
        <label className={getElement("row-input-label")}
               for={`row-input-${section.bounding_box.label}`}>{section.bounding_box.label}</label>
      </div>
      {props.showPercentages &&
        <p className={"row-percentage"}>{displayedProbability}%</p>
      }
    </div>
  }

  const uniqueSections = props.sections.filter((section, index, array) => array.findIndex((val) => val.bounding_box.label === section.bounding_box.label) === index);

  return <div className={getBlock()}>
    {uniqueSections.map(section => <Row {...section} />)}
  </div>;
}
