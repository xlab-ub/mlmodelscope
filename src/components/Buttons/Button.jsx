import React, { Component } from "react";
import { ReactComponent as RightArrowIcon } from "../../resources/icons/arrow-right.svg";
import { ReactComponent as PlusIcon } from "../../resources/icons/plus-sign.svg";
import { ReactComponent as MinusIcon } from "../../resources/icons/minus-sign.svg";

export default class button extends Component {
  static defaultProps  = {
    icon: "arrow"
  };

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

  generateIcon() {
    if(this.props.icon === "plus") {
      return <PlusIcon className={this.generateClassName("icon")}/>
    } else if (this.props.icon === 'minus') {
      return <MinusIcon className={this.generateClassName("icon")}/>
    } else {
      return <RightArrowIcon className={this.generateClassName("icon")} /> ;
    }
  }

  render() {
    return (
      <div className={this.generateBlockName()}>
        <div className={this.generateClassName("fill")}>
          <a href={this.props.link} className={this.generateClassName("text")}>{this.props.content}</a>
          {this.generateIcon()}
        </div>
      </div>
    )
  }
}
