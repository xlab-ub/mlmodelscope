import React, {Component} from "react";
import Task from "../../helpers/Task";

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
          <p className="model-card__tag-label">Framework:</p>
          <button className="model-card__tag">{model.framework.name}</button>
          <p className="model-card__tag-label">Task:</p>
          <button className="model-card__tag">{task.name}</button>
        </div>
        <a className="model-card__model-name" href={modelLink}>{model.name} Version {model.version}</a>
        <p className="model-card__model-desc">{model.description}</p>
        <div className="model-card__actions-box">
          <a className="model-card__try-model-button" href={modelLink}>Try this model</a>
          <a className="model-card__learn-more-button" href={modelLink}>Learn more</a>
        </div>
      </div>
    )
  }
}
