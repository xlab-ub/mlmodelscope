import React from "react";
import FilterGroup from "./FilterGroup";

export default function FilterPanel(props) {
  let groups = props.filterGroups
    .filter(filterGroup => !props.hideTasks || filterGroup.header !== "Tasks")
    .map((filterGroup, i) => <FilterGroup key={i} filterGroup={filterGroup} toggleFilter={props.toggleFilter}/>);

  return (
    <div className="filter-panel">
      {!props.hidePanelHeader &&
        <p className="filter-panel__header">Filter models by</p>
      }
      {groups}
    </div>
  );
}
