import React from 'react';
import ModelTag from "../Common/ModelTag";
import Task from "../../helpers/Task";
import kitty from '../../stories/assets/kitty.png';
import BEMComponent from "../Common/BEMComponent";

export default class ExperimentOverview extends BEMComponent {
  static defaultProps = {
    inputs: [
      kitty
    ],
    task: "Null"
  }

  render() {
    let taskName = this.props.task;
    let task = Task[taskName];
    if (!task) {
      task = new Task(taskName, "");
    }

    return (
      <div className="experiment-overview">
        <p className="experiment-overview__title">Overview</p>
        <div className={this.element("content-wrapper")}>
          <div>
            <p className="experiment-overview__header">Input:</p>
            <img className="experiment-overview__input-image" src={this.props.inputs[0]} alt="Input image" />
          </div>
          <div>
            <p className="experiment-overview__header">Task:</p>
            <div className="experiment-overview__task-tag">
              <ModelTag type="task" content={task.name} />
            </div>
            <p className="experiment-overview__task-description">{task.description}</p>
          </div>
        </div>

      </div>
    );
  }
}
