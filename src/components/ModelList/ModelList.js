import React, {Component} from "react";
import ModelHeader from "./ModelHeader"
import FilterPanel from "./FilterPanel";
import ModelCardsList from "./ModelCardsList";
import SearchBar from "../Common/SearchBar";
import withPagination from "../Paginator/Pagination";
import ExperimentDetailHeader from "../ExperimentDetails/ExperimentDetailHeader";
import SelectedModelsBanner from "./SelectedModelsBanner";
import Header from "../Header/Header";
import {ModelListResponsiveHeader} from "./ModelList.ResponsiveHeader";
import {ModelListResponsiveFilterContent} from "./ModelList.ResponsiveFilterContent";
import TaskBanner from "./TaskBanner";

export default class ModelList extends Component {
  static defaultProps = {
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

  constructor(props) {
    super(props);

    this.state = {
      showFilterMenu: false
    }
    this.toggleShowFilterMenu = this.toggleShowFilterMenu.bind(this);
  }

  toggleShowFilterMenu() {
    this.setState({showFilterMenu: !this.state.showFilterMenu});
  }

  getActiveFilters() {
    let [taskFilters, ...restFilters] = this.props.filterGroups;
    let filters = restFilters;
    if (!this.props.task)
      filters.push(taskFilters);

    return filters.flatMap(group => group.options.filter(opt => opt.isActive));
  }

  render() {
    let activeFilters = this.getActiveFilters();

    let ModelCardsListWithPagination = withPagination(ModelCardsList, 'models', this.props.searchText);

    return (
      <div className="model-list-page">
        <Header/>
        {this.makePageHeader()}
        {this.props.hideTaskFilters && <TaskBanner task={this.props.task}/>}

        <ModelListResponsiveFilterContent
          showFilterMenu={this.state.showFilterMenu}
          closeFilter={this.toggleShowFilterMenu}
          filterGroups={this.props.filterGroups}
          toggleFilter={this.props.toggleFilter}
          hideTasks={this.props.hideTaskFilters}
        />
        <div
          aria-hidden={this.state.showFilterMenu}
          hidden={this.state.showFilterMenu}
          className={`model-list-page__content ${this.state.showFilterMenu && "model-list-page__content-hidden"}`}
        >
          <ModelListResponsiveHeader
            updateSearchText={this.props.updateSearchText}
            searchText={this.props.searchText}
            openFilter={this.toggleShowFilterMenu}
            sortAscending={this.props.isSortAscending}
            updateSortByNameIsAscending={this.props.updateSortByNameIsAscending}
            activeFilters={activeFilters}
            clearFilters={this.props.clearFilters}/>

          <div className="model-list-page__filters-search-container">
            <div className="model-list-page__search-bar">
              <SearchBar updateSearchText={this.props.updateSearchText} searchText={this.props.searchText}/>
            </div>
            <div className="model-list-page__filters">
              <FilterPanel className="model-list-page__filters" filterGroups={this.props.filterGroups}
                           toggleFilter={this.props.toggleFilter} hideTasks={this.props.hideTaskFilters}/>
            </div>
          </div>
          <div className="model-list-page__list">
            <ModelCardsListWithPagination className="model-list-page__list" data={this.props.models}
                                          add={this.props.add} selectedModels={this.props.selectedModels}
                                          selectModel={this.props.selectModel}
                                          deselectModel={this.props.deselectModel}/>
          </div>
        </div>
        {this.makeSelectedModelsBanner()}
      </div>
    );
  }

  makePageHeader = () => {
    if (this.props.add)
      return <ExperimentDetailHeader title={"Select models for your comparison"}/>
    else {
      return (<ModelHeader/>);
    }
  }

  makeSelectedModelsBanner = () => {
    if (this.props.add) {
      return (<SelectedModelsBanner selectedModels={this.props.selectedModels} deselectModel={this.props.deselectModel}
                                    clearModels={this.props.clearModels} runModels={this.props.runModels}/>);
    }
  }
}
