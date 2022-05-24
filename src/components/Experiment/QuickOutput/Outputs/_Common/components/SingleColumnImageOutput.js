import React from 'react';
import useBEMNaming from "../../../../../../common/useBEMNaming";
import Task from "../../../../../../helpers/Task";
import OutputDuration from "./OutputDuration";

export default function SingleColumnImageOutput(props) {
  const {getElement, getBlock} = useBEMNaming("single-column-image-output");
  const task = Task.image_enhancement;

  return <div className={getBlock()}>
    <div className={getElement("header")}>
      <div className={getElement("header-row")}>
        <h3 className={getElement("header-heading")}>Output</h3>
        <OutputDuration duration={props.duration}/>
      </div>

      <p className={getElement("header-subheading")}>{task.outputText}</p>
    </div>
    <div className={getElement("content")}>
      {props.image}
    </div>
  </div>
}
