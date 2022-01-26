import React, { Component } from "react";
import Task from "../../helpers/Task";

export default class ModelDetailHeader extends Component{
  render(){
    const model = this.props.model;
    if(!!model){
      const task = Task[model.output.type];
      console.log(task);
      return(
        <div>
          <p>Modified: N/A</p>
          <p>{model.name}</p>
          <p>{model.description}</p>
          <div className="ModelDetailHeader__task-box">
            <p>Task: {task.name}</p>
            <p>{task.description}</p>
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
