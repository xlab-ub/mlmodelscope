import React from 'react';
import BEMComponent from "../../../../Common/BEMComponent";
import TopPrediction from "./TopPrediction";
import "./ClassificationOutput.scss";
import PredictionExpander from "../../../../Common/PredictionExpander";
import NoPredictions from "../_Common/components/NoPredictions";

export default class ClassificationOutput extends BEMComponent {
  static defaultProps = {
    className: "classification-output",
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

  getPredictionBody = () => {
    if (this.props.features.length > 0)
      return <div className={this.element('predictions')}>
        <TopPrediction feature={this.props.features[0]}/>
        <PredictionExpander predictions={this.props.features}/>
      </div>

    return <NoPredictions modelId={this.props.modelId}/>
  }

  render() {
    return (
      <div className={this.block()}>
        <h3 className={this.element('title')}>Output</h3>
        <div className={this.element('subtitle')}>What this model thinks the image is.</div>
        {this.getPredictionBody()}
      </div>
    );
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
