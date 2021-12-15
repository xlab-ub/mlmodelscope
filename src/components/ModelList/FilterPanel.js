import React, { Component } from "react";
import "./FilterPanel.css"

export default class FilterPanel extends Component{
  OnClickFramework = (e) => {
    console.log("On click handler called");
    let target = e.target;
    let tag = target.innerHTML;
    console.log(tag);
    this.props.toggleFramework(tag);
  }

  frameworkButtons = () => {
    console.log("Getting buttons");
    let buttons = [];
    console.log("Input:" + this.props.frameworks);
    for(let i = 0; i < this.props.frameworks.length; i++){
      let className = this.props.frameworks[i].isActive?"ActiveTag":"InactiveTag";
      let text = this.props.frameworks[i].name;
      console.log("Getting " + text + " button");
      buttons.push(<button className={className} onClick={this.OnClickFramework}>{text}</button>);
    }
    console.log("Output:" + buttons);
    return buttons;
  }
  render() {
    return(
      <div style={{background: "gainsboro", padding: "12px"}}>
        <p>Framework</p>
        {this.frameworkButtons()}
      </div>
    );
  }
}
