import React, {Component} from "react";
import Task from "../../helpers/Task";
import Button from "../Buttons/Button"

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
    const modelLink = "/model/" + model.id;
    return(
      <div className="model-card">
        <div className="model-card__tags-box">
          <button className="model-card__task-tag">{task.name}</button>
          <button className="model-card__framework-tag">{model.framework.name}</button>
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
