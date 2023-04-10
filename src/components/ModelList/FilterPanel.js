import React, {Component} from "react";
import FilterGroup from "./FilterGroup";

export default class FilterPanel extends Component {
  makeFilterGroupsFromState = () => {
    let groups = [];
    for (let i = 0; i < this.props.filterGroups.length; i++) {
      const fg = this.props.filterGroups[i];
      if (!this.props.hideTasks || fg.header !== "Tasks")
        groups.push(<FilterGroup key={i} filterGroup={fg} toggleFilter={this.props.toggleFilter}/>);
    }
    return groups;
  }

  render() {
    return (
      <div className="filter-panel">
        {!this.props.hidePanelHeader &&
          <p className="filter-panel__header">Filter models by</p>
        }
        {this.makeFilterGroupsFromState()}
      </div>
    );
  }
}
