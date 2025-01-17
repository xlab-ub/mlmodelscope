import useBEMNaming from "../../../../../common/useBEMNaming";
import React, {useEffect, useRef} from "react";
import ParseProbability from "../_Common/utils/ParseProbability";
import {ReactComponent as EyeOpen} from "../../../../../resources/icons/eye-open.svg";
import {ReactComponent as EyeClosed} from "../../../../../resources/icons/eye-closed.svg";
import "./ObjectDetectionTable.scss";
import TableNoRows from "../_Common/components/TableNoRows";

export function ObjectDetectionTable(props) {
  const {getElement, getBlock} = useBEMNaming("object-detection-table");
  const scrollRef = useRef(null);

  const Row = (section) => {
    const displayedProbability = ParseProbability(section.probability);
    const color = section.color;

    const isOpen = props.category.state.includes(section.id);


    const isOverFiltered = (section.probability * 100) >= props.confidence.state;

    if (!isOverFiltered) return <></>

    const isNotAffectedByHoverState = props.hover.property === null || props.hover.property === section.id

    const isOpaque = (isOpen && isNotAffectedByHoverState) || (props.hover.property === section.id);

    const hover = () => isOpen ? props.hover.enter(section.id) : props.hover.leave();
    const leave = () => props.hover.leave();
    const toggle = () => {
      props.category.toggle(section.id);
      if (isOpen) leave();
    }
    const iconHover = () => props.hover.enter(section.id, {labelOnly: true});

    const style = {
      opacity: isOpaque ? 1 : 0.3,
    }

    const getLabel = (section) => {
      return section[props.boundingBoxProperty].label;
    }


    return <div id={`object-detection-item-${section.id}`} style={style}
                className={getElement("row")}
    >
      <div onMouseEnter={iconHover} onClick={toggle} className={getElement("row-left")}>
        <div className={getElement("eye-wrapper")}>
          {isOpen ? <EyeOpen/> : <EyeClosed/>}
        </div>

      </div>
      <div onMouseEnter={hover} className={getElement("row-middle")}>
        <input name={`row-input-${getLabel(section)}`} type={"checkbox"}
               className={getElement("row-input-hidden")}
               value={isOpen} onChange={toggle}/>
        <div style={{backgroundColor: color.backgroundColor, borderColor: color.backgroundColor}}
             className={getElement(`row-input ${!isOpen && "row-input-closed"}`)}/>
        <label className={getElement("row-input-label")}
               htmlFor={`row-input-${getLabel(section)}`}>{getLabel(section)}</label>
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

  const getBody = () => {
    if (props.sections.filter(section => ((section.probability * 100) > props.confidence.state)).length > 0)
      return sortedSections.map(section => <Row {...section} key={section.id}/>);

    return <TableNoRows/>
  }

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
    {getBody()}
  </div>;
}
