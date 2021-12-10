import React, { Component } from "react";
import Helmet from "react-helmet";
import { Layout } from "antd";

export default class ModelListPage extends Component {
  render(){
    return(
      <Layout>
        <Helmet title="Models" meta={[{ property: "og:title", content: "Models" }]} />
      </Layout>
    );
  }
}
