import React, { Component } from "react";

export default class FilterGroup extends Component{
  activeTag="active";
  inactiveTag="inactive";

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
      let classNameAddon = options[i].isActive?this.activeTag:this.inactiveTag;
      let className = "filter-group__button-" + classNameAddon;
      let text = options[i].label;
      buttons.push(<button key={i} className={className} onClick={this.onClick}>{text}</button>);
    }

    return(
      <div className="filter-group">
        <p className="filter-group__header">{this.props.filterGroup.header}</p>
        {buttons}
      </div>
    );
  }
}
