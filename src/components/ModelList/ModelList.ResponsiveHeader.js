import SearchBar from "../Common/SearchBar";
import SortButton from "../Buttons/SortButton";
import React from "react";
import {ActiveFilters} from "./ActiveFilters";

export function ModelListResponsiveHeader(props) {

  const Sort = () => <div className="model-list-page__sort-container">
    <SortButton isSortAscending={props.sortAscending}
                updateSortByNameIsAscending={props.updateSortByNameIsAscending}/>
  </div>

  const FilterButton = () => <button className={"model-list-page__responsive-header-filter-container-btn"}
                                     onClick={props.openFilter}>
    Filter models by ({props.activeFilters.length})
  </button>


  return <div className={"model-list-page__responsive-header"}>
    <div className={"model-list-page__responsive-header-search-container"}>
      <SearchBar updateSearchText={props.updateSearchText} searchText={props.searchText}/>
    </div>
    <div className={"model-list-page__responsive-header-filter-container"}>
      {props.activeFilters.length > 0 ?
        <>
          <FilterButton/>
          <ActiveFilters clearFilters={props.clearFilters} activeFilters={props.activeFilters}/>
          <Sort/>
        </>
        :
        <div className={"model-list-page__responsive-header-filter-container-row"}>
          <FilterButton/>
          <div className={"model-list-page__responsive-header-filter-container-placeholder"}></div>

          <Sort/>
        </div>
      }
    </div>

  </div>;
}
