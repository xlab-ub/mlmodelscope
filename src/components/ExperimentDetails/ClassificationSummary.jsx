import React, {Component} from 'react';
import PredictionExpander from "../Common/PredictionExpander";

export default class ClassificationSummary extends Component {
  makeReadableLabel = (originalLabel) => {
    let firstSpaceLoc = originalLabel.indexOf(" ");
    return originalLabel.slice(firstSpaceLoc + 1);
  }

  makeProbabilityStringFromDecimal = (decimalProbability) => {
    return `${Math.round(decimalProbability * 100)}%`;
  }

  getFirstPrediction() {
    const predictions = this.props.results.responses[0].features;
    if (predictions.length > 0)
      return predictions[0];

    return {
      classification: {
        label: "Unknown"
      },
      probability: 1.0
    };
  }

  render() {
    let predictions = this.props.results.responses[0].features;
    return (
      <div className="classification-summary">
        <p className="classification-summary__header">Output:</p>
        <div className="classification-summary__results">
          <div className="classification-summary__top-result">
            <span>{this.makeReadableLabel(this.getFirstPrediction().classification.label)}</span>
            <span>{this.makeProbabilityStringFromDecimal(this.getFirstPrediction().probability)}</span>
          </div>
          <div className="classification-summary__extra-predictions">
            <PredictionExpander predictions={predictions} />
          </div>
        </div>
      </div>
    )
  }
}
