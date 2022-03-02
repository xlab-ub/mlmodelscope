import React, { Component } from "react";
import Helmet from "react-helmet";
import ModelHeader from "./ModelHeader"
import FilterPanel from "./FilterPanel";
import ModelCardsList from "./ModelCardsList";
import SearchBar from "../Common/SearchBar";
import withPagination from "../Paginator/Pagination";
import SortButton from "../Buttons/SortButton";

export default class ModelList extends Component {
  render() {
    let ModelCardsListWithPagination = withPagination(ModelCardsList, 'models', this.props.searchText);

    return (
      <div className="model-list-page">
        <Helmet title="Models" meta={[{ property: "og:title", content: "Models" }]} />
        <ModelHeader />
        <div className="model-list-page__content">
          <div className="model-list-page__sort-container">
            <SortButton isSortAscending={this.props.isSortAscending} updateSortByNameIsAscending={this.props.updateSortByNameIsAscending} />
          </div>
          <div className="model-list-page__filters-search-container">
            <div className="model-list-page__search-bar">
              <SearchBar updateSearchText={this.props.updateSearchText}/>
            </div>
            <div className="model-list-page__filters">
              <FilterPanel className="model-list-page__filters" filterGroups={this.props.filterGroups} toggleFilter={this.props.toggleFilter} />
            </div>
          </div>
          <div className="model-list-page__list">
            <ModelCardsListWithPagination className="model-list-page__list" data={this.props.models} />
          </div>
        </div>
      </div>
    );
  }
}
