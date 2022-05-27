import React, {Component} from "react";
import Task from "../../helpers/Task";
import Button from "../Buttons/Button"
import ModelTag from "../Common/ModelTag";
import {ReactComponent as Plus} from "../../resources/icons/plus-sign.svg";
import {ReactComponent as Minus} from "../../resources/icons/minus-sign.svg";

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
      <div onClick={this.makeClickHandler()}
           className={this.props.isAdded ? 'model-card model-card--active' : 'model-card'}>
        {this.makeName()}

        <div className="model-card__tags-box">
          <ModelTag type="task" content={task.name}/>
          <ModelTag type="framework" content={model.framework.name}/>
          {machineTags}
          <ModelTag content={model.attributes.training_dataset}/>
          {model.attributes.Top1 &&
            <ModelTag content={"Top 1: " + model.attributes.Top1 + "%"}/>
          }
          {model.attributes.Top5 &&
            <ModelTag content={"Top 5: " + model.attributes.Top5 + "%"}/>
          }
          {model.version &&
            <ModelTag content={"Version: " + model.version}/>
          }
        </div>
        {this.makeActions()}
      </div>
    )
  }

  makeName() {
    const model = this.props.model;
    const text = `${model.name}`

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

  makeClickHandler = () => {
    if (this.props.actions === 'try') {
      return () => window.location.href = (this.makeModelLink());
    } else if (this.props.actions === "add" && !this.props.isAdded) {
      return this.props.selectModel;
    } else if (this.props.actions === 'add' && this.props.isAdded) {
      return this.props.deselectModel;
    }
  }

  makeActions() {
    if (this.props.actions === 'add' && !this.props.isAdded) {
      return <Plus className={"model-card__icon"}/>
      return (
        <div className="model-card__actions-box">
          <div className="model-card__add-model-button">
            <Button content="Add Model" onClick={this.props.selectModel} isPrimary={false} isSmall={true}
                    icon={'plus'}/>
          </div>
        </div>
      );
    } else if (this.props.actions === 'add' && this.props.isAdded) {
      return <Minus className={"model-card__icon model-card__icon-minus"}/>
      return (
        <div className="model-card__actions-box">
          <div className="model-card__add-model-button">
            <Button content="Remove Model" onClick={this.props.deselectModel} isPrimary={true} isSmall={true}
                    icon={'minus'}/>
          </div>
        </div>
      );
    }
    return <></>
  }
}
