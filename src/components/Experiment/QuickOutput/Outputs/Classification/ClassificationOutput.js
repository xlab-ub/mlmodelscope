import React from 'react';
import BEMComponent from "../../../../Common/BEMComponent";
import TopPrediction from "./TopPrediction";
import Prediction from "./Prediction";
import "./ClassificationOutput.scss";
import PredictionExpander from "../../../../Common/PredictionExpander";

export default class ClassificationOutput extends BEMComponent {
  static defaultProps = {
    features: []
  }

  constructor(props) {
    super(props);

    this.state = {
      predictionsExpanded: false
    }

    this.modifiers = {
      expand: {
        collapsed: (state) => !state.predictionsExpanded
      },
      "prediction-overflow": {
        collapsed: (state) => !state.predictionsExpanded
      }
    }
  }

  render() {
    return (
      <div className={this.block()}>
        <h3 className={this.element('title')}>Output</h3>
        <div className={this.element('subtitle')}>What this model thinks the image is.</div>
        <div className={this.element('predictions')}>
          <TopPrediction feature={this.props.features[0]} />
          <PredictionExpander predictions={this.props.features}/>
        </div>
      </div>
    );
  }

  makePrediction = (feature, index) => {
    return <Prediction key={index} feature={feature} />
  }

  makeExpanderLabel = () => {
    return `${this.state.predictionsExpanded ? 'Hide' : 'Show'} all predictions`;
  }

  expandClicked = () => {
    this.setState({
      predictionsExpanded: !this.state.predictionsExpanded
    });
  }
}
