import React, { Component } from "react";
import ModelCard from "./ModelCard";

export default class ModelCardsList extends Component{
  modelCards = () => {
    let modelKey = 0;
    return this.props.models.map(model => <ModelCard key={modelKey++} model={model} actions={this.props.add ? 'add' : 'try'}/>);
  }

  render() {
    return(
      <div>
        {this.modelCards()}
      </div>
    );
  }
}
