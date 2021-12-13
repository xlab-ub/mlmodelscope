import React, { Component } from "react";
import ModelCard from "./ModelCard";

export default class ModelsContainer extends Component{
  ModelList = () => {
    let modelKey = 0;
    let models = require('./tmp_model_data.json');
    let modelList = models.manifests.map(model => <ModelCard key={modelKey++} model={model}/>);
    return(
      <div>{modelList}</div>
    );
  }
  render() {
    return(
      <div style={{background: "gainsboro", padding: "12px"}}>
        {this.ModelList()}
      </div>
    );
  }
}
