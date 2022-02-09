import ModelListWithFilters from "./ModelListWithFilters";
import expect from "expect";
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
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
  ];

  let modelList;

  beforeEach(() => {
    modelList = shallow(<ModelListWithFilters frameworkOptions={defaultFrameworks} models={defaultModels} />).instance();
  })

  it('creates framework options for filter group', () => {
    let frameworkFilterGroup = modelList.state.filterGroups.find(group => group.header == "Frameworks");
    expect(frameworkFilterGroup.options).toEqual(defaultFrameworks);
  });

  it('can filter by framework', async () => {
    modelList.toggleFilter("Frameworks", "single", "PyTorch");
    expect(modelList.state.filteredModels[0]).toEqual(defaultModels[1]);
  });
});

function createModel(name, description, framework, task) {
  return {name: name, description: description, framework: {name: framework}, output: {type: task}};
}
