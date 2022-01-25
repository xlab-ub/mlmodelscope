import React, { Component } from "react";

export default class FilterGroup extends Component{
  activeTag="ActiveTag";
  inactiveTag="InactiveTag";

  onClick = (e) => {
    let target = e.target;
    let name = this.props.filterGroup.header;
    let select = this.props.filterGroup.select;
    let tag = target.innerHTML;
    this.props.toggleFilter(name, select, tag);
  }

  render(){
    let options = this.props.filterGroup.options;
    let buttons = [];
    for(let i = 0; i < options.length; i++){
      let className = options[i].isActive?this.activeTag:this.inactiveTag;
      let text = options[i].label;
      buttons.push(<button key={i} className={className} onClick={this.onClick}>{text}</button>);
    }

    return(
      <div>
        <p>{this.props.filterGroup.header}</p>
        {buttons}
      </div>
    );
  }
}
