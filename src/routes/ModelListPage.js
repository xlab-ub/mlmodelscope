import React, { Component } from "react";
import Helmet from "react-helmet";
import { Row, Col, Layout } from "antd";
import ModelHeader from "../components/ModelList/ModelHeader"
import FilterPanel from "../components/ModelList/FilterPanel";
import ModelCardsList from "../components/ModelList/ModelCardsList";
import GetApiHelper from "../helpers/api";

export default class ModelListPage extends Component {
  render(){
    return(
      <div className="model-list-page">
        <Helmet title="Models" meta={[{ property: "og:title", content: "Models" }]} />
        <ModelHeader />
        <div className="model-list-page__content">
          <div className="model-listpage__search">
            <input type="search" placeholder="Search models" name="search" id="search" />
          </div>
          <div className="model-list-page__filters">
            <FilterPanel className="model-list-page__filters" filterGroups={this.props.filterGroups} toggleFilter={this.props.toggleFilter} />
          </div>
          <div className="model-list-page__list">
            <ModelCardsList className="model-list-page__list" filterGroups={this.props.filterGroups} models={this.props.models} />
          </div>
        </div>
      </div>
    );
  }
}
