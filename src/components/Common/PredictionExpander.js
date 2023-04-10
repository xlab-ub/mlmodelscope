import React, {useState} from 'react';
import Prediction from "../Experiment/QuickOutput/Outputs/Classification/Prediction";
import "./PredictionExpander.scss";
import useBEMNaming from "../../common/useBEMNaming";

const defaultProps = {
  className: "prediction-expander",
  predictions: []
};

export default function PredictionExpander(givenProps) {
  const props = {...defaultProps, ...givenProps};
  const predictions = props.predictions.filter(prediction => (prediction.probability * 100) > (props.globalValue ?? -1));
  const { getBlock, getElement } = useBEMNaming(props.className);
  const [predictionsExpanded, setPredictionsExpanded] = useState(!!props.showAll);

  const makePrediction = (feature, index) => {
    return <Prediction key={index} feature={feature}/>
  };

  const makeExpanderButton = () => {
    if (!props.showAll && props.predictions.length > 3) {
      return (
        <button className={getElement('expand')} onClick={expandClicked}>{makeExpanderLabel()}</button>)
    }
  }

  const makeExpanderLabel = () => {
    return `${predictionsExpanded ? 'Hide' : 'Show'} all predictions`;
  }

  const expandClicked = () => {
    if (props.toggleShowAll) props.toggleShowAll();
    else
      setPredictionsExpanded(!predictionsExpanded);
  }

  return (
    <div className={getBlock()}>
      <div className={getElement('predictions')}>
        {predictions.slice(1, 3).map(makePrediction)}

        <div hidden={!props.showAll} className={getElement('prediction-overflow')}>
          {predictions.slice(3).map(makePrediction)}
        </div>
      </div>
      {makeExpanderButton()}
    </div>
  );
}
