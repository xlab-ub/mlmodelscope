import React, { Component } from "react";
import ModelDetailHeader from "./ModelDetailHeader";
import QuickInput from "../Experiment/QuickInput/QuickInput";
import QuickOutput from "../Experiment/QuickOutput/QuickOutput";
import Header from "../Header/Header";
import ModelDescription from "./ModelDescription";

const SampleInputs = [
  'https://s3.amazonaws.com/uploads.staging.mlmodelscope.org/birdy.png',
  'https://s3.amazonaws.com/uploads.staging.mlmodelscope.org/kitty.png',
  'https://s3.amazonaws.com/uploads.staging.mlmodelscope.org/crabby.png'
]

export default class ModelDetailPage extends Component {
  static defaultProps = {
    compare: () => {},
  }

  render() {
    return(
      <div className="model-detail-page">
        <Header />
        <ModelDetailHeader model={this.props.model}/>
        <div className="model-detail-page__content">
          {this.renderContent()}
        </div>
        <ModelDescription model={this.props.model} />
      </div>
    )
  }

  renderContent = () => {
    if (this.props.trialOutput === undefined) {
      return (<QuickInput sampleInputs={SampleInputs} onRunModelClicked={this.props.onRunModelClicked}/>);
    } else {
      return (<QuickOutput input={this.props.trialOutput.inputs[0]} features={this.props.trialOutput.completed_at ? this.props.trialOutput.results.responses[0].features : null} onBackClicked={this.props.onBackToModelClicked} compare={this.props.compare} />);
    }
  }
}
