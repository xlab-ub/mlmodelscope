import React, {Component} from 'react';
import PredictionExpander from "../Common/PredictionExpander";

export default class ClassificationSummary extends Component {
  predictionsFromInclusiveRange = (x, y) => {
    let predictionsInRange = this.props.results.responses[0].features.slice(x, y+1);
    let predictionKey = 0;
    return predictionsInRange.map(prediction => (
      <div key={predictionKey++} className="classification-summary__result">
        <dt>{this.makeReadableLabel(prediction.classification.label)}</dt>
        <dd>{this.makeProbabilityStringFromDecimal(prediction.probability)}</dd>
      </div>
    ));
  }

  makeReadableLabel = (originalLabel) => {
    let firstSpaceLoc = originalLabel.indexOf(" ");
    return originalLabel.slice(firstSpaceLoc + 1);
  }

  makeProbabilityStringFromDecimal = (decimalProbability) => {
    return `${Math.round(decimalProbability * 100)}%`;
  }

  render() {
    let predictions = this.props.results.responses[0].features;
    return (
      <div className="classification-summary">
        <p className="classification-summary__header">Output:</p>
        <div className="classifcation-output__results">
          <div className="classification-summary__top-result">
            <span>{this.makeReadableLabel(predictions[0].classification.label)}</span>
            <span>{this.makeProbabilityStringFromDecimal(predictions[0].probability)}</span>
          </div>
          <div className="classification-summary__extra-predictions">
            <PredictionExpander predictions={predictions} />
          </div>
        </div>
      </div>
    )
  }
}
