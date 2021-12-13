import React, { Component } from "react";
import Helmet from "react-helmet";
import { Row, Col, Layout } from "antd";
import ModelHeader from "../components/ModelList/ModelHeader"
import FilterPanel from "../components/ModelList/FilterPanel";
import ModelsContainer from "../components/ModelList/ModelsContainer";

export default class ModelListPage extends Component {
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
            <FilterPanel />
          </Col>
          <Col span="22">
            <ModelsContainer />
          </Col>
        </Row>
      </Layout>
    );
  }
}
