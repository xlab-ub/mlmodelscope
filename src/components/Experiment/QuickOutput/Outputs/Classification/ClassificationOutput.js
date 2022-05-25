import React from 'react';
import BEMComponent from "../../../../Common/BEMComponent";
import TopPrediction from "./TopPrediction";
import "./ClassificationOutput.scss";
import PredictionExpander from "../../../../Common/PredictionExpander";
import NoPredictions from "../_Common/components/NoPredictions";
import Task from "../../../../../helpers/Task";
import OutputDuration from "../_Common/components/OutputDuration";
import DurationConverter from "../_Common/utils/DurationConverter";

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
    const task = Task.image_classification;
    return (
      <div className={this.block()}>
        <div className={this.element("title-row")}>
          <h3 className={this.element('title')}>Output</h3>
          <OutputDuration duration={DurationConverter(this.props.trial.results.duration)}/>

        </div>
        <div className={this.element('subtitle')}>{task.outputText}</div>
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
