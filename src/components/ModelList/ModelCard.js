import React, {Component} from "react";
import './ModelCard.css'

export default class ModelCard extends Component{
  render() {
    const model = this.props.model;
    return(
      <div className="ModelCardDiv">
        <p>{model.name} {model.version}</p>
        <p>{model.description}</p>
      </div>
    )
  }
}
