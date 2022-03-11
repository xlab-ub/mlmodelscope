import React, { Component } from "react";
import ModelDetailHeader from "./ModelDetailHeader";
import QuickInput from "../Experiment/QuickInput/QuickInput";
import birdy from '../../stories/assets/birdy.png'
import crabby from '../../stories/assets/crabby.png';
import kitty from '../../stories/assets/kitty.png';
import QuickOutput from "../Experiment/QuickOutput/QuickOutput";

export default class ModelDetailPage extends Component {
  render() {
    return(
      <div className="model-detail-page">
        <ModelDetailHeader model={this.props.model}/>
        <div className="model-detail-page__content">
          {this.renderContent()}
        </div>
      </div>
    )
  }

  renderContent = () => {
    if (this.props.trialOutput === undefined) {
      return (<QuickInput sampleInputs={[kitty, crabby, birdy]} onRunModelClicked={this.props.onRunModelClicked}/>);
    } else {
      return (<QuickOutput input={this.props.trialOutput.inputs[0]} features={this.props.trialOutput.results.responses[0].features} />);
    }
  }
}
