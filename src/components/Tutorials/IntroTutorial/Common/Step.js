import useBEMNaming from "../../../../common/useBEMNaming";
import React from "react";
import "./Step.scss";

export function Step({link, isSelected, goToSection}) {
  const {getElement} = useBEMNaming("stepper-step");

  const getContainerClass = () => {
    if (isSelected) return getElement("step step--completed");

    return getElement("step");
  }

  const getCircleClass = () => {
    if (isSelected) return getElement("circle circle--completed");

    return getElement("circle");
  }


  return <div onClick={() => goToSection(link.index)} className={getContainerClass()}>
    <div className={getElement("stepper")}>
      <div className={getCircleClass()}></div>
      <div className={getElement("line")}></div>
    </div>
    <div className={getElement("content")}>
      {link.name}
    </div>
  </div>
}
