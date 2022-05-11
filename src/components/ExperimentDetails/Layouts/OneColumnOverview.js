import React from 'react';
import useBEMNaming from "../../../common/useBEMNaming";
import ModelTag from "../../Common/ModelTag";
import Button from "../../Buttons/Button";
import "./OneColumnOverview.scss";
import Task from "../../../helpers/Task";


export default function OneColumnOverview(props) {
  const {getBlock, getElement} = useBEMNaming("one-column-overview");

  let taskName = Task[props.task];
  if (!taskName) {
    taskName = new Task({name: props.task, description: ""});
  }

  return <div className={getBlock()}>
    <div className={getElement("experiment-header")}>
      <p className={getElement("experiment-header-overview")}>Overview</p>

      <div className={getElement("experiment-header-tags")}>
        <dd className={getElement("experiment-header-tag")}>
          <span className={getElement("experiment-header-tag-label")}>Task:</span>
          <ModelTag type={"task"} content={taskName.name}/>
        </dd>
        <dd className={getElement("experiment-header-tag")}>
          <span className={getElement("experiment-header-tag-label")}>Machine:</span>
          <ModelTag type={"machine"} content={props.machine}/>
        </dd>
      </div>

    </div>
    <div className={getElement("trials-section")}>
      <div className={getElement("trials-header-box")}>
        <Button content={"Add model"} icon="plus" isPrimary={false} isSmall={false}
                link={props.getAddModelsLink(props)}/>
      </div>
      {props.children}
    </div>
  </div>
}
