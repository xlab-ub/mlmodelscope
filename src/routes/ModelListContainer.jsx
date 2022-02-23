import React, { Component } from "react";
import ModelList from "../components/ModelList/ModelList";
import GetApiHelper from "../helpers/api";
import ModelListWithFilters from "../components/ModelList/ModelListWithFilters";

export default class ModelListContainer extends Component {
  constructor(props){
    super(props);
    this.api = GetApiHelper();
    this.state = {
      frameworkOptions: [],
      models: []
    }
  }

  componentDidMount() {
    this.getModels();
    this.getFrameworks();
  }

  getModels() {
    this.modelSubscription = this.api.Models.subscribe({
      next: (models) => {
        this.setState({models: models});
      }
    });
    this.api.getModels();
  }

  getFrameworks() {
    this.frameworkSubscription = this.api.Frameworks.subscribe({
      next: (frameworks) => {
        let frameworkOptionsFromApi = frameworks.map(framework => {
          return {
            id: framework.id,
            name: framework.name,
            label: framework.name,
            isActive: false
          }
        });

        this.setState({
          frameworkOptions: frameworkOptionsFromApi
        });
      }
    });
    this.api.getFrameworks();
  }

  componentWillUnmount() {
    this.modelSubscription.unsubscribe();
    this.frameworkSubscription.unsubscribe();
  }

  getActiveFilters() {
    let filters = {};
    let activeFramework = this.state.filterGroups[0].options.find(frOption => frOption.isActive);
    let activeTask = this.state.filterGroups[1].options.find(taskOption => taskOption.isActive);
    if (!!activeFramework){
      filters.framework = activeFramework.id;
    }
    if (!!activeTask){
      filters.task = activeTask.name;
    }
    return filters;
  }

  render() {
    let machineOptions = [
      {name: "amd64", label: "amd64", isActive: false},
    ];
    return <ModelListWithFilters frameworkOptions={this.state.frameworkOptions} machineOptions={machineOptions} models={this.state.models} />;
  }
}
