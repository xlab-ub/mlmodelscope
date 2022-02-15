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

  it('creates framework options for filter group', () => {
    const modelList = shallow(<ModelListWithFilters frameworkOptions={defaultFrameworks} models={defaultModels} />);
    let frameworkFilterGroup = modelList.state("filterGroups").find(group => group.header == "Frameworks");
    expect(frameworkFilterGroup.options).toEqual(defaultFrameworks);
  });

  it('can filter by framework', () => {
    const modelList = shallow(<ModelListWithFilters frameworkOptions={defaultFrameworks} models={defaultModels} />);
    modelList.instance().toggleFilter("Frameworks", "single", "PyTorch");
    expect(modelList.state("filteredModels").length).toEqual(1);
    expect(modelList.state("filteredModels")[0]).toEqual(defaultModels[1]);
  });

  it('can filter by task', () => {
    const modelList = shallow(<ModelListWithFilters frameworkOptions={defaultFrameworks} models={defaultModels} />);
    modelList.instance().toggleFilter("Tasks", "single", "boundingbox");
    expect(modelList.state("filteredModels").length).toEqual(1);
    expect(modelList.state("filteredModels")[0]).toEqual(defaultModels[2]);
  });

  it('can search', () => {
    const modelList = shallow(<ModelListWithFilters frameworkOptions={defaultFrameworks} models={defaultModels} />);
    modelList.instance().updateSearchText("ChICKeN");
    expect(modelList.state("filteredModels").length).toEqual(1);
    expect(modelList.state("filteredModels")[0]).toEqual(defaultModels[0]);
  });

  it('can combine filters', () => {
    const modelList = shallow(<ModelListWithFilters frameworkOptions={defaultFrameworks} models={defaultModels} />);
    modelList.instance().toggleFilter("Frameworks", "single", "Onnxruntime");
    modelList.instance().toggleFilter("Tasks", "single", "classification");
    modelList.instance().updateSearchText("tigershark");
    expect(modelList.state("searchText")).toEqual("tigershark");
    expect(modelList.state("filteredModels").length).toEqual(1);
    expect(modelList.state("filteredModels")[0]).toEqual(defaultModels[4]);
  })
});

function createModel(name, description, framework, task) {
  return {name: name, description: description, framework: {name: framework}, output: {type: task}};
}
