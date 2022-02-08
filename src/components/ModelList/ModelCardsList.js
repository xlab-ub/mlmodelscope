import React, { Component } from "react";
import ModelCard from "./ModelCard";

export default class ModelCardsList extends Component{
  modelCards = () => {
    let modelKey = 0;
    return this.props.models.map(model => <ModelCard key={modelKey++} model={model}/>);
  }

  render() {
    return(
      <div>
        {this.modelCards()}
      </div>
    );
  }
}
