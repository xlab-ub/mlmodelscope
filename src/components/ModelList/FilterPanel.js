import React, { Component } from "react";
import "./FilterPanel.css"

export default class FilterPanel extends Component{
  activeTag="ActiveTag";
  inactiveTag="InactiveTag";

  OnClickFramework = (e) => {
    let target = e.target;
    let tag = target.innerHTML;
    this.props.toggleFramework(tag);
  }

  frameworkButtons = () => {
    let buttons = [];
    for(let i = 0; i < this.props.frameworks.length; i++){
      let className = this.props.frameworks[i].isActive?this.activeTag:this.inactiveTag;
      let text = this.props.frameworks[i].name;
      buttons.push(<button className={className} onClick={this.OnClickFramework}>{text}</button>);
    }
    return buttons;
  }

  OnClickTask = (e) => {
    let target = e.target;
    let tag = target.innerHTML;
    this.props.toggleTask(tag);
  }

  taskButtons = () => {
    let buttons = [];
    for(let i = 0; i < this.props.tasks.length; i++){
      let className = this.props.tasks[i].isActive?this.activeTag:this.inactiveTag;
      let text = this.props.tasks[i].label;
      buttons.push(<button className={className} onClick={this.OnClickTask}>{text}</button>);
    }
    return buttons;
  }

  render() {
    return(
      <div style={{background: "gainsboro", padding: "12px"}}>
        <p>Frameworks</p>
        {this.frameworkButtons()}
        <p>Tasks</p>
        {this.taskButtons()}
      </div>
    );
  }
}
