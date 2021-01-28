import SelectableCard from "../SelectableCard/index";
import React, { Component } from "react";
import { Layout, Col, Row, Card } from "antd";
import { isArray, find, filter, findIndex, size } from "lodash";
import yeast from "yeast";
import semver from "semver";
import { withRouter } from "react-router-dom";
import { FrameworkManifests } from "../../../swagger";
import { ExperimentContext } from "../../../context/ExperimentContext";
import ExperimentContentTitle from "../ExperimentContentTitle";

const { Content } = Layout;
const { Meta } = Card;
var logos = require.context("../../../resources/logos", true);

function frameworkLogo(frameworkName) {
  let image = logos("./" + frameworkName + ".png");
  return (
    <img
      src={image}
      alt={frameworkName}
      style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
    />
  );
}

function versionSatisfied(a0, b0) {
  const a = semver.coerce(a0).raw;
  const b = semver.coerce(b0).raw;
  return semver.satisfies(a, b);
}

class SelectFramework extends Component {
  async componentDidMount() {
    if (this.props.context.frameworkManifests === null) {
      try {
        const req = await FrameworkManifests({
          frameworkName: "*",
          frameworkVersion: "*",
        });

        this.props.context.setFrameworkManifests(req.manifests);
      } catch (err) {
        console.error(err);
      }
    }
  }

  handleClick(item) {
    this.props.context.setFramework(item);
  }

  isSelected(item) {
    return find(this.props.context.frameworks, 
           e => e.name === item.name && versionSatisfied(e.version, item.version))
  }

  render() {
    var frameworks = this.props.context.frameworkManifests;

    if (!isArray(frameworks)) {
      return <div />;
    }

    return (
      <Layout>
        <Content>
          <ExperimentContentTitle text={"Select the Framework"} />

          <div style={{ width: "90%", margin: "auto" }}>
            <Row gutter={16} type={"flex"}>
              {frameworks.map((item, index) => (
                <Col key={yeast()} md = {8} sm={12} xs={24} style={{ padding: "10px" }}>
                  <SelectableCard
                    tooltip={true}
                    onClick={() => this.handleClick(item)}
                    cover={frameworkLogo(item.name.toLowerCase())}
                    selected={this.isSelected(item)}
                  >
                    <Meta
                      title={item.name + " V" + item.version}
                    />
                  </SelectableCard>
                </Col>
              ))}
            </Row>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default withRouter(props => (
  <ExperimentContext.Consumer>
    {context => <SelectFramework {...props} context={context} />}
  </ExperimentContext.Consumer>
));
