import React, { Component } from "react";
import Task from "../../helpers/Task";
import formatDate from "../../helpers/dateFormatter";
import ModelTag from "../Common/ModelTag";
import 'typeface-lato';

export default class ModelDetailHeader extends Component{
  render(){
    const model = this.props.model;

    if(!!model){
      const task = Task[model.output.type];

      let dateLabel = "Created:";
      let dateModified = "N/A";

      if(!!model.updated_at && model.updated_at != "") {
        if(model.updated_at != model.created_at) {
          dateLabel = "Modified:"
        }
        dateModified = formatDate(model.updated_at);
      }

      let machineTagKey = 0;
      let machineTags = <dd>N/A</dd>
      if (!!model.framework.architectures) {
        machineTags = model.framework.architectures.map(machine => <dd><ModelTag key={machineTagKey++} type="machine" content={machine.name}/></dd> );
      }

      return(
        <div className="model-detail-header">
          <div className="model-detail-header__title-box">
            <dl>
              <div className="model-detail-header__date-container">
                <dt className="model-detail-header__date-label">{dateLabel}</dt>
                <dd className="model-detail-header__date">{dateModified}</dd>
              </div>
            </dl>
            <p className="model-detail-header__model-name">{model.name} Version {model.version}</p>
            <p className="model-detail-header__model-description">{model.description}</p>
          </div>
          <dl className="model-detail-header__data-box">
            <div className="model-detail-header__task-box">
              <dt className="model-detail-header__label">Task:</dt>
              <dd>
                <ModelTag type="task" content={task.name} />
              </dd>
              <dd className="model-detail-header__task-description">{task.description}</dd>
            </div>
            <div className="model-detail-header__framework-box">
              <dt className="model-detail-header__label">Framework:</dt>
              <dd>
                <ModelTag type="framework" content={model.framework.name} />
              </dd>
            </div>
            <div className="model-detail-header__machines-box">
              <dt className="model-detail-header__label">Machines:</dt>
              <div className="model-detail-header__machine-tags-box">
                {machineTags}
              </div>
            </div>
            <div className="model-detail-header__training-set-box">
              <dt className="model-detail-header__label">Trained on:</dt>
              <dd>
                <ModelTag type="training-set" content={model.attributes.training_dataset} />
              </dd>
            </div>
          </dl>
        </div>
      );
    }
    else{
      return(
        <p>Loading...</p>
      )
    };
  }
}
