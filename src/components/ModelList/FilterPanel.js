import React, { Component } from "react";
import "./FilterPanel.css"
import "./FilterGroup.js"
import FilterGroup from "./FilterGroup";

export default class FilterPanel extends Component{
  makeFilterGroupsFromState = () => {
    let groups = [];
    for(let i = 0; i < this.props.filterGroups.length; i++){
      groups.push(<FilterGroup filterGroup={this.props.filterGroups[i]} toggleFilter = {this.props.toggleFilter} />);
    }
    return groups;
  }

  render() {
    return(
      <div style={{background: "gainsboro", padding: "12px"}}>
        {this.makeFilterGroupsFromState()}
      </div>
    );
  }
}
