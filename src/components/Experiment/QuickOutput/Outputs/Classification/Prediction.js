import React from 'react';
import BEMComponent from "../../../../Common/BEMComponent";
import formatProbability from "./ProbabilityFormatter";
import "./Prediction.scss";
import trim from "../../../../../helpers/labelTrimmer";

export default class Prediction extends BEMComponent {
  static defaultProps = {
    className: "prediction",
    feature: {
      classification: {
        label: 'Unknown'
      },
      probability: 1
    }
  }

  render() {
    return (
      <div className={this.block()}>
        <div className={this.element('label')}>{trim(this.props.feature.classification.label)}</div>
        <div className={this.element('probability')}>{formatProbability(this.props.feature.probability)}</div>
      </div>
    )
  }
}
