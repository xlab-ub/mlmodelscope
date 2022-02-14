import React, { Component } from "react";
import { ReactComponent as RightArrowIcon } from "../../resources/icons/arrow-right.svg";

export default class button extends Component {
  generateBlockName(){
    let result = "";
    if (this.props.isSmall) {
      result = "small-button ";
    }
    if (this.props.isPrimary) {
      result = result + "primary-button";
    }
    else {
      result = result + "secondary-button";
    }
    return result;
  }

  generateClassName(element){
    let result = "";
    if (this.props.isSmall) {
      result = "small-button__" + element + " ";
    }
    if (this.props.isPrimary) {
      result = result + "primary-button__" + element;
    }
    else {
      result = result + "secondary-button__" + element;
    }
    return result;
  }

  render() {
    return (
      <div className={this.generateBlockName()}>
        <a href={this.props.link} className={this.generateClassName("text")}>{this.props.content}</a>
        <RightArrowIcon className={this.generateClassName("icon")} />
      </div>
    )
  }
}
