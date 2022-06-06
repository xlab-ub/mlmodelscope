import React, {Component} from "react";
import ModelList from "./ModelList";
import clone from "../../helpers/cloner";
import {SearchFiltersLocalStorage} from "../../helpers/localStorage";
import Task from "../../helpers/Task";
import {instance_segmentation} from "../../helpers/TaskIDs";

export default class ModelListWithFilters extends Component {
  static defaultProps: {
    add: false,
    runModels: () => {},
    selectedModels: []
  }

  constructor(props) {
    super(props);

    let stored = this.getStoredFilters();

    let filterGroups = this.forceTaskFilters(stored?.filterGroups || this.getDefaultGroups());


    let searchText = stored?.searchText || "";
    this.state = {
      filterGroups: filterGroups,
      searchText: searchText,
      isSortAscending: true,
      selectedModels: props.selectedModels || [],
    }
    this.makeFilterGroups = this.makeFilterGroups.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
  }


  componentDidUpdate(prevProps, prevState) {
    if (this.props.frameworkOptions !== prevProps.frameworkOptions || this.state.selectedModels.length !== prevState.selectedModels.length) {
      let filterGroups = this.makeFilterGroups();
      this.reAssignActiveLabels(filterGroups, prevState.filterGroups);
      if (this.state.selectedModels.length > 0)
        this.ensureSelectedTaskIsChecked(filterGroups, this.state.selectedModels[0]);
      filterGroups = this.forceTaskFilters(filterGroups);
      this.storeCurrentFilters(filterGroups);
      this.setState({filterGroups: filterGroups});
    } else {
      this.storeCurrentFilters();
    }
    if (this.props.selectedModels !== prevProps.selectedModels) {
      this.setState({selectedModels: this.props.selectedModels});
    }

  }

  reAssignActiveLabels(cur, prev) {
    cur.forEach((group, i) => {
      let prevGroup = prev[i];
      group.options.forEach(option => {
        let prevOption = prevGroup?.options.find(opt => opt.name === option.name);
        if (prevOption)
          option.isActive = prevOption.isActive;
      })
    })
  }

  ensureSelectedTaskIsChecked(filterGroups, selectedModel) {
    const task = selectedModel.output.type;
    const taskList = filterGroups.find(group => group.dataPath[1] === "type");
    const option = taskList.options.find(opt => opt.name === task);
    option.isActive = true;
  }

  storeCurrentFilters = (filterGroupOverride = null) => {
    let storageObject = {
      searchText: this.state.searchText,
      filterGroups: filterGroupOverride || this.state.filterGroups
    };
    let storageHelper = new SearchFiltersLocalStorage();
    storageHelper.setFilters(storageObject);
  }

  getStoredFilters = () => {
    let storageHelper = new SearchFiltersLocalStorage();
    return storageHelper.getFilters();
  }

  getDefaultGroups() {
    const taskOptions = Task.getStaticTasks().map(task => ({name: task.id, label: task.name, isActive: false}));

    return [
      {
        header: "Tasks",
        description: "What the model is trained to do (select one)",
        select: "single",
        dataPath: ["output", "type"],
        options: [...taskOptions, {
          name: instance_segmentation,
          label: Task.image_instance_segmentation.name,
          isActive: false
        }]
      },
      {
        header: "Frameworks",
        description: "What the model is running on (select one)",
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

  makeFilterGroups() {
    const defaultGroups = this.getDefaultGroups();
    const selected = this.state.selectedModels;
    if (selected.length > 0)
      defaultGroups[0].options = this.getTaskListOptions(defaultGroups, selected);

    return defaultGroups;
  }

  getTaskListOptions(groups, selected) {
    return groups[0].options
      .filter(
        opt => selected.some(sel => sel.output.type === opt.name)
      ).map(opt => ({...opt, isActive: true}));
  }

  filterModels = () => {
    let result = clone(this.props.models);
    for (let i = 0; i < this.state.filterGroups.length; i++) {
      result = this.filterByOneField(result, this.state.filterGroups[i]);
    }
    result = this.search(result);
    result = this.sortModels(result);
    return result;
  }


  filterByOneField = (unfilteredModels, filterGroup) => {
    let activeOptions = filterGroup.options.filter(o => o.isActive);
    if (activeOptions.length === 0) {
      return unfilteredModels;
    }
    let filteredModels = [];
    let fields = filterGroup.dataPath;

    for (let i = 0; i < activeOptions.length; i++) {
      filteredModels = filteredModels.concat(unfilteredModels.filter(model => {
        let dataFromFieldPath = this.getDataFromFieldPath(model, fields);
        let name = activeOptions[i].name;
        return dataFromFieldPath === name;

      }));
    }
    return filteredModels;
  }

  getDataFromFieldPath(object, fields) {
    let result = object;
    for (let i = 0; i < fields.length; i++) {
      result = result[fields[i]];
    }
    return result;
  }

  toggleFilter = (filterName, selectMode, target) => {
    let filterGroupsCopy = [...this.state.filterGroups];
    let i = filterGroupsCopy.findIndex(group => group.header === filterName);
    let filterGroup = {...filterGroupsCopy[i]};

    if (selectMode === "multi") {
      this.toggleFilterMulti(filterGroup, target);
    } else {
      this.toggleFilterSingle(filterGroup, target)
    }

    filterGroupsCopy[i] = filterGroup;
    this.setState({filterGroups: filterGroupsCopy});
  }

  toggleFilterMulti = (filterGroup, target) => {
    let targetOption = filterGroup.options.find(option => option.name === target);
    if (!!targetOption)
      targetOption.isActive = !targetOption.isActive;
  }

  toggleFilterSingle = (filterGroup, target) => {
    let options = filterGroup.options;
    if (!options) {
      return;
    }
    for (let i = 0; i < options.length; i++) {
      if (options[i].name === target) {
        options[i].isActive = !options[i].isActive;
      } else {
        options[i].isActive = false;
      }
    }
  }

  clearFilters() {
    let filterGroups = clone(this.state.filterGroups);

    const isTask = (filterGroup) => filterGroup.header === "Tasks";


    filterGroups = filterGroups.map(filterGroup => ({
      ...filterGroup,
      options: filterGroup.options.map(opt => ({
        ...opt,
        isActive: isTask(filterGroup) && this.props.hideTaskFilters ? opt.isActive : false
      }))
    }));

    this.setState({filterGroups: filterGroups});
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
    if (this.state.isSortAscending) {
      result = result.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1);
    } else {
      result = result.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : -1);
    }
    return result;
  }

  selectModel = (model) => {
    const currentSelectedModels = clone(this.state.selectedModels);

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

  forceTaskFilters = (filterGroups) => {
    let task = this.props.task;
    if (task) {
      filterGroups[0].options = filterGroups[0].options.map(opt => ({...opt, isActive: opt.name === task}));
    }
    return filterGroups;
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
                      add={this.props.add}
                      hideTaskFilters={this.props.hideTaskFilters}
                      task={this.props.task}
                      clearFilters={this.clearFilters}/>;
  }
}
