import React, {Component} from "react";
import './ModelCard.css'

export default class ModelCard extends Component{
  render() {
    const model = this.props.model;
    return(
      <div className="ModelCardDiv">
        <div className="ModelTagsBox">
          <button>{model.framework.name}</button>
        </div>
        <p className="ModelName">{model.name}</p>
        <p className="ModelVersion">Version {model.version}</p>
        <p className="ModelDescription">{model.description}</p>
      </div>
    )
  }
}
