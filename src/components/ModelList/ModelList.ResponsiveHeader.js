import SearchBar from "../Common/SearchBar";
import SortButton from "../Buttons/SortButton";
import React from "react";

export function ModelListResponsiveHeader(props) {
  const ActiveFilters = () => <div className={"model-list-page__responsive-header-active-filters"}>
    <div className={"model-list-page__responsive-header-active-filters-row"}>
      <p className={"model-list-page__responsive-header-active-filters-title"}>Active Filters:</p>
      <button onClick={props.clearFilters} className={"model-list-page__responsive-header-active-filters-clear"}>Clear
        filters
      </button>
    </div>

    <p
      className={"model-list-page__responsive-header-active-filters-values"}>{props.activeFilters.map(filter => filter.label).join(", ")}</p>
  </div>

  const Sort = () => <div className="model-list-page__sort-container">
    <SortButton isSortAscending={props.sortAscending}
                updateSortByNameIsAscending={props.updateSortByNameIsAscending}/>
  </div>

  const FilterButton = () => <button className={"model-list-page__responsive-header-filter-container-btn"}
                                     onClick={props.openFilter}>
    Filter Models By ({props.activeFilters.length})
  </button>


  return <div className={"model-list-page__responsive-header"}>
    <div className={"model-list-page__responsive-header-search-container"}>
      <SearchBar updateSearchText={props.updateSearchText} searchText={props.searchText}/>
    </div>
    <div className={"model-list-page__responsive-header-filter-container"}>
      {props.activeFilters.length > 0 ?
        <>
          <FilterButton/>
          <ActiveFilters/>
          <Sort/>
        </>
        :
        <div className={"model-list-page__responsive-header-filter-container-row"}>
          <FilterButton/>
          <Sort/>
        </div>
      }
    </div>

  </div>;
}
