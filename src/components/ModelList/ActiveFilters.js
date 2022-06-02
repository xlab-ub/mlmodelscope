import React from "react";
import useBEMNaming from "../../common/useBEMNaming";
import "./_ActiveFilters.scss"

export const ActiveFilters = (props) => {
  const {getBlock, getElement} = useBEMNaming("active-filters");

  return <div className={getBlock() + " " + getElement(props.isSidebar ? "sidebar" : "")}>
    <div className={getElement("row")}>
      <p className={getElement("title")}>Active Filters:</p>
      <button onClick={props.clearFilters} className={getElement("clear")}>Clear
        filters
      </button>
    </div>
    <p
      className={getElement("values")}>{props.activeFilters.map(filter => filter.label).join(", ")}</p>
  </div>
}
