import React, { Component } from "react";

export default class FilterGroup extends Component{
  activeTag="active";
  inactiveTag="inactive";

  onClick = (name) => {
    let filterGroupName = this.props.filterGroup.header;
    let select = this.props.filterGroup.select;
    this.props.toggleFilter(filterGroupName, select, name);
  }

  render(){
    let options = this.props.filterGroup.options;
    let buttons = [];
    for(let i = 0; i < options.length; i++){
      let classNameAddon = options[i].isActive?this.activeTag:this.inactiveTag;
      let className = "filter-group__button-" + classNameAddon;
      let text = options[i].label;
      buttons.push(<button key={i} className={className} onClick={() => this.onClick(options[i].name)}>{text}</button>);
    }

    return(
      <div className="filter-group">
        <p className="filter-group__header">{this.props.filterGroup.header}</p>
        <p className="filter-group__description">{this.props.filterGroup.description}</p>
        {buttons}
      </div>
    );
  }
}
