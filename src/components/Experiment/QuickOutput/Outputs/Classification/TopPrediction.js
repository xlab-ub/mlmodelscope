import React from 'react';
import BEMComponent from "../../../../Common/BEMComponent";
import Rating from "./Rating";

export default class TopPrediction extends BEMComponent {
  static defaultProps = {
    feature: {
      classification: {
        label: "Unknown"
      },
      probability: 1.0
    }
  }

  render() {
    return (
      <div className={this.block()}>
        <div className={this.element('prediction')}>{this.getPredictionLabel()}</div>
        <div className={this.element('probability')}>{this.getPredictionProbability()}</div>
        <Rating />
      </div>
    )
  }

  getPredictionLabel = () => {
    return this.props.feature.classification.label;
  }

  getPredictionProbability = () => {
    return `${(this.props.feature.probability * 100).toFixed()}%`;
  }
}
