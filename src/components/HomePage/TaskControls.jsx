import useBEMNaming from "../../common/useBEMNaming";
import React, {useState} from "react";
import "./TaskControls.scss"

export function TaskControls(props) {
  const {getBlock, getElement} = useBEMNaming("home-page-task-controls");
  const [showItems, setShowItems] = useState(false);

  const {tasks, taskIsSelected, updateTask} = props;

  const handleSelect = (task) => {
    setShowItems(false);
    updateTask(task);
  }

  const buttons = tasks.map(task => <button
    onClick={() => handleSelect(task)}
    key={task.id + "-btn"}
    className={getElement(`task-btn ${taskIsSelected(task) && "task-btn-selected"}`)}>
    <task.Icon className={getElement(`task-btn-icon`)}/>
    {task.name}
  </button>)


  return <div className={getBlock()}>
    <p className={getElement("task-header")}>Choose a task:</p>
    <button onClick={() => setShowItems(!showItems)}
            className={getElement(`toggle-btn ${showItems && "toggle-btn-active"}`)}>
      <props.selectedTask.Icon className={getElement("toggle-btn-icon")}/>
      {props.selectedTask.name}
    </button>
    <div className={getElement(`btn-area ${showItems && "btn-area-shown"}`)}>
      {buttons}
    </div>
  </div>
}
