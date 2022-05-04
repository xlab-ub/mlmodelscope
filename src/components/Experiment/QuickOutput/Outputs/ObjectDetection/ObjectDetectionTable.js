import useBEMNaming from "../../../../../common/useBEMNaming";
import React from "react";

export function ObjectDetectionTable(props) {
  const {getElement, getBlock} = useBEMNaming("object-detection-table");

  const Row = (section) => {
    const displayedProbability = Math.round(section.probability * 100);
    const color = section.color;

    const isOpen = props.category.state.includes(section.id);
    const toggle = () => props.category.toggle(section.id);
    const hover = () => props.hover.enter(section.id);
    const leave = () => props.hover.leave();

    const isHovered = hover.property && hover.property === section.id;

    const style = {
      backgroundColor: isHovered ? "red" : "inherit",
    }


    return <div style={style} className={getElement("row")} onClick={toggle} onMouseEnter={hover} onMouseLeave={leave}>
      <div className={getElement("row-left")}>
        <input name={`row-input-${section.bounding_box.label}`} type={"checkbox"}
               className={getElement("row-input-hidden")}
               value={isOpen} onChange={toggle}/>
        <div style={{backgroundColor: color.backgroundColor, borderColor: color.backgroundColor}}
             className={getElement(`row-input ${!isOpen && "row-input-closed"}`)}/>
        <label className={getElement("row-input-label")}
               htmlFor={`row-input-${section.bounding_box.label}`}>{section.bounding_box.label}</label>
      </div>
      {props.showPercentages &&
        <p className={"row-percentage"}>{displayedProbability}%</p>
      }
    </div>
  }


  const sortedSections = props.sections.sort((a, b) => b.probability - a.probability);

  return <div className={getBlock()}>
    <div className={getElement("header-row")}>
      <p>
        Objects Detected ({sortedSections.length} total)
      </p>
      <p>
        Confidence
      </p>
    </div>
    {sortedSections.map(section => <Row {...section} key={section.id}/>)}
  </div>;
}