import React from "react";
import BEMComponent from "../Common/BEMComponent";
import Task from "../../helpers/Task";
import ModelTag from "../Common/ModelTag";
import {ReactComponent as CloseIcon} from "../../resources/icons/x.svg";
import './_SelectedModelCard.scss';

export default class SelectedModelCard extends BEMComponent {
  static defaultProps = {
    className: "selected-model-card",
    remove: () => {},
  }

  render() {
    const model = this.props.model;
    let task = Task[model.output.type];
    if (!task) {
      task = new Task(model.output.type, "This task has no definition");
    }
    let machineTagKey = 0;
    let architectures = model.framework ? model.framework.architectures : null;
    let machineTags = architectures ? architectures.map(machine => <ModelTag key={machineTagKey++} type="machine" content={machine.name}/> ) : '';

    return (
      <div className={this.block()}>
        <a className={this.element('link')} href={this.makeModelLink()}>
          {model.name}
        </a>
        <div className={this.element('tags')}>
          <div className={this.element('tag-group')}>
            <span className={this.element('tag-label')}>Framework:</span>
            <span className={this.element('tag-content')}>
              <ModelTag type="framework" content={model.framework.name} />
            </span>
          </div>
          <div className={this.element('tag-group')}>
            <span className={this.element('tag-label')}>Machine:</span>
            <span className={this.element('tag-content')}>
              {machineTags}
            </span>
          </div>
        </div>
        <button className={this.element('close')} onClick={this.props.remove}>
          <CloseIcon />
        </button>
      </div>
    )
  }

  makeModelLink() {
    return "/model/" + this.props.model.id;
  }
}
