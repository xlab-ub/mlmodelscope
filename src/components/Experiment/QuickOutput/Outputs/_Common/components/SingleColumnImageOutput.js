import React from 'react';
import useBEMNaming from "../../../../../../common/useBEMNaming";
import Task from "../../../../../../helpers/Task";

export default function SingleColumnImageOutput(props) {
  const {getElement, getBlock} = useBEMNaming("single-column-image-output");
  const task = Task.image_enhancement;

  return <div className={getBlock()}>
    <div className={getElement("header")}>
      <h3 className={getElement("header-heading")}>Enhanced Image Output</h3>
      <p className={getElement("header-subheading")}>{task.outputText}</p>
    </div>
    <div className={getElement("content")}>
      {props.image}
    </div>
  </div>
}
