import React from 'react';
import BEMComponent from "../../../../Common/BEMComponent";
import formatProbability from "./ProbabilityFormatter";
import "./Prediction.scss";

export default class Prediction extends BEMComponent {
  static defaultProps = {
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
        <div className={this.element('label')}>{this.props.feature.classification.label}</div>
        <div className={this.element('probability')}>{formatProbability(this.props.feature.probability)}</div>
      </div>
    )
  }
}
