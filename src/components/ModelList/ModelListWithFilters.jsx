import React, { Component } from "react";
import ModelList from "./ModelList";
import clone from "../../helpers/cloner";

export default class ModelListWithFilters extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterGroups: this.makeFilterGroups(),
      filteredModels: clone(this.props.models),
      searchText: "",
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.frameworkOptions !== prevProps.frameworkOptions){
      this.setState({filterGroups: this.makeFilterGroups()});
    }

    if(this.props.models !== prevProps.models){
      this.setState({filteredModels: clone(this.props.models)});
      this.filterModels();
    }
  }

  makeFilterGroups() {
    return [
      {
        header: "Frameworks",
        description: "What the model is running on",
        select: "single",
        fieldA: "framework",
        fieldB: "name",
        options: clone(this.props.frameworkOptions),
      },
      {
        header: "Tasks",
        description: "What the model is trying to do with the machine and input data",
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

  filterModels = () => {
    let result = clone(this.props.models);
    for(let i = 0; i < this.state.filterGroups.length; i++){
      result = this.filterByOneField(result, this.state.filterGroups[i]);
    }
    result = this.search(result);
    this.setState({filteredModels: result});
  }

  filterByOneField = (unfilteredModels, filterGroup) => {
    let activeOptions = filterGroup.options.filter(o => o.isActive);
    if(activeOptions.length === 0 || activeOptions.length === filterGroup.options.length){
      return unfilteredModels;
    }
    let filteredModels=[];
    let j = filterGroup.fieldA;
    let k = filterGroup.fieldB;
    for(let i = 0; i < activeOptions.length; i++){
      filteredModels = filteredModels.concat(unfilteredModels.filter(model => model[j][k] === activeOptions[i].name));
    }
    return filteredModels;
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
    this.filterModels();
  }

  toggleFilterMulti = (filterGroup, target) => {
    let targetOption = filterGroup.options.find(option => option.name === target);
    if(!!targetOption)
      targetOption.isActive = !targetOption.isActive;
  }

  toggleFilterSingle = (filterGroup, target) => {
    let options = filterGroup.options;
    if (!options){
      return;
    }
    for(let i = 0 ; i < options.length; i++){
      if(options[i].name === target){
        options[i].isActive = !options[i].isActive;
      }
      else{
        options[i].isActive = false;
      }
    }
  }

  updateSearchText = (inputText) => {
    this.setState({searchText: inputText});
    this.filterModels();
  }

  search = (unfilteredModels) => {
    const lowerCaseSearch = this.state.searchText.toLowerCase();
    return unfilteredModels.filter(model => model.name.toLowerCase().includes(lowerCaseSearch) || model.description.toLowerCase().includes(lowerCaseSearch));
  }

  render() {
    return <ModelList filterGroups={this.state.filterGroups} models={this.state.filteredModels} toggleFilter={this.toggleFilter} updateSearchText={this.updateSearchText}/>;
  }
}
