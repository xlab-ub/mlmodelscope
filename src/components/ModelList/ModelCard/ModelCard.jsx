import React, {Component} from "react";
import Task from "../../../helpers/Task";
import ModelTag from "../../Common/ModelTag";
import {ReactComponent as Plus} from "../../../resources/icons/plus-sign.svg";
import {ReactComponent as Minus} from "../../../resources/icons/minus-sign.svg";

function ModelCardName(props) {
  const model = props.model;
  const text = `${model.name}`

  if (props.actions === 'try') {
    return (
      <a className="model-card__model-name" href={props.makeModelLink()}>{text}</a>
    )
  }
  return <button className="model-card__model-name"
                 onClick={() => props.isAdded ? props.deselectModel() : props.selectModel()}>{text}</button>
}

function ModelCardActions(props) {
  if (props.actions === 'add' && !props.isAdded) {
    return <Plus className={"model-card__icon"}/>

  } else if (props.actions === 'add' && props.isAdded) {
    return <Minus className={"model-card__icon model-card__icon-minus"}/>
  }
  return <></>
}

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
        <ModelCardName {...this.props} makeModelLink={this.makeModelLink.bind(this)}/>

        <div className="model-card__tags-box">
          <div className={"model-card__tags-box-row"}>
            <ModelTag type="task" content={task.name}/>
            <ModelTag type="framework" content={model.framework.name}/>
            {machineTags}
          </div>

          <hr className={"model-card__tags-box-divider"}/>
          <div className={"model-card__tags-box-row"}>
            <p className={"model-card__tags-box-item"} children={model.attributes.training_dataset}/>
            <span className={"model-card__tags-box-item-divider"}>&bull;</span>

            {model.attributes.Top1 &&
              <>
                <p className={"model-card__tags-box-item"} children={"Top 1: " + model.attributes.Top1 + "%"}/>
                <span className={"model-card__tags-box-item-divider"}>&bull;</span>
              </>
            }
            {model.attributes.Top5 &&
              <>
                <p className={"model-card__tags-box-item"}>
                  Top 5: {model.attributes.Top5}%
                </p>
                <span className={"model-card__tags-box-item-divider"}>&bull;</span>

              </>
            }

          </div>

        </div>
        <ModelCardActions {...this.props} />
      </div>
    )
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

}
