import React, { Component } from "react";
import "./FilterPanel.css"

export default class FilterPanel extends Component{
  OnClickFramework = (e) => {
    let target = e.target;
    let tag = target.innerHTML;
    this.props.toggleFramework(tag);
  }

  frameworkButtons = () => {
    let buttons = [];
    for(let i = 0; i < this.props.frameworks.length; i++){
      let className = this.props.frameworks[i].isActive?"ActiveTag":"InactiveTag";
      let text = this.props.frameworks[i].name;
      buttons.push(<button className={className} onClick={this.OnClickFramework}>{text}</button>);
    }
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
