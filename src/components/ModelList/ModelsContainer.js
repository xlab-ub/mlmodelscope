import React, { Component } from "react";
import ModelCard from "./ModelCard";

export default class ModelsContainer extends Component{
  modelCards = () => {
    let modelKey = 0;
    return this.props.models.map(model => <ModelCard key={modelKey++} model={model}/>);
  }

  filteredModels = () => {
    let result = this.props.models.manifests;
    for(let i = 0; i < this.props.filterGroups.length; i++){
      result = this.filterByOneField(result, this.props.filterGroups[i]);
    }
    return result;
  }

  filterByOneField = (unfilteredModels, filterGroup) => {
    let activeOptions = filterGroup.options.filter(o => o.isActive);
    if(activeOptions.length === 0 || activeOptions.length === filterGroup.options.length){
      return unfilteredModels;
    }
    let filteredModels=[];
    let j = filterGroup.fieldA;
    let k = filterGroup.fieldB;
    for(let i = 0; i < activeOptions.length; i++){
      filteredModels = filteredModels.concat(unfilteredModels.filter(model => model[j][k] === activeOptions[i].name));
    }
    return filteredModels;
  }

  render() {
    return(
      <div>
        {this.modelCards()}
      </div>
    );
  }
}
