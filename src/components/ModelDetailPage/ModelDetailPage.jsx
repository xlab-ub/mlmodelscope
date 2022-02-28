import React, { Component } from "react";
import ModelDetailHeader from "./ModelDetailHeader";

export default class ModelDetailPage extends Component {
  render(){
    return(
      <div className="model-detail-page">
        <ModelDetailHeader model={this.props.model}/>
      </div>
    )
  }
}
