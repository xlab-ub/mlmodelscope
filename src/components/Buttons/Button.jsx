import React, { Component } from "react";

export default class button extends Component {
  render() {
    let className = "button__" + this.props.primary;
    return (
      <a href={this.props.link} className={className}>{this.props.content}</a>
    )
  }
}
