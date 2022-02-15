import React, { Component } from "react";
import Helmet from "react-helmet";
import ModelHeader from "./ModelHeader"
import FilterPanel from "./FilterPanel";
import ModelCardsList from "./ModelCardsList";
import { ReactComponent as MagnifyingGlass } from "../../resources/icons/magnifying-glass.svg";

export default class ModelList extends Component {
  onSearchChange = (e) => {
    this.props.updateSearchText(e.target.value);
  }

  render(){
    return(
      <div className="model-list-page">
        <Helmet title="Models" meta={[{ property: "og:title", content: "Models" }]} />
        <ModelHeader />
        <div className="model-list-page__content">
          <div className="model-list-page__filters-search-container">
            <div className="model-list-page__search">
              <MagnifyingGlass className="model-list-page__search-icon" />
              <input className="model-list-page__search-input" type="search" placeholder="Search" name="search" id="search" onChange={this.onSearchChange} />
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
