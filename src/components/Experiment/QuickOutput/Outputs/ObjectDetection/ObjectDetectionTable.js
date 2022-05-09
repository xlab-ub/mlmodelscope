import useBEMNaming from "../../../../../common/useBEMNaming";
import React, {useEffect, useRef} from "react";
import ParseProbability from "../_Common/utils/ParseProbability";
import {ReactComponent as EyeOpen} from "../../../../../resources/icons/eye-open.svg";
import {ReactComponent as EyeClosed} from "../../../../../resources/icons/eye-closed.svg";
import "./ObjectDetectionTable.scss";

export function ObjectDetectionTable(props) {
  const {getElement, getBlock} = useBEMNaming("object-detection-table");
  const scrollRef = useRef(null);

  const Row = (section) => {
    const displayedProbability = ParseProbability(section.probability);
    const color = section.color;

    const isOpen = props.category.state.includes(section.id);


    const isOverFiltered = (section.probability * 100) > props.confidence.state;

    if (!isOverFiltered) return <></>

    const isNotAffectedByHoverState = props.hover.property === null || props.hover.property === section.id

    const isOpaque = (isOpen && isNotAffectedByHoverState) || (props.hover.property === section.id);

    const hover = () => props.hover.enter(section.id);
    const leave = () => props.hover.leave();
    const toggle = () => {
      props.category.toggle(section.id);
      if (isOpen) leave();
    }

    const style = {
      opacity: isOpaque ? 1 : 0.3,
    }


    return <div id={`object-detection-item-${section.id}`} style={style}
                className={getElement("row")}
    >
      <div onClick={toggle} className={getElement("row-left")}>
        <div className={getElement("eye-wrapper")}>
          {isOpen ? <EyeOpen/> : <EyeClosed/>}
        </div>

      </div>
      <div onMouseEnter={hover} className={getElement("row-middle")}>
        <input name={`row-input-${section.bounding_box.label}`} type={"checkbox"}
               className={getElement("row-input-hidden")}
               value={isOpen} onChange={toggle}/>
        <div style={{backgroundColor: color.backgroundColor, borderColor: color.backgroundColor}}
             className={getElement(`row-input ${!isOpen && "row-input-closed"}`)}/>
        <label className={getElement("row-input-label")}
               htmlFor={`row-input-${section.bounding_box.label}`}>{section.bounding_box.label}</label>
      </div>
      {props.showPercentages &&
        <p onMouseEnter={hover}
           className={getElement("row-percentage row-right")}>{displayedProbability}</p>
      }
    </div>
  }


  useEffect(() => {
    if (props.hover.scrollSection) {
      const element = document.getElementById(`object-detection-item-${props.hover.scrollSection}`);
      const parent = scrollRef.current;
      if (element && parent) parent.scrollTo({behavior: "smooth", left: 0, top: element.offsetTop - 30})
    }
  }, [props.hover.scrollSection])


  const sortedSections = props.sections.sort((a, b) => b.probability - a.probability);

  return <div onMouseLeave={props.hover.leave} ref={scrollRef} id={"object-detection-table"}
              style={{maxHeight: `${props.imageHeight + 80}px`}}
              className={getBlock()}>
    <div onMouseEnter={props.hover.leave} className={getElement("header-row")}>
      <p className={getElement("header-row-item row-left")}>
        Hide
      </p>
      <p className={getElement("header-row-item row-middle")}>
        Objects Detected
        ({sortedSections.filter(section => (section.probability * 100) > props.confidence.state).length})
      </p>
      <p className={getElement("header-row-item row-right")}>
        Confidence
      </p>
    </div>
    {sortedSections.map(section => <Row {...section} key={section.id}/>)}
  </div>;
}
