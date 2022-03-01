import React, {Component} from "react";
import Task from "../../helpers/Task";
import Button from "../Buttons/Button"
import ModelTag from "../Common/ModelTag";

export default class ModelCard extends Component{
  constructor() {
    super();
    this.type = "test";
  }

  render() {
    const model = this.props.model;
    let task = Task[model.output.type];
    if (!task) {
      task = new Task(model.output.type, "This task has no definition");
    }
    let machineTagKey = 0;
    let machineTags = model.framework.architectures.map(machine => <ModelTag key={machineTagKey++} type="machine" content={machine.name}/> );
    const modelLink = "/model/" + model.id;
    return(
      <div className="model-card">
        <div className="model-card__tags-box">
          <ModelTag type="task" content={task.name} />
          <ModelTag type="framework" content={model.framework.name} />
          {machineTags}
        </div>
        <hr className="model-card__divider"/>
        <a className="model-card__model-name" href={modelLink}>{model.name} Version {model.version}</a>
        <p className="model-card__model-description">{model.description}</p>
        <div className="model-card__actions-box">
          <div className="model-card__try-model-button">
            <Button content="Try this model" link={modelLink} isPrimary={false} isSmall={true} />
          </div>
          <a className="model-card__learn-more-button" href={modelLink}>Learn more</a>
        </div>
      </div>
    )
  }
}
