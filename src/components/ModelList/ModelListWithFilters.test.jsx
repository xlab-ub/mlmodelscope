import ModelListWithFilters from "./ModelListWithFilters";
import expect from "expect";
import React from 'react';
import {shallow} from 'enzyme';

describe('The Model List Filters', () => {
  const defaultFrameworks = [
      {name: "MXNet", label: "MXNet", isActive: false},
      {name: "Onnxruntime", label: "Onnxruntime", isActive: false},
      {name: "PyTorch", label: "PyTorch", isActive: false},
      {name: "TensorFlow", label: "TensorFlow", isActive: false},
    ];

  const defaultModels = [
    createModel("ChickenModel", "chicken", "MXNet", "classification"),
    createModel("TigerSharkModel", "this model says everything is a tiger shark", "PyTorch", "classification"),
    createModel("BoxModel", "this model puts boxes around stuff", "TensorFlow", "boundingbox"),
    createModel("OnyxModel", "this model uses onnxruntime", "Onnxruntime", "classification"),
    createModel("ClonyxModel", "a clone of onnxruntime tigershark", "Onnxruntime", "classification"),
    createModel("InstanceModel", "this model segments an instance", "Onnxruntime", "instancesegment"),
    createModel("Clonyx2", "tigershark tigershark", "Onnxruntime", "instancesegment"),
  ];

  let modelList;

  beforeEach(() => {
    modelList = shallow(<ModelListWithFilters frameworkOptions={defaultFrameworks} models={defaultModels} />);
  });

  it('creates framework options for filter group', () => {
    let frameworkFilterGroup = modelList.state("filterGroups").find(group => group.header == "Frameworks");
    expect(frameworkFilterGroup.options).toEqual(defaultFrameworks);
  });

  it('can filter by framework', () => {
    modelList.instance().toggleFilter("Frameworks", "single", "PyTorch");
    let filteredModels = modelList.instance().filterModels();
    expect(filteredModels.length).toEqual(1);
    expect(filteredModels[0]).toEqual(defaultModels[1]);
  });

  it('can filter by task', () => {
    modelList.instance().toggleFilter("Tasks", "single", "boundingbox");
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
    modelList.instance().toggleFilter("Tasks", "single", "classification");
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
});

function createModel(name, description, framework, task) {
  return {name: name, description: description, framework: {name: framework}, output: {type: task}};
}
