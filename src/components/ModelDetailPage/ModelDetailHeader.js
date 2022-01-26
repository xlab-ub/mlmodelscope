import React, { Component } from "react";

export default class ModelDetailHeader extends Component{
  render(){
    const model = this.props.model;
    if(!!model){
      return(
        <div>
          <p>Modified: N/A</p>
          <p>{model.name}</p>
          <p>{model.description}</p>
          <div className="ModelDetailHeader__task-box">
            <label>Task: </label>
            <p>[task name here]</p>
            <p>[task description here]</p>
          </div>
          <div className="ModelDetailHeader__advanced-details-box">
            <p>Advanced Details</p>
            <p>Framework: {model.framework.name}</p>
            <p>Trained on: {model.attributes.training_dataset}</p>
            <p>Machines: N/A</p>
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
