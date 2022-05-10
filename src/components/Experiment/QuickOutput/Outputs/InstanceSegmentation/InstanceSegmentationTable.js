import React from "react";
import useBEMNaming from "../../../../../common/useBEMNaming";
import "./InstanceSegmentationTable.scss";

export default function InstanceSegmentationTable(props) {
  const {getElement, getBlock} = useBEMNaming("instance-segmentation-table");

  const Row = (section) => {
    const displayedProbability = Math.round(section.probability * 100);
    const color = section.color;

    const isOpen = props.category.state.includes(section.instance_segment.label);
    const toggle = () => props.category.toggle(section.instance_segment.label);

    return <div className={getElement("row")} onClick={toggle}>
      <div className={getElement("row-left")}>
        <input name={`row-input-${section.instance_segment.label}`} type={"checkbox"}
               className={getElement("row-input-hidden")}
               value={isOpen} onChange={toggle}/>
        <div style={{backgroundColor: color.backgroundColor, borderColor: color.backgroundColor}}
             className={getElement(`row-input ${!isOpen && "row-input-closed"}`)}/>
        <label className={getElement("row-input-label")}
               for={`row-input-${section.instance_segment.label}`}>{section.instance_segment.label}</label>
      </div>
      {props.showPercentages &&
        <p className={"row-percentage"}>{displayedProbability}%</p>
      }
    </div>
  }

  const uniqueSections = props.sections.filter((section, index, array) => array.findIndex((val) => val.instance_segment.label === section.instance_segment.label) === index);

  return <div className={getBlock()}>
    {uniqueSections.map(section => <Row {...section} />)}
  </div>;
}
