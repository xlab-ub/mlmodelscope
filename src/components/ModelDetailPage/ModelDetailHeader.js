import React, { Component } from "react";
import Task from "../../helpers/Task";
import 'typeface-lato';

export default class ModelDetailHeader extends Component{
  render(){
    const model = this.props.model;
    if(!!model){
      const task = Task[model.output.type];
      console.log(task);
      return(
        <div className="model-detail-header">
          <div className="model-detail-header__title-box">
            <dl>
              <div className="model-detail-header__detail-container">
                <dt className="model-detail-header__date-label">Modified:</dt>
                <dd className="model-detail-header__detail">N/A</dd>
              </div>
            </dl>
            <p className="model-detail-header__model-name">{model.name} Version {model.version}</p>
            <p className="model-detail-header__model-description">{model.description}</p>
          </div>
          <dl className="model-detail-header__data-box">
            <div className="model-detail-header__task-box">
              <dt className="model-detail-header__task-label">Task:</dt>
              <dd className="model-detail-header__detail">{task.name}</dd>
              <dd>{task.description}</dd>
            </div>
            <div className="model-detail-header__framework-box">
              <dt className="model-detail-header__detail-label">Framework:</dt>
              <dd className="model-detail-header__detail">{model.framework.name}</dd>
            </div>
            <div className="model-detail-header__machines-box">
              <dt className="model-detail-header__detail-label">Machines:</dt>
              <dd className="model-detail-header__detail">N/A</dd>
            </div>
            <div className="model-detail-header__training-set-box">
              <dt className="model-detail-header__detail-label">Trained on:</dt>
              <dd className="model-detail-header__detail">{model.attributes.training_dataset}</dd>
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
