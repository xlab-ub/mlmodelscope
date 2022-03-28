import React, { Component } from "react";
import ModelList from "./ModelList";
import clone from "../../helpers/cloner";

export default class ModelListWithFilters extends Component {
  static defaultProps: {
    add: false,
    runModels: () => {},
    selectedModels: []
  }

  constructor(props) {
    super(props);
    this.state = {
      filterGroups: this.makeFilterGroups(),
      searchText: "",
      isSortAscending: true,
      selectedModels: props.selectedModels || [],
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.frameworkOptions !== prevProps.frameworkOptions){
      this.setState({filterGroups: this.makeFilterGroups()});
    }
    if(this.props.selectedModels !== prevProps.selectedModels) {
      this.setState({selectedModels: this.props.selectedModels});
    }
  }

  makeFilterGroups() {
    return [
      {
        header: "Tasks",
        description: "What the model is trying to do with the machine and input data",
        select: "single",
        dataPath: ["output", "type"],
        options: [
          {name: "classification", label: "Classification", isActive: false},
          {name: "boundingbox", label: "Object Detection", isActive: false},
          {name: "semanticsegment", label: "Semantic Segmentation", isActive: false},
          {name: "instancesegment", label: "Instance Segmentation", isActive: false},
          {name: "image", label: "Image Enhancement", isActive: false}
        ]
      },
      {
        header: "Frameworks",
        description: "What the model is running on",
        select: "single",
        dataPath: ["framework", "name"],
        options: clone(this.props.frameworkOptions),
      },
      {
        header: "Machines",
        description: "Hardware that processes the model's functions",
        select: "single",
        dataPath: ["framework", "architectures", "0", "name"],
        options: clone(this.props.machineOptions),
      }
    ];
  }

  filterModels = () => {
    let result = clone(this.props.models);
    for(let i = 0; i < this.state.filterGroups.length; i++){
      result = this.filterByOneField(result, this.state.filterGroups[i]);
    }
    result = this.search(result);
    result = this.sortModels(result);
    return result;
  }

  filterByOneField = (unfilteredModels, filterGroup) => {
    let activeOptions = filterGroup.options.filter(o => o.isActive);
    if(activeOptions.length === 0 || activeOptions.length === filterGroup.options.length){
      return unfilteredModels;
    }
    let filteredModels=[];
    let fields = filterGroup.dataPath;
    for(let i = 0; i < activeOptions.length; i++){
      filteredModels = filteredModels.concat(unfilteredModels.filter(model => this.getDataFromFieldPath(model, fields) === activeOptions[i].name));
    }
    return filteredModels;
  }

  getDataFromFieldPath(object, fields) {
    let result = object;
    for(let i = 0; i < fields.length; i++) {
      result = result[fields[i]];
    }
    return result;
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
    this.setState({filterGroups: filterGroupsCopy});
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
  }

  search = (unfilteredModels) => {
    const lowerCaseSearch = this.state.searchText.toLowerCase();
    return unfilteredModels.filter(model => model.name.toLowerCase().includes(lowerCaseSearch) || model.description.toLowerCase().includes(lowerCaseSearch));
  }

  updateSortByNameIsAscending = (isAscending) => {
    this.setState({isSortAscending: isAscending});
  }

  sortModels = (unfilteredModels) => {
    let result = unfilteredModels;
    if(this.state.isSortAscending){
      result = result.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1);
    }
    else {
      result = result.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : -1);
    }
    return result;
  }

  selectModel = (model) => {
    const currentSelectedModels = this.state.selectedModels;

    currentSelectedModels.push(model);

    this.setState({selectedModels: currentSelectedModels});
  }

  deselectModel = (model) => {
    const currentSelectedModels = this.state.selectedModels;

    const modelToRemove = currentSelectedModels.find(m => m.id === model.id)

    const modelIndex = currentSelectedModels.indexOf(modelToRemove);

    const selectedModels = [...currentSelectedModels.slice(0, modelIndex), ...currentSelectedModels.slice(modelIndex + 1)];

    this.setState({selectedModels: selectedModels});
  }

  clearModels = () => {
    this.setState({selectedModels: []});
  }

  render() {
    return <ModelList filterGroups={this.state.filterGroups}
                      isSortAscending={this.state.isSortAscending}
                      models={this.filterModels()}
                      searchText={this.state.searchText}
                      toggleFilter={this.toggleFilter}
                      updateSearchText={this.updateSearchText}
                      updateSortByNameIsAscending={this.updateSortByNameIsAscending}
                      selectedModels={this.state.selectedModels}
                      selectModel={this.selectModel}
                      deselectModel={this.deselectModel}
                      clearModels={this.clearModels}
                      runModels={this.props.runModels}
                      add={this.props.add}/>;
  }
}
