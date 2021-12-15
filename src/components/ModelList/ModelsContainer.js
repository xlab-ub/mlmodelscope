import React, { Component } from "react";
import ModelCard from "./ModelCard";
import models from "./tmp_model_data.json";

export default class ModelsContainer extends Component{
  modelCards = () => {
    let modelKey = 0;
    let models = require('./tmp_model_data.json');
    let modelList = this.filteredModels()
    return modelList.map(model => <ModelCard key={modelKey++} model={model}/>);
  }

  filteredModels = () => {
    let result = models.manifests;

    result = this.filterByFramework(result);
    result = this.filterByTask(result);
    return result;
  }

  filterByFramework = (unfilteredModels) => {
    let activeFrameworks = this.props.frameworks.filter(fr => fr.isActive);
    if(activeFrameworks.length === 0 || activeFrameworks.length === this.props.frameworks.length){
      return unfilteredModels;
    }
    let filteredModels=[];
    for(let i = 0; i < activeFrameworks.length; i++){
      filteredModels = filteredModels.concat(unfilteredModels.filter(model => model.framework.name === activeFrameworks[i].name));
    }
    return filteredModels;
  }

  filterByTask = (unfilteredModels) => {
    let activeTasks = this.props.tasks.filter(tk => tk.isActive);
    if(activeTasks.length === 0 || activeTasks.length === this.props.tasks.length){
      return unfilteredModels;
    }
    let filteredModels=[];
    for(let i = 0; i < activeTasks.length; i++){
      console.log("Looking for model.output.type == " + activeTasks[i].name);
      filteredModels = filteredModels.concat(unfilteredModels.filter(model => model.output.type === activeTasks[i].name));
    }
    return filteredModels;
  }

  render() {
    return(
      <div style={{background: "gainsboro", padding: "12px"}}>
        {this.modelCards()}
      </div>
    );
  }
}
