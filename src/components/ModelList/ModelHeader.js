import React, { Component } from "react";

export default class ModelHeader extends Component{
  render() {
    return(
      <div className="ModelHeader__group">
        <h1 className="ModelHeader__title"> Models </h1>
        <h2 className="ModelHeader__description"> Experience the power of machine learning by testing and comparing models. </h2>
      </div>
    );
  }
}
