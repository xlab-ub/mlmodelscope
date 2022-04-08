import {ReactComponent as SortBars} from "../../resources/icons/sort-bars.svg";
import {ReactComponent as X} from "../../resources/icons/x.svg";
import FilterPanel from "./FilterPanel";
import React from "react";

export function ModelListResponsiveFilterContent(props: { showFilterMenu: boolean | any, closeFilter: () => void, filterGroups: any, toggleFilter: any }) {
  return <div hidden={!props.showFilterMenu} aria-hidden={!props.showFilterMenu}
              className={"model-list-page__filter-content"}>
    <div className={"model-list-page__filter-content-header"}>
      <p className={"model-list-page__filter-content-header-title"}>
        <SortBars/>{" "}Filter Models By
      </p>
      <button className={"model-list-page__filter-content-header-close"} onClick={props.closeFilter}>
        <X/>
      </button>
    </div>
    <div className={"model-list-page__filter-content-body"}>
      <FilterPanel className="model-list-page__filters" filterGroups={props.filterGroups}
                   toggleFilter={props.toggleFilter} hidePanelHeader/>
    </div>
  </div>;
}
