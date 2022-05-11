import React, {Component} from "react";
import Task from "../../helpers/Task";
import Button from "../Buttons/Button"
import ModelTag from "../Common/ModelTag";

export default class ModelCard extends Component {
  static defaultProps = {
    actions: 'try',
    isAdded: false,
    selectModel: () => {
      alert('SELECTED')
    },
    deselectModel: () => {
      alert('DESELECTED')
    },
  }

  constructor() {
    super();
    this.type = "test";
  }

  render() {
    const model = this.props.model;
    let task = Task[model.output.type];
    if (!task) {
      task = new Task({name: model.output.type, description: "This task has no definition"});
    }
    let machineTagKey = 0;
    let machineTags = model.framework.architectures.map(machine => <ModelTag key={machineTagKey++} type="machine"
                                                                             content={machine.name}/>);
    return (
      <div className={this.props.isAdded ? 'model-card model-card--active' : 'model-card'}>
        <div className="model-card__tags-box">
          <ModelTag type="task" content={task.name}/>
          <ModelTag type="framework" content={model.framework.name}/>
          {machineTags}
        </div>
        <hr className="model-card__divider"/>
        {this.makeName()}
        <p className="model-card__model-description">{model.description}</p>
        {this.makeActions()}
      </div>
    )
  }

  makeName() {
    const model = this.props.model;
    const text = `${model.name} Version ${model.version}`

    if (this.props.actions === 'try') {
      return (
        <a className="model-card__model-name" href={this.makeModelLink()}>{text}</a>
      )
    } else {
      return <button className="model-card__model-name"
                     onClick={() => this.props.isAdded ? this.props.deselectModel() : this.props.selectModel()}>{text}</button>
    }
  }

  makeModelLink() {
    return "/model/" + this.props.model.id;
  }

  makeActions() {
    if (this.props.actions === 'try') {
      return (
        <div className="model-card__actions-box">
          <div className="model-card__try-model-button">
            <Button content="Try this model" link={this.makeModelLink()} isPrimary={false} isSmall={true}/>
          </div>
        </div>
      )
    } else if (this.props.actions === 'add' && !this.props.isAdded) {
      return (
        <div className="model-card__actions-box">
          <div className="model-card__add-model-button">
            <Button content="Add Model" onClick={this.props.selectModel} isPrimary={false} isSmall={true}
                    icon={'plus'}/>
          </div>
        </div>
      );
    } else if (this.props.actions === 'add' && this.props.isAdded) {
      return (
        <div className="model-card__actions-box">
          <div className="model-card__add-model-button">
            <Button content="Remove Model" onClick={this.props.deselectModel} isPrimary={true} isSmall={true}
                    icon={'minus'}/>
          </div>
        </div>
      );
    }
  }
}
