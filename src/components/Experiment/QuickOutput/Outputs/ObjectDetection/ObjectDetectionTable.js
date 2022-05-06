import useBEMNaming from "../../../../../common/useBEMNaming";
import React from "react";
import ParseProbability from "../_Common/utils/ParseProbability";
import {ReactComponent as EyeOpen} from "../../../../../resources/icons/eye-open.svg";
import {ReactComponent as EyeClosed} from "../../../../../resources/icons/eye-closed.svg";

export function ObjectDetectionTable(props) {
  const {getElement, getBlock} = useBEMNaming("object-detection-table");

  const Row = (section) => {
    const displayedProbability = ParseProbability(section.probability);
    const color = section.color;

    const isOpen = props.category.state.includes(section.id);
    const toggle = () => props.category.toggle(section.id);
    const hover = () => props.hover.enter(section.id);
    const leave = () => props.hover.leave();

    const isOverFiltered = (section.probability * 100) > props.confidence.state;
    const isNotAffectedByHoverState = props.hover.property === null || props.hover.property === section.id

    const isHovered = isOverFiltered && isNotAffectedByHoverState;

    const style = {
      opacity: isHovered ? 1 : 0.3,
    }


    return <div id={`object-detection-item-${section.id}`} style={style} className={getElement("row")} onClick={toggle}
                onMouseEnter={hover} onMouseLeave={leave}>
      <div className={getElement("row-left")}>
        <div className={getElement("eye-wrapper")}>
          {isOpen ? <EyeOpen/> : <EyeClosed/>}
        </div>

      </div>
      <div className={getElement("row-middle")}>
        <input name={`row-input-${section.bounding_box.label}`} type={"checkbox"}
               className={getElement("row-input-hidden")}
               value={isOpen} onChange={toggle}/>
        <div style={{backgroundColor: color.backgroundColor, borderColor: color.backgroundColor}}
             className={getElement(`row-input ${!isOpen && "row-input-closed"}`)}/>
        <label className={getElement("row-input-label")}
               htmlFor={`row-input-${section.bounding_box.label}`}>{section.bounding_box.label}</label>
      </div>
      {props.showPercentages &&
        <p className={getElement("row-percentage row-right")}>{displayedProbability}</p>
      }
    </div>
  }


  const sortedSections = props.sections.sort((a, b) => b.probability - a.probability);

  return <div id={"object-detection-table"} className={getBlock()}>
    <div className={getElement("header-row")}>
      <p className={getElement("header-row-item row-left")}>
        Toggle
      </p>
      <p className={getElement("header-row-item row-middle")}>
        Objects Detected<span
        className={getElement("header-row-item-total")}>({sortedSections.length} total)</span>
      </p>
      <p className={getElement("header-row-item row-right")}>
        Confidence
      </p>
    </div>
    {sortedSections.map(section => <Row {...section} key={section.id}/>)}
  </div>;
}
