import React, {Component} from "react";
import './ModelCard.css'

export default class ModelCard extends Component{
  constructor() {
    super();
    this.type = "test";
  }

  taskNameToLabel = (taskName) => {
    // Just a quick solution for the prototype; DO NOT KEEP THIS
    switch (taskName){
      case "classification":
        return "Classification";
      case "boundingbox":
        return "Object Detection";
      case "semanticsegment":
        return "Semantic Segmentation";
      case "instancesegment":
        return "Instance Segmentation";
      case "image":
        return "Image Enhancement";
    }
  }

  render() {
    const model = this.props.model;
    const task = this.taskNameToLabel(model.output.type);
    const modelLink = "/model/" + model.id;
    return(
      <div className="ModelCardDiv">
        <div className="ModelTagsBox">
          <button>{model.framework.name}</button>
          <button>{task}</button>
        </div>
        <a className="ModelCard__model-name" href={modelLink}>{model.name}</a>
        <p className="ModelVersion">Version {model.version}</p>
        <p className="ModelDescription">{model.description}</p>
      </div>
    )
  }
}
