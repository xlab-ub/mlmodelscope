import React, { Component } from "react";

export default class ModelHeader extends Component{
  render() {
    return(
      <div className="model-header">
        <h1 className="model-header__title"> Models </h1>
        <p className="model-header__description"> Experience the power of machine learning by testing and comparing models. </p>
      </div>
    );
  }
}
