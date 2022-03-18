import React, {Component} from "react";
import Task from "../../helpers/Task";
import Button from "../Buttons/Button"
import ModelTag from "../Common/ModelTag";

export default class ModelCard extends Component{
  static defaultProps = {
    actions: 'try',
    isAdded: false,
  }

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
    return(
      <div className={this.props.isAdded ? 'model-card model-card--active' : 'model-card'}>
        <div className="model-card__tags-box">
          <ModelTag type="task" content={task.name} />
          <ModelTag type="framework" content={model.framework.name} />
          {machineTags}
        </div>
        <hr className="model-card__divider"/>
        <a className="model-card__model-name" href={this.makeModelLink()}>{model.name} Version {model.version}</a>
        <p className="model-card__model-description">{model.description}</p>
        { this.makeActions() }
      </div>
    )
  }

  makeModelLink() {
    return "/model/" + this.props.model.id;
  }

  makeActions() {
    if (this.props.actions === 'try') {
      return (
        <div className="model-card__actions-box">
          <div className="model-card__try-model-button">
            <Button content="Try this model" link={this.makeModelLink()} isPrimary={false} isSmall={true} />
          </div>
          <a className="model-card__learn-more-button" href={this.makeModelLink()}>Learn more</a>
        </div>
      )
    } else if (this.props.actions === 'add' && !this.props.isAdded) {
      return (
        <div className="model-card__actions-box">
          <div className="model-card__add-model-button">
            <Button content="Add Model" link={this.makeModelLink()} isPrimary={false} isSmall={true} icon={'plus'} />
          </div>
        </div>
      );
    } else if (this.props.actions === 'add' && this.props.isAdded) {
      return (
        <div className="model-card__actions-box">
          <div className="model-card__add-model-button">
            <Button content="Remove Model" link={this.makeModelLink()} isPrimary={true} isSmall={true} icon={'minus'} />
          </div>
        </div>
      );
    }
  }
}
