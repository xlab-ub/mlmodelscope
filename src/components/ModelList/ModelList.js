import React, { Component } from "react";
import Helmet from "react-helmet";
import ModelHeader from "./ModelHeader"
import FilterPanel from "./FilterPanel";
import ModelCardsList from "./ModelCardsList";
import SearchBar from "../Common/SearchBar";

export default class ModelList extends Component {
  render(){
    return(
      <div className="model-list-page">
        <Helmet title="Models" meta={[{ property: "og:title", content: "Models" }]} />
        <ModelHeader />
        <div className="model-list-page__content">
          <div className="model-list-page__filters-search-container">
            <div className="model-list-page__search-bar">
              <SearchBar updateSearchText={this.props.updateSearchText}/>
            </div>
            <div className="model-list-page__filters">
              <FilterPanel className="model-list-page__filters" filterGroups={this.props.filterGroups} toggleFilter={this.props.toggleFilter} />
            </div>
          </div>
          <div className="model-list-page__list">
            <ModelCardsList className="model-list-page__list" models={this.props.models} />
          </div>
        </div>
      </div>
    );
  }
}
