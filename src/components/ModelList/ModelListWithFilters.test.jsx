import ModelListWithFilters from "./ModelListWithFilters";
import expect from "expect";
import React from 'react';
import {shallow} from 'enzyme';
import {image_classification, instance_segmentation, object_detection} from "../../helpers/TaskIDs";

describe('The Model List Filters', () => {


  const defaultFrameworks = [
    {name: "MXNet", label: "MXNet", isActive: false},
    {name: "Onnxruntime", label: "Onnxruntime", isActive: false},
    {name: "PyTorch", label: "PyTorch", isActive: false},
    {name: "TensorFlow", label: "TensorFlow", isActive: false},
  ];

  const defaultModels = [
    createModel("ChickenModel", "chicken", "MXNet", image_classification, ["amd64"]),
    createModel("TigerSharkModel", "this model says everything is a tiger shark", "PyTorch", image_classification, ["amd64"]),
    createModel("BoxModel", "this model puts boxes around stuff", "TensorFlow", object_detection, ["amd64"]),
    createModel("OnyxModel", "this model uses onnxruntime", "Onnxruntime", image_classification, ["ILLIAC", "ENIAC"]),
    createModel("ClonyxModel", "a clone of onnxruntime tigershark", "Onnxruntime", image_classification, ["amd64"]),
    createModel("InstanceModel", "this model segments an instance", "Onnxruntime", instance_segmentation, ["amd64"]),
    createModel("Clonyx2", "tigershark tigershark", "Onnxruntime", instance_segmentation, ["amd64"]),
  ];

  const defaultMachines = [
    {name: "amd64", label: "Amd64", isActive: false},
    {name: "ILLIAC", label: "ILLIAC", isActive: false},
    {name: "ENIAC", label: "ENIAC", isActive: false},
  ]
  let modelList;


  beforeEach(() => {
    modelList = shallow(<ModelListWithFilters frameworkOptions={defaultFrameworks} models={defaultModels}
                                              machineOptions={defaultMachines}/>);
    modelList.instance().clearFilters();
  });


  it("clearFilters clears all filters", () => {
    const instance = modelList.instance();
    let filterGroup = instance.state.filterGroups[0];
    let target = "classification";
    instance.toggleFilterSingle(filterGroup, target);

    instance.clearFilters();

    let filters = instance.state.filterGroups.filter(group => group.options.filter(opt => opt.isActive).length > 0);

    expect(filters.length).toEqual(0);

  });

  it('creates framework options for filter group', () => {
    let frameworkFilterGroup = modelList.state("filterGroups").find(group => group.header === "Frameworks");
    expect(frameworkFilterGroup.options).toEqual(defaultFrameworks);
  });

  it('can filter by framework', () => {
    modelList.instance().toggleFilter("Frameworks", "single", "PyTorch");
    let filteredModels = modelList.instance().filterModels();
    expect(filteredModels.length).toEqual(1);
    expect(filteredModels[0]).toEqual(defaultModels[1]);
  });

  it('can filter by task', () => {
    modelList.instance().toggleFilter("Tasks", "single", object_detection);
    let filteredModels = modelList.instance().filterModels();
    expect(filteredModels.length).toEqual(1);
    expect(filteredModels[0]).toEqual(defaultModels[2]);
  });

  it('can search', () => {
    modelList.instance().updateSearchText("ChICKeN");
    let filteredModels = modelList.instance().filterModels();
    expect(filteredModels.length).toEqual(1);
    expect(filteredModels[0]).toEqual(defaultModels[0]);
  });

  it('can combine filters', () => {
    modelList.instance().toggleFilter("Frameworks", "single", "Onnxruntime");
    modelList.instance().toggleFilter("Tasks", "single", image_classification);
    modelList.instance().updateSearchText("tigershark");
    let filteredModels = modelList.instance().filterModels();
    expect(modelList.state("searchText")).toEqual("tigershark");
    expect(filteredModels.length).toEqual(1);
    expect(filteredModels[0]).toEqual(defaultModels[4]);
  });

  it('sorts the results', () => {
    let filteredModels = modelList.instance().filterModels();
    expect(filteredModels).toEqual([defaultModels[2], defaultModels[0], defaultModels[6], defaultModels[4], defaultModels[5], defaultModels[3], defaultModels[1]]);
  });

  it('can sort in reverse order', () => {
    modelList.instance().updateSortByNameIsAscending(false);
    let filteredModels = modelList.instance().filterModels();
    expect(filteredModels).toEqual([defaultModels[1], defaultModels[3], defaultModels[5], defaultModels[4], defaultModels[6], defaultModels[0], defaultModels[2]]);
  });

  it('can filter by first machine', () => {
    modelList.instance().toggleFilter("Machines", "single", "ILLIAC");
    let filteredModels = modelList.instance().filterModels();
    expect(filteredModels.length).toEqual(1);
    expect(filteredModels[0]).toEqual(defaultModels[3]);
  });

  it("removes task filter options from list when a model is selected", () => {

    const instance = modelList.instance();
    const model = instance.props.models[0];
    instance.selectModel(model);
    const options = instance.state.filterGroups[0].options;

    expect(options.length).toEqual(1);
    expect(options[0].name.toLowerCase()).toEqual(model.output.type.toLowerCase());
  })

  it("automatically starts filtering tasks when a model is selected", () => {
    const instance = modelList.instance();
    const model = instance.props.models[0];
    instance.selectModel(model);
    const options = instance.state.filterGroups[0].options[0];

    expect(options.isActive).toEqual(true);
  })

  it("replaces removed task filters when deselecting a model", () => {
    const instance = modelList.instance();
    const model = instance.props.models[0];
    instance.selectModel(model);
    const taskListLengthSelected = instance.state.filterGroups[0].options.length;
    instance.deselectModel(model);
    const taskListLengthNotSelected = instance.state.filterGroups[0].options.length;
    expect(taskListLengthNotSelected).toBeGreaterThan(taskListLengthSelected);
  })


  //Since all current models have only one machine, we are shifting priorities to focus on more important features
  //Uncomment this test when it is time to add support for multiple machines
  /*  it('can filter by machine when model has more than one machine', () => {
      modelList.instance().toggleFilter("Machines", "single", "ENIAC");
      let filteredModels = modelList.instance().filterModels();
      expect(filteredModels.length).toEqual(1);
      expect(filteredModels[0]).toEqual(defaultModels[3]);
    });*/
});

function createModel(name, description, framework, task, machines) {
  let architectures = machines.map(machine => ({name: machine}));
  return {
    name: name,
    description: description,
    framework: {
      name: framework,
      architectures: architectures,
    },
    output: {type: task}
  };
}
