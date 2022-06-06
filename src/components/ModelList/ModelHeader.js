import React, {Component} from "react";

export default class ModelHeader extends Component {
  render() {
    return (
      <div className="model-header">
        <h1 className="model-header__title"> Browse models </h1>
        <p className="model-header__description"> Find models to compare. </p>
      </div>
    );
  }
}
