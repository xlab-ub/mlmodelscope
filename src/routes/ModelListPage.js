import React, { Component } from "react";
import Helmet from "react-helmet";
import { Row, Col, Layout } from "antd";
import ModelHeader from "../components/ModelList/ModelHeader"
import FilterPanel from "../components/ModelList/FilterPanel";
import ModelsContainer from "../components/ModelList/ModelsContainer";

export default class ModelListPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      frameworks: [
        {name: "Onnxruntime", isActive: false},
        {name: "MXNet", isActive: false},
        {name: "PyTorch", isActive: false},
        {name: "TensorFlow", isActive: false}
      ],
      tasks: [
        {name: "classification", label: "Classification", isActive: false},
        {name: "boundingbox", label: "Object Detection", isActive: false},
        {name: "semanticsegment", label: "Semantic Segmentation", isActive: false},
        {name: "instancesegment", label: "Instance Segmentation", isActive: false},
        {name: "image", label: "Image Enhancement", isActive: false}
      ]
    }
  }

  toggleFramework = framework => {
    let filters = this.state.frameworks;
    let i = filters.findIndex(filter => filter.name === framework);
    if(i >= 0 && i < filters.length){
      filters[i].isActive = !filters[i].isActive;
      this.setState(oldState => ({
        frameworks: [...filters]
      }));
    }
  }

  toggleTask = task => {
    let filters = this.state.tasks;
    let i = filters.findIndex(filter => filter.label === task);
    if(i >= 0 && i < filters.length){
      filters[i].isActive = !filters[i].isActive;
      this.setState(oldState => ({
        tasks: [...filters]
      }));
    }
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
            <FilterPanel frameworks={this.state.frameworks} tasks={this.state.tasks} toggleFramework={this.toggleFramework} toggleTask={this.toggleTask} />
          </Col>
          <Col span="22">
            <ModelsContainer frameworks={this.state.frameworks} tasks={this.state.tasks} />
          </Col>
        </Row>
      </Layout>
    );
  }
}
