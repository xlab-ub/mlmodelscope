import {ReactComponent as SortBars} from "../../resources/icons/sort-bars.svg";
import {ReactComponent as X} from "../../resources/icons/x.svg";
import FilterPanel from "./FilterPanel";
import React, {useState} from "react";

export function ModelListResponsiveFilterContent(props: { showFilterMenu: boolean | any, closeFilter: () => void, filterGroups: any, toggleFilter: any }) {
  const [isClosing, setIsClosing] = useState(false);

  const onClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      props.closeFilter();
      setIsClosing(false);
    }, 250);
  }

  return <div hidden={!props.showFilterMenu} aria-hidden={!props.showFilterMenu}
              className={`model-list-page__filter-content ${isClosing && "model-list-page__filter-content-closing"}`}>
    <div className={"model-list-page__filter-content-header"}>
      <p className={"model-list-page__filter-content-header-title"}>
        <SortBars/>{" "}Filter models by
      </p>
      <button className={"model-list-page__filter-content-header-close"} onClick={onClose}>
        <X/>
      </button>
    </div>
    <div className={"model-list-page__filter-content-body"}>
      <FilterPanel hideTasks={props.hideTasks} className="model-list-page__filters" filterGroups={props.filterGroups}
                   toggleFilter={props.toggleFilter} hidePanelHeader/>
    </div>
  </div>;
}
