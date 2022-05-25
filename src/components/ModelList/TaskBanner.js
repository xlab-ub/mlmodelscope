import React from 'react';
import Task from "../../helpers/Task";
import useBEMNaming from "../../common/useBEMNaming";
import "./_TaskBanner.scss"

export default function TaskBanner(props) {
  const {getBlock, getElement} = useBEMNaming("task-banner")
  const task = Task.getStaticTask(props.task);


  return <div className={getBlock()}>
    <task.Icon className={getElement("icon")}/>
    <p className={getElement("name")}>{task.name}</p>
  </div>
}
