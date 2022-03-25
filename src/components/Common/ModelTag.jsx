import React, {Component} from "react";

export default class ModelTag extends Component {
  render() {
    let className = "model-tag";
    if (!!this.props.type && this.props.type != ""){
      className = `${className} -${this.props.type}`;
    }

    return(
      <span className={className}>{this.props.content}</span>
    );
  }
}
