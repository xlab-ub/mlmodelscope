import React from 'react';
import PredictionExpander from "../../Common/PredictionExpander";
import OutputDuration from "../../Experiment/QuickOutput/Outputs/_Common/components/OutputDuration";

export default function ClassificationSummary(props) {
  const makeReadableLabel = (originalLabel) => {
    let firstSpaceLoc = originalLabel.indexOf(" ");
    return originalLabel.slice(firstSpaceLoc + 1);
  }

  const makeProbabilityStringFromDecimal = (decimalProbability) => {
    return `${Math.round(decimalProbability * 100)}%`;
  }

  const getFirstPrediction = () => {
    const predictions = props.results.responses[0].features;
    if (predictions.length > 0)
      return predictions[0];

    return {
      classification: {
        label: "Unknown"
      },
      probability: 1.0
    };
  }

  let predictions = props.results.responses[0].features;
  return (
    <div className="classification-summary">
      <div className={"classification-summary__header-row"}>
        <p className="classification-summary__header">Output:</p>
        <OutputDuration duration={props.results.duration}/>
      </div>

      <div className="classification-summary__results">
        <div className="classification-summary__top-result">
          <span>{makeReadableLabel(getFirstPrediction().classification.label)}</span>
          <span>{makeProbabilityStringFromDecimal(getFirstPrediction().probability)}</span>
        </div>
        <div className="classification-summary__extra-predictions">
          <PredictionExpander globalValue={props.value} predictions={predictions}/>
        </div>
      </div>
    </div>
  )
}
