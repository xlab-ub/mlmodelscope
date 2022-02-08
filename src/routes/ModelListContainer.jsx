import React, { Component } from "react";
import ModelListPage from "./ModelListPage";
import GetApiHelper from "../helpers/api";

export default class ModelListContainer extends Component {
  constructor(props){
    super(props);
    this.frameworkOptions = [];
    this.api = GetApiHelper();
    this.state = {
      filterGroups: this.makeFilterGroups(),
      models: []
    }
  }

  toggleFilter = (filterName, selectMode, target) => {
    let filterGroupsCopy = [...this.state.filterGroups];
    let i = filterGroupsCopy.findIndex(group => group.header === filterName);
    let filterGroup = {...filterGroupsCopy[i]};

    if(selectMode === "multi"){
      this.toggleFilterMulti(filterGroup, target);
    }
    else{
      this.toggleFilterSingle(filterGroup, target)
    }

    filterGroupsCopy[i] = filterGroup;
    this.setState(oldState => ({filterGroups: filterGroupsCopy}));
    this.getModels();
  }

  toggleFilterMulti = (filterGroup, target) => {
    let targetOption = filterGroup.options.find(option => option.label === target);
    if(!!targetOption)
      targetOption.isActive = !targetOption.isActive;
  }

  toggleFilterSingle = (filterGroup, target) => {
    let options = filterGroup.options;
    if (!options){
      return;
    }
    for(let i = 0 ; i < options.length; i++){
      if(options[i].label === target){
        options[i].isActive = !options[i].isActive;
      }
      else{
        options[i].isActive = false;
      }
    }
  }

  componentDidMount() {
    this.getModels();
    this.getFrameworks();
  }

  getModels() {
    this.api.Models.subscribe({
      next: (models) => {
        this.setState({models: models});
      }
    });
    this.api.getModels(this.getActiveFilters());
  }

  getFrameworks() {
    this.api.Frameworks.subscribe({
      next: (frameworks) => {
        this.frameworkOptions = frameworks.map(framework => {
          return {
            id: framework.id,
            name: framework.name,
            label: framework.name,
            isActive: false
          }
        });

        this.setState({
          filterGroups: this.makeFilterGroups()
        })
      }
    });
    this.api.getFrameworks();
  }

  componentWillUnmount() {
    this.api.Models.unsubscribe();
    this.api.Frameworks.unsubscribe();
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

  makeFilterGroups() {
    return [
      {
        header: "Frameworks",
        select: "single",
        fieldA: "framework",
        fieldB: "name",
        options: this.frameworkOptions
      },
      {
        header: "Tasks",
        select: "single",
        fieldA: "output",
        fieldB: "type",
        options: [
          {name: "classification", label: "Classification", isActive: false},
          {name: "boundingbox", label: "Object Detection", isActive: false},
          {name: "semanticsegment", label: "Semantic Segmentation", isActive: false},
          {name: "instancesegment", label: "Instance Segmentation", isActive: false},
          {name: "image", label: "Image Enhancement", isActive: false}
        ]
      }
    ];
  }

  render() {
    return <ModelListPage filterGroups={this.state.filterGroups} models={this.state.models} toggleFilter={this.toggleFilter}/>;
  }
}
