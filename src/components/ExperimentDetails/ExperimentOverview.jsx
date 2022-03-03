import React, {Component} from 'react';
import ModelTag from "../Common/ModelTag";
import Task from "../../helpers/Task";
import kitty from '../../stories/assets/kitty.png';

export default class ExperimentOverview extends Component {
  render() {
    let task = new Task("Fake task", "This is a placeholder!");
    return (
      <div className="experiment-overview">
        <p className="experiment-overview__title">Overview</p>
        <p className="experiment-overview__header">Input:</p>
        <img className="experiment-overview__input-image" src={kitty} alt="Input image" />
        <p className="experiment-overview__header">Task:</p>
        <div className="experiment-overview__task-tag">
          <ModelTag type="task" content={task.name} />
        </div>
        <p className="experiment-overview__task-description">{task.description}</p>
      </div>
    );
  }
}
