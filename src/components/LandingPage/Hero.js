import React, { Component } from "react";

import { Col, Row } from "antd";
import QueueAnim from "rc-queue-anim";
import withSizes from "react-sizes";
import { withScroll } from "react-fns";
import Color from "color";

import './LandingPage.css';

const primaryColor = "#1A263A";
const lightPrimary = Color(primaryColor).lighten(0.5).hex();
const darkerPrimary = Color(primaryColor).darken(0.5).hex();

@withScroll
@withSizes(({ width }, { breakpoint }) => ({ isMobile: width < breakpoint }))
class Hero extends Component {
  render() {
    var docslocation = window.location.hostname
    if (docslocation.split(".")[0] === "www") {
      docslocation = "docs." + docslocation.substring(4);
    }
    else if (window.location.hostname !== "localhost") {
      docslocation = "docs." + docslocation;
    }
    else {
      docslocation = "docs.mlmodelscope.org";
    }

	docslocation = window.location.protocol + "//" + docslocation;


    const { isMobile } = this.props;
    return (
      <div className="Hero" style={{paddingLeft: isMobile ? "50px" : "150px",}}>
        <QueueAnim type={isMobile ? "bottom" : "left"} delay={300}>
          <Row type="flex" justify="start" style={{ paddingTop: "5vh" }}>
            <Col
              lg={{ span: 18 }}
              xs={{ span: 20 }}
              style={{
                fontSize: isMobile ? "2rem" : "4.5rem",
                fontWeight: 800,
                color: "white",
                textAlign: "left",
                textShadow: `5px 5px ${lightPrimary}`,
              }}
            >
              Reproduce and Analyze Diverse Machine Learning Workloads
            </Col>
          </Row>
          <Row type="flex" justify="start" gutter={16} style={{ marginTop: "3rem" }}>
            <Col lg={{ span: 4 }} xs={{ span: 20 }}>
              <a href={docslocation} className="hero_button">Learn More</a>
            </Col>
            {isMobile ? null : (
                <Col lg={{ span: 4 }} xs={{ span: 20 }}>
                  <a href="/playground" className="hero_button">Playground</a>
                </Col>
            )}
          </Row>
        </QueueAnim>
      </div>
    );
  }
}

export default Hero;
