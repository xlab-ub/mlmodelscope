import React from 'react';
import BEMComponent from "../../../../Common/BEMComponent";
import Rating from "./Rating";
import formatProbability from "./ProbabilityFormatter";
import "./TopPrediction.scss";
import trim from "../../../../../helpers/labelTrimmer";

export default class TopPrediction extends BEMComponent {
  static defaultProps = {
    className: "top-prediction",
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
        {false &&
          <Rating/>
        }
      </div>
    )
  }

  getPredictionLabel = () => {
    return trim(this.props.feature.classification.label);
  }

  getPredictionProbability = () => {
    return formatProbability(this.props.feature.probability);
  }
}
