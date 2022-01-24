import React, { Component } from "react";
import Helmet from "react-helmet";
import { Row, Col, Layout } from "antd";
import ModelHeader from "../components/ModelList/ModelHeader"
import FilterPanel from "../components/ModelList/FilterPanel";
import ModelsContainer from "../components/ModelList/ModelsContainer";
import GetApiHelper from "../helpers/api";

export default class ModelListPage extends Component {
  constructor(props){
    super(props);
    this.api = GetApiHelper();
    this.state = {
      filterGroups: [
        {
          header: "Frameworks",
          select: "multi",
          fieldA: "framework",
          fieldB: "name",
          options: [
            {name: "Onnxruntime", label: "Onnxruntime", isActive: false},
            {name: "MXNet", label: "MXNet", isActive: false},
            {name: "PyTorch", label: "PyTorch", isActive: false},
            {name: "TensorFlow", label: "TensorFlow", isActive: false}
          ]
        },
        {
          header: "Tasks",
          select: "single",
          fieldA: "output",
          fieldB: "type",
          options: [
            {name: "classification", label: "Classification", isActive: true},
            {name: "boundingbox", label: "Object Detection", isActive: false},
            {name: "semanticsegment", label: "Semantic Segmentation", isActive: false},
            {name: "instancesegment", label: "Instance Segmentation", isActive: false},
            {name: "image", label: "Image Enhancement", isActive: false}
          ]
        }
      ],
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
  }

  toggleFilterMulti = (filterGroup, target) => {
    let targetOption = filterGroup.options.find(option => option.label === target);
    targetOption.isActive = !targetOption.isActive;
  }

  toggleFilterSingle = (filterGroup, target) => {
    let options = filterGroup.options;
    for(let i = 0 ; i < options.length; i++){
      if(options[i].label === target){
        options[i].isActive = true;
      }
      else{
        options[i].isActive = false;
      }
    }
  }

  componentDidMount() {
    this.api.Models.subscribe({
      next: (models) => {
        console.log('got models from api', models)
        this.setState({ models: models });
      }
    });
    this.api.getModels();
  }

  render(){
    return(
      <Layout>
        <Helmet title="Models" meta={[{ property: "og:title", content: "Models" }]} />
        <Row>
          <Col>
            <ModelHeader />
          </Col>
        </Row>

        <Row>
          <Col span="2">
            <FilterPanel filterGroups={this.state.filterGroups} toggleFramework={this.toggleFilterMulti} toggleTask={this.toggleFilterSingle} toggleFilter={this.toggleFilter} />
          </Col>
          <Col span="22">
            <ModelsContainer filterGroups={this.state.filterGroups} models={this.state.models} />
          </Col>
        </Row>
      </Layout>
    );
  }
}
