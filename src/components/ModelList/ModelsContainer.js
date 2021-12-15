import React, { Component } from "react";
import ModelCard from "./ModelCard";
import models from "./tmp_model_data.json";

export default class ModelsContainer extends Component{
  modelCards = () => {
    let modelKey = 0;
    let models = require('./tmp_model_data.json');

    let filteredModels = [];
    let activeFrameworks = this.props.frameworks.filter(fr => fr.isActive);
    console.log(activeFrameworks)
    if(activeFrameworks.length == 0 || activeFrameworks.length == this.props.frameworks.length){
      filteredModels = models.manifests;
    }
    else{
      for(let i = 0; i < activeFrameworks.length; i++) {
        filteredModels = filteredModels.concat(models.manifests.filter(model => model.framework.name == activeFrameworks[i].name));
      }
    }
    return filteredModels.map(model => <ModelCard key={modelKey++} model={model}/>);
  }

  render() {
    return(
      <div style={{background: "gainsboro", padding: "12px"}}>
        {this.modelCards()}
      </div>
    );
  }
}
