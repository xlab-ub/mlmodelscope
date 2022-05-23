import React from 'react';
import useBEMNaming from "../../../common/useBEMNaming";
import ModelTag from "../../Common/ModelTag";
import "./OneColumnOverview.scss";
import Task from "../../../helpers/Task";


export default function OneColumnOverview(props) {
  const {getBlock, getElement} = useBEMNaming("one-column-overview");

  let task = Task.getStaticTask(props.task);

  return <div className={getBlock()}>
    <div className={getElement("experiment-header")}>
      <p className={getElement("experiment-header-overview")}>Overview</p>

      <div className={getElement("experiment-header-tags")}>
        <dd className={getElement("experiment-header-tag")}>
          <span className={getElement("experiment-header-tag-label")}>Task:</span>
          <ModelTag type={"task"} content={task.name}/>
        </dd>
        <dd className={getElement("experiment-header-tag")}>
          <span className={getElement("experiment-header-tag-label")}>Machine:</span>
          <ModelTag type={"machine"} content={props.machine}/>
        </dd>
      </div>

    </div>
    <div className={getElement("trials-section")}>
      <div className={getElement("trials-header-box")}>

      </div>
      {props.children}
    </div>
  </div>
}
