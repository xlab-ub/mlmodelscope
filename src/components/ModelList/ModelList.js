import React from "react";
import FilterPanel from "./FilterPanel";
import SearchBar from "../Common/SearchBar";
import Header from "../Header/Header";
import {ModelListResponsiveHeader} from "./ModelList.ResponsiveHeader";
import {ModelListResponsiveFilterContent} from "./ModelList.ResponsiveFilterContent";
import TaskBanner from "./TaskBanner";
import {useModelListFilters} from "./useModelListFilters";
import {useModelListUI} from "./useModelListUI";
import withPagination from "../Paginator/Pagination";
import ModelCardsList from "./ModelCardsList";

const defaultProps = {
    add: false,
    selectedModels: [],
    selectModel: () => {
    },
    deselectModel: () => {
    },
    clearModels: () => {
    },
    runModels: () => {
    },
}

export default function ModelList(givenProps) {
    const props = {...defaultProps, ...givenProps};
    let {showFilterMenu, toggleShowFilterMenu, activeFilters} = useModelListFilters(props);
    let {makePageHeader, makeSelectedModelsBanner} = useModelListUI(props);

    let ModelCardsListWithPagination = withPagination(ModelCardsList, 'models', props.searchText);

    return (
        <div className="model-list-page">
            <Header/>
            {makePageHeader()}
            {props.hideTaskFilters && <TaskBanner task={props.task}/>}

            <ModelListResponsiveFilterContent
                showFilterMenu={showFilterMenu}
                closeFilter={toggleShowFilterMenu}
                filterGroups={props.filterGroups}
                toggleFilter={props.toggleFilter}
                hideTasks={props.hideTaskFilters}
            />
            <div
                aria-hidden={showFilterMenu}
                hidden={showFilterMenu}
                className={`model-list-page__content ${showFilterMenu && "model-list-page__content-hidden"}`}
            >
                <div className="model-list-page__filters-search-container">
                    <div className="model-list-page__search-bar">
                        <SearchBar updateSearchText={props.updateSearchText} searchText={props.searchText}/>
                    </div>
                    <div className="model-list-page__filters">
                        <FilterPanel className="model-list-page__filters" filterGroups={props.filterGroups}
                                     toggleFilter={props.toggleFilter} hideTasks={props.hideTaskFilters}/>
                    </div>
                </div>

                <div className={"model-list-page__body-wrapper"}>
                    <ModelListResponsiveHeader
                        updateSearchText={props.updateSearchText}
                        searchText={props.searchText}
                        openFilter={toggleShowFilterMenu}
                        sortAscending={props.sortDirection}
                        setSortDirection={props.setSortDirection}
                        activeFilters={activeFilters}
                        clearFilters={props.clearFilters}/>
                    <div
                        className={`model-list-page__list ${activeFilters.length === 0 && "model-list-page__list-no-filters"}`}>
                        <ModelCardsListWithPagination className="model-list-page__list" data={props.models}
                                                      add={props.add} selectedModels={props.selectedModels}
                                                      selectModel={props.selectModel}
                                                      deselectModel={props.deselectModel}/>
                    </div>
                </div>

            </div>
            {makeSelectedModelsBanner()}
        </div>
    );
}
