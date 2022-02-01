import React, { Component } from "react";
import Task from "../../helpers/Task";
import './ModelDetailHeader.scss';
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
          <div className="model-detail-header__task-box">
            <dl>
              <div className="model-detail-header__detail-container">
                <dt className="model-detail-header__task-label">Task:</dt>
                <dd className="model-detail-header__detail">{task.name}</dd>
              </div>
            </dl>
            <p>{task.description}</p>
          </div>
          <div className="model-detail-header__advanced-details-box">
            <p className="model-detail-header__advanced-details-label">Advanced Details</p>
            <dl>
              <div className="model-detail-header__detail-container">
                <dt className="model-detail-header__detail-label">Framework:</dt>
                <dd className="model-detail-header__detail">{model.framework.name}</dd>
              </div>
              <div className="model-detail-header__detail-container">
                <dt className="model-detail-header__detail-label">Trained on:</dt>
                <dd className="model-detail-header__detail">{model.attributes.training_dataset}</dd>
              </div>
              <div className="model-detail-header__detail-container">
                <dt className="model-detail-header__detail-label">Machines:</dt>
                <dd className="model-detail-header__detail">N/A</dd>
              </div>
            </dl>
          </div>
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
